import { Inventory, Slot, SlotWithItem, ItemData } from '../typings';
import { Items } from '../store/items';
import { isSlotWithItem } from './index';

// Default grid dimensions
export const DEFAULT_GRID_WIDTH = 10;
export const DEFAULT_GRID_HEIGHT = 10;
export const DEFAULT_ITEM_WIDTH = 1;
export const DEFAULT_ITEM_HEIGHT = 1;

// Get item dimensions from item data
export const getItemDimensions = (itemName: string, rotated: boolean = false): { width: number; height: number } => {
  const itemData = Items[itemName];
  let width = itemData?.width ?? DEFAULT_ITEM_WIDTH;
  let height = itemData?.height ?? DEFAULT_ITEM_HEIGHT;
  
  // Swap dimensions if rotated
  if (rotated) {
    [width, height] = [height, width];
  }
  
  return { width, height };
};

// Check if a position is valid within grid bounds
export const isWithinGridBounds = (
  x: number,
  y: number,
  width: number,
  height: number,
  gridWidth: number,
  gridHeight: number
): boolean => {
  return x >= 0 && y >= 0 && x + width <= gridWidth && y + height <= gridHeight;
};

// Check if two rectangles overlap
export const rectanglesOverlap = (
  x1: number, y1: number, w1: number, h1: number,
  x2: number, y2: number, w2: number, h2: number
): boolean => {
  return !(x1 >= x2 + w2 || x1 + w1 <= x2 || y1 >= y2 + h2 || y1 + h1 <= y2);
};

// Check if placing an item at position would collide with existing items
export const checkGridCollision = (
  x: number,
  y: number,
  width: number,
  height: number,
  items: Slot[],
  excludeSlot?: number
): boolean => {
  for (const item of items) {
    if (!isSlotWithItem(item)) continue;
    if (excludeSlot !== undefined && item.slot === excludeSlot) continue;
    
    const itemX = item.gridX ?? 0;
    const itemY = item.gridY ?? 0;
    const itemWidth = item.width ?? DEFAULT_ITEM_WIDTH;
    const itemHeight = item.height ?? DEFAULT_ITEM_HEIGHT;
    
    if (rectanglesOverlap(x, y, width, height, itemX, itemY, itemWidth, itemHeight)) {
      return true; // Collision detected
    }
  }
  
  return false; // No collision
};

// Find an available position in the grid for an item
export const findAvailableGridPosition = (
  width: number,
  height: number,
  items: Slot[],
  gridWidth: number,
  gridHeight: number,
  excludeSlot?: number
): { x: number; y: number } | null => {
  // Scan through grid positions from top-left to bottom-right
  for (let y = 0; y <= gridHeight - height; y++) {
    for (let x = 0; x <= gridWidth - width; x++) {
      if (!checkGridCollision(x, y, width, height, items, excludeSlot)) {
        return { x, y };
      }
    }
  }
  
  return null; // No available position
};

// Check if an item can be placed at a specific grid position
export const canPlaceItem = (
  x: number,
  y: number,
  width: number,
  height: number,
  items: Slot[],
  gridWidth: number,
  gridHeight: number,
  excludeSlot?: number
): boolean => {
  if (!isWithinGridBounds(x, y, width, height, gridWidth, gridHeight)) {
    return false;
  }
  
  return !checkGridCollision(x, y, width, height, items, excludeSlot);
};

// Convert grid position to slot index (for compatibility)
export const gridPositionToSlot = (x: number, y: number, gridWidth: number): number => {
  return y * gridWidth + x + 1;
};

// Generate grid cells for rendering
export const generateGridCells = (gridWidth: number, gridHeight: number): { x: number; y: number }[] => {
  const cells: { x: number; y: number }[] = [];
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      cells.push({ x, y });
    }
  }
  return cells;
};

// Get the grid cell at a specific position (for drop target calculation)
export const getCellAtPosition = (
  mouseX: number,
  mouseY: number,
  gridRect: DOMRect,
  cellSize: number,
  gridWidth: number,
  gridHeight: number
): { x: number; y: number } | null => {
  const relativeX = mouseX - gridRect.left;
  const relativeY = mouseY - gridRect.top;
  
  const cellX = Math.floor(relativeX / cellSize);
  const cellY = Math.floor(relativeY / cellSize);
  
  if (cellX >= 0 && cellX < gridWidth && cellY >= 0 && cellY < gridHeight) {
    return { x: cellX, y: cellY };
  }
  
  return null;
};

// Calculate the snap position for an item being dragged (centered on cursor)
export const getSnapPosition = (
  mouseX: number,
  mouseY: number,
  gridRect: DOMRect,
  cellSize: number,
  itemWidth: number,
  itemHeight: number,
  gridWidth: number,
  gridHeight: number
): { x: number; y: number } => {
  const relativeX = mouseX - gridRect.left;
  const relativeY = mouseY - gridRect.top;
  
  // Calculate cell position centered on the cursor
  let cellX = Math.floor((relativeX - (itemWidth * cellSize) / 2) / cellSize);
  let cellY = Math.floor((relativeY - (itemHeight * cellSize) / 2) / cellSize);
  
  // Clamp to grid bounds
  cellX = Math.max(0, Math.min(cellX, gridWidth - itemWidth));
  cellY = Math.max(0, Math.min(cellY, gridHeight - itemHeight));
  
  return { x: cellX, y: cellY };
};

// Create a 2D grid map of occupied cells
export const createOccupancyGrid = (
  items: Slot[],
  gridWidth: number,
  gridHeight: number
): (number | null)[][] => {
  // Initialize grid with null (empty)
  const grid: (number | null)[][] = Array(gridHeight)
    .fill(null)
    .map(() => Array(gridWidth).fill(null));
  
  // Mark occupied cells with slot numbers
  for (const item of items) {
    if (!isSlotWithItem(item)) continue;
    
    const x = item.gridX ?? 0;
    const y = item.gridY ?? 0;
    const width = item.width ?? DEFAULT_ITEM_WIDTH;
    const height = item.height ?? DEFAULT_ITEM_HEIGHT;
    
    for (let dy = 0; dy < height; dy++) {
      for (let dx = 0; dx < width; dx++) {
        const gridX = x + dx;
        const gridY = y + dy;
        if (gridX < gridWidth && gridY < gridHeight) {
          grid[gridY][gridX] = item.slot;
        }
      }
    }
  }
  
  return grid;
};
