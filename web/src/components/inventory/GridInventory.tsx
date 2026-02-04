import React, { useMemo, useRef, useState, useCallback } from 'react';
import { Inventory, SlotWithItem } from '../../typings';
import { useAppSelector } from '../../store';
import { getTotalWeight, isSlotWithItem } from '../../helpers';
import {
  DEFAULT_GRID_WIDTH,
  DEFAULT_GRID_HEIGHT,
  generateGridCells,
  createOccupancyGrid,
  canPlaceItem,
  getSnapPosition,
  getItemDimensions,
  DEFAULT_ITEM_WIDTH,
  DEFAULT_ITEM_HEIGHT,
} from '../../helpers/grid';
import GridItem from './GridItem';
import WeightBar from '../utils/WeightBar';
import './GridInventory.scss';

const CELL_SIZE = 55; // Size of each grid cell in pixels

interface GridInventoryProps {
  inventory: Inventory;
}

const GridInventory: React.FC<GridInventoryProps> = ({ inventory }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isBusy = useAppSelector((state) => state.inventory.isBusy);
  
  const gridWidth = inventory.gridWidth ?? DEFAULT_GRID_WIDTH;
  const gridHeight = inventory.gridHeight ?? DEFAULT_GRID_HEIGHT;
  
  const weight = useMemo(
    () => (inventory.maxWeight !== undefined ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0),
    [inventory.maxWeight, inventory.items]
  );

  const cells = useMemo(() => generateGridCells(gridWidth, gridHeight), [gridWidth, gridHeight]);
  const occupancyGrid = useMemo(
    () => createOccupancyGrid(inventory.items, gridWidth, gridHeight),
    [inventory.items, gridWidth, gridHeight]
  );

  // Get all items with grid positions
  const gridItems = useMemo(() => {
    return inventory.items.filter((item) => isSlotWithItem(item)).map((item) => ({
      ...item,
      gridX: item.gridX ?? 0,
      gridY: item.gridY ?? 0,
      width: item.width ?? DEFAULT_ITEM_WIDTH,
      height: item.height ?? DEFAULT_ITEM_HEIGHT,
    }));
  }, [inventory.items]);

  // Drag preview state
  const [dragPreview, setDragPreview] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    valid: boolean;
  } | null>(null);

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      // Default dimensions for drag preview. In a full implementation, 
      // this would retrieve dimensions from the react-dnd drag state.
      // Currently using 1x1 as a fallback since react-dnd's useDrop 
      // doesn't provide item data in dragOver events.
      const itemWidth = 1;
      const itemHeight = 1;

      const pos = getSnapPosition(
        e.clientX,
        e.clientY,
        rect,
        CELL_SIZE,
        itemWidth,
        itemHeight,
        gridWidth,
        gridHeight
      );

      const valid = canPlaceItem(
        pos.x,
        pos.y,
        itemWidth,
        itemHeight,
        inventory.items,
        gridWidth,
        gridHeight
      );

      setDragPreview({
        x: pos.x,
        y: pos.y,
        width: itemWidth,
        height: itemHeight,
        valid,
      });
    },
    [gridWidth, gridHeight, inventory.items]
  );

  const handleDragLeave = useCallback(() => {
    setDragPreview(null);
  }, []);

  const handleDrop = useCallback(() => {
    setDragPreview(null);
  }, []);

  return (
    <div className="grid-inventory-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
      <div className="grid-inventory-header">
        <div className="grid-inventory-header-info">
          <p className="grid-inventory-label">{inventory.label}</p>
          {inventory.maxWeight && (
            <p className="grid-inventory-weight">
              {weight / 1000}/{inventory.maxWeight / 1000}kg
            </p>
          )}
        </div>
        <WeightBar percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0} />
      </div>

      <div
        className="grid-inventory-container"
        ref={gridRef}
        style={{
          width: gridWidth * CELL_SIZE,
          height: gridHeight * CELL_SIZE,
          gridTemplateColumns: `repeat(${gridWidth}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${gridHeight}, ${CELL_SIZE}px)`,
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Grid cells (background) */}
        {cells.map(({ x, y }) => (
          <div
            key={`cell-${x}-${y}`}
            className={`grid-cell ${occupancyGrid[y][x] !== null ? 'occupied' : ''}`}
            style={{
              gridColumn: x + 1,
              gridRow: y + 1,
            }}
          />
        ))}

        {/* Items */}
        {gridItems.map((item) => (
          <GridItem
            key={`item-${item.slot}`}
            item={item as SlotWithItem}
            inventoryType={inventory.type}
            inventoryGroups={inventory.groups}
            inventoryId={inventory.id}
            cellSize={CELL_SIZE}
          />
        ))}

        {/* Drag preview overlay */}
        {dragPreview && (
          <div
            className={`grid-drag-preview ${dragPreview.valid ? 'valid' : 'invalid'}`}
            style={{
              gridColumn: `${dragPreview.x + 1} / span ${dragPreview.width}`,
              gridRow: `${dragPreview.y + 1} / span ${dragPreview.height}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GridInventory;
