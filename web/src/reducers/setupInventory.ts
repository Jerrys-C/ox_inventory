import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { getItemData, itemDurability } from '../helpers';
import { Items } from '../store/items';
import { Inventory, Slot, State } from '../typings';
import { 
  DEFAULT_GRID_WIDTH, 
  DEFAULT_GRID_HEIGHT, 
  DEFAULT_ITEM_WIDTH, 
  DEFAULT_ITEM_HEIGHT,
  findAvailableGridPosition 
} from '../helpers/grid';

// Helper to setup grid positions for items
const setupGridPositions = (items: Slot[], gridWidth: number, gridHeight: number): Slot[] => {
  const positionedItems: Slot[] = [];
  
  for (const item of items) {
    if (!item.name) {
      positionedItems.push(item);
      continue;
    }
    
    // Get item dimensions from Items store or use defaults
    const itemData = Items[item.name];
    const itemWidth = itemData?.width ?? item.width ?? DEFAULT_ITEM_WIDTH;
    const itemHeight = itemData?.height ?? item.height ?? DEFAULT_ITEM_HEIGHT;
    
    // If item already has grid position, validate it
    if (item.gridX !== undefined && item.gridY !== undefined) {
      positionedItems.push({
        ...item,
        width: itemWidth,
        height: itemHeight,
      });
      continue;
    }
    
    // Find available position for new items
    const position = findAvailableGridPosition(
      itemWidth,
      itemHeight,
      positionedItems,
      gridWidth,
      gridHeight
    );
    
    if (position) {
      positionedItems.push({
        ...item,
        gridX: position.x,
        gridY: position.y,
        width: itemWidth,
        height: itemHeight,
      });
    } else {
      // Fallback: place at 0,0 if no space found (should not happen in practice)
      console.warn(`No space found for item ${item.name} in grid`);
      positionedItems.push({
        ...item,
        gridX: 0,
        gridY: 0,
        width: itemWidth,
        height: itemHeight,
      });
    }
  }
  
  return positionedItems;
};

export const setupInventoryReducer: CaseReducer<
  State,
  PayloadAction<{
    leftInventory?: Inventory;
    rightInventory?: Inventory;
  }>
> = (state, action) => {
  const { leftInventory, rightInventory } = action.payload;
  const curTime = Math.floor(Date.now() / 1000);

  if (leftInventory) {
    const gridWidth = leftInventory.gridWidth ?? DEFAULT_GRID_WIDTH;
    const gridHeight = leftInventory.gridHeight ?? DEFAULT_GRID_HEIGHT;
    
    const items = Object.values(leftInventory.items).map((item, index) => {
      const foundItem = item?.slot ? item : { slot: index + 1 };
      
      if (!foundItem.name) return foundItem;

      if (typeof Items[foundItem.name] === 'undefined') {
        getItemData(foundItem.name);
      }

      foundItem.durability = itemDurability(foundItem.metadata, curTime);
      return foundItem;
    }).filter(item => item.name); // Only keep items with names for grid layout
    
    state.leftInventory = {
      ...leftInventory,
      gridWidth,
      gridHeight,
      items: setupGridPositions(items, gridWidth, gridHeight),
    };
  }

  if (rightInventory) {
    const gridWidth = rightInventory.gridWidth ?? DEFAULT_GRID_WIDTH;
    const gridHeight = rightInventory.gridHeight ?? DEFAULT_GRID_HEIGHT;
    
    const items = Object.values(rightInventory.items).map((item, index) => {
      const foundItem = item?.slot ? item : { slot: index + 1 };
      
      if (!foundItem.name) return foundItem;

      if (typeof Items[foundItem.name] === 'undefined') {
        getItemData(foundItem.name);
      }

      foundItem.durability = itemDurability(foundItem.metadata, curTime);
      return foundItem;
    }).filter(item => item.name); // Only keep items with names for grid layout
    
    state.rightInventory = {
      ...rightInventory,
      gridWidth,
      gridHeight,
      items: setupGridPositions(items, gridWidth, gridHeight),
    };
  }

  state.shiftPressed = false;
  state.isBusy = false;
};
