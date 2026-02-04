import React, { useCallback, useRef, useState } from 'react';
import { DragSource, Inventory, InventoryType, SlotWithItem } from '../../typings';
import { useDrag, useDragDropManager, useDrop } from 'react-dnd';
import { useAppDispatch } from '../../store';
import WeightBar from '../utils/WeightBar';
import { onDrop } from '../../dnd/onDrop';
import { onBuy } from '../../dnd/onBuy';
import { Items } from '../../store/items';
import { canCraftItem, canPurchaseItem, getItemUrl, isSlotWithItem } from '../../helpers';
import { onUse } from '../../dnd/onUse';
import { Locale } from '../../store/locale';
import { onCraft } from '../../dnd/onCraft';
import useNuiEvent from '../../hooks/useNuiEvent';
import { ItemsPayload } from '../../reducers/refreshSlots';
import { closeTooltip, openTooltip } from '../../store/tooltip';
import { openContextMenu } from '../../store/contextMenu';
import { DEFAULT_ITEM_HEIGHT, DEFAULT_ITEM_WIDTH } from '../../helpers/grid';

interface GridItemProps {
  item: SlotWithItem;
  inventoryId: Inventory['id'];
  inventoryType: Inventory['type'];
  inventoryGroups: Inventory['groups'];
  cellSize: number;
}

const GridItem: React.FC<GridItemProps> = ({
  item,
  inventoryId,
  inventoryType,
  inventoryGroups,
  cellSize,
}) => {
  const manager = useDragDropManager();
  const dispatch = useAppDispatch();
  const timerRef = useRef<number | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isRotated, setIsRotated] = useState(item.rotated ?? false);

  // Get dimensions - prioritize slot data (from Lua), fallback to defaults
  const baseWidth = item.width ?? DEFAULT_ITEM_WIDTH;
  const baseHeight = item.height ?? DEFAULT_ITEM_HEIGHT;
  const width = isRotated ? baseHeight : baseWidth;
  const height = isRotated ? baseWidth : baseHeight;
  const gridX = item.gridX ?? 0;
  const gridY = item.gridY ?? 0;

  const canDrag = useCallback(() => {
    return canPurchaseItem(item, { type: inventoryType, groups: inventoryGroups }) && canCraftItem(item, inventoryType);
  }, [item, inventoryType, inventoryGroups]);

  const [{ isDragging }, drag] = useDrag<DragSource, void, { isDragging: boolean }>(
    () => ({
      type: 'SLOT',
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      item: () =>
        isSlotWithItem(item, inventoryType !== InventoryType.SHOP)
          ? {
              inventory: inventoryType,
              item: {
                name: item.name,
                slot: item.slot,
              },
              image: item?.name && `url(${getItemUrl(item) || 'none'}`,
            }
          : null,
      canDrag,
    }),
    [inventoryType, item, canDrag]
  );

  const [{ isOver }, drop] = useDrop<DragSource, void, { isOver: boolean }>(
    () => ({
      accept: 'SLOT',
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
      drop: (source) => {
        dispatch(closeTooltip());
        switch (source.inventory) {
          case InventoryType.SHOP:
            onBuy(source, { inventory: inventoryType, item: { slot: item.slot } });
            break;
          case InventoryType.CRAFTING:
            onCraft(source, { inventory: inventoryType, item: { slot: item.slot } });
            break;
          default:
            onDrop(source, { inventory: inventoryType, item: { slot: item.slot } });
            break;
        }
      },
      canDrop: (source) =>
        (source.item.slot !== item.slot || source.inventory !== inventoryType) &&
        inventoryType !== InventoryType.SHOP &&
        inventoryType !== InventoryType.CRAFTING,
    }),
    [inventoryType, item, dispatch]
  );

  useNuiEvent('refreshSlots', (data: { items?: ItemsPayload | ItemsPayload[] }) => {
    if (!isDragging && !data.items) return;
    if (!Array.isArray(data.items)) return;

    const itemSlot = data.items.find(
      (dataItem) => dataItem.item.slot === item.slot && dataItem.inventory === inventoryId
    );

    if (!itemSlot) return;

    manager.dispatch({ type: 'dnd-core/END_DRAG' });
  });

  // Connect both drag and drop refs using a callback ref
  const connectDragDrop = useCallback((node: HTMLDivElement | null) => {
    elementRef.current = node;
    if (node) {
      drag(drop(node));
    }
  }, [drag, drop]);

  const handleContext = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (inventoryType !== 'player' || !isSlotWithItem(item)) return;

    dispatch(openContextMenu({ item, coords: { x: event.clientX, y: event.clientY } }));
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(closeTooltip());
    if (timerRef.current) clearTimeout(timerRef.current);
    if (event.ctrlKey && isSlotWithItem(item) && inventoryType !== 'shop' && inventoryType !== 'crafting') {
      onDrop({ item: item, inventory: inventoryType });
    } else if (event.altKey && isSlotWithItem(item) && inventoryType === 'player') {
      onUse(item);
    }
  };

  const handleRotate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsRotated(!isRotated);
  };

  // Calculate item image size - scale based on item dimensions
  const itemPixelWidth = width * cellSize;
  const itemPixelHeight = height * cellSize;
  // For large items, use more of the available space
  const imageScale = width > 1 || height > 1 ? 0.75 : 0.65;
  const imageSize = Math.min(itemPixelWidth, itemPixelHeight) * imageScale;

  // Determine if this is a large item (for layout adjustments)
  const isLargeItem = width > 1 || height > 1;
  
  // Get item label
  const itemLabel = item.metadata?.label || Items[item.name]?.label || item.name;

  // Calculate responsive font sizes based on cell size
  const baseFontSize = Math.max(10, Math.floor(cellSize * 0.16));
  const smallFontSize = Math.max(9, Math.floor(cellSize * 0.14));

  return (
    <div
      ref={connectDragDrop}
      onContextMenu={handleContext}
      onClick={handleClick}
      className={`grid-item ${isLargeItem ? 'large' : 'small'}`}
      style={{
        gridColumn: `${gridX + 1} / span ${width}`,
        gridRow: `${gridY + 1} / span ${height}`,
        filter:
          !canPurchaseItem(item, { type: inventoryType, groups: inventoryGroups }) || !canCraftItem(item, inventoryType)
            ? 'brightness(80%) grayscale(100%)'
            : undefined,
        opacity: isDragging ? 0.4 : 1.0,
        cursor: canDrag() ? 'grab' : 'default',
      }}
    >
      {/* Item image */}
      <div
        className="grid-item-image"
        style={{
          backgroundImage: `url(${getItemUrl(item)})`,
          width: imageSize,
          height: imageSize,
          transform: isRotated ? 'rotate(90deg)' : undefined,
        }}
      />

      {/* Hover overlay for drop target */}
      {isOver && <div className="grid-item-drop-overlay" />}

      {/* Content overlay */}
      <div
        className="grid-item-content"
        onMouseEnter={() => {
          timerRef.current = window.setTimeout(() => {
            dispatch(openTooltip({ item, inventoryType }));
          }, 500) as unknown as number;
        }}
        onMouseLeave={() => {
          dispatch(closeTooltip());
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        }}
      >
        {/* Top section: count, weight, rotate button */}
        <div className="grid-item-header">
          <div className="grid-item-info">
            {item.count > 1 && (
              <span className="grid-item-count" style={{ fontSize: baseFontSize }}>
                {item.count.toLocaleString('en-us')}x
              </span>
            )}
            {item.weight > 0 && (
              <span className="grid-item-weight" style={{ fontSize: smallFontSize }}>
                {item.weight >= 1000
                  ? `${(item.weight / 1000).toLocaleString('en-us', { minimumFractionDigits: 1 })}kg`
                  : `${item.weight.toLocaleString('en-us', { minimumFractionDigits: 0 })}g`}
              </span>
            )}
          </div>
          {isLargeItem && (
            <button 
              className="grid-item-rotate-btn" 
              onClick={handleRotate} 
              title="Rotate (R)"
              style={{ 
                width: Math.max(18, cellSize * 0.3),
                height: Math.max(18, cellSize * 0.3),
                fontSize: Math.max(12, cellSize * 0.2)
              }}
            >
              ↻
            </button>
          )}
        </div>

        {/* Bottom section: durability bar, price, label */}
        <div className="grid-item-footer">
          {inventoryType !== 'shop' && item?.durability !== undefined && (
            <WeightBar percent={item.durability} durability />
          )}
          {inventoryType === 'shop' && item?.price !== undefined && item.price > 0 && (
            <div
              className="grid-item-price"
              style={{ 
                color: item.currency === 'money' || !item.currency ? '#2ECC71' : '#E74C3C',
                fontSize: baseFontSize 
              }}
            >
              {Locale.$ || '$'}{item.price.toLocaleString('en-us')}
            </div>
          )}
          <div 
            className="grid-item-label"
            style={{ fontSize: smallFontSize }}
            title={itemLabel}
          >
            {itemLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GridItem);
