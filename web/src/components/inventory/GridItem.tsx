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
  const [isRotated, setIsRotated] = useState(item.rotated ?? false);

  const gridX = item.gridX ?? 0;
  const gridY = item.gridY ?? 0;
  const width = isRotated ? (item.height ?? DEFAULT_ITEM_HEIGHT) : (item.width ?? DEFAULT_ITEM_WIDTH);
  const height = isRotated ? (item.width ?? DEFAULT_ITEM_WIDTH) : (item.height ?? DEFAULT_ITEM_HEIGHT);

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
    [inventoryType, item]
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
    [inventoryType, item]
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

  const connectRef = (element: HTMLDivElement) => drag(drop(element));

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
    // TODO: Send rotation update to server
  };

  // Calculate item image size based on the smaller dimension
  const imageSize = Math.min(width, height) * cellSize * 0.75;

  return (
    <div
      ref={connectRef}
      onContextMenu={handleContext}
      onClick={handleClick}
      className="grid-item"
      style={{
        gridColumn: `${gridX + 1} / span ${width}`,
        gridRow: `${gridY + 1} / span ${height}`,
        filter:
          !canPurchaseItem(item, { type: inventoryType, groups: inventoryGroups }) || !canCraftItem(item, inventoryType)
            ? 'brightness(80%) grayscale(100%)'
            : undefined,
        opacity: isDragging ? 0.4 : 1.0,
        border: isOver ? '2px dashed rgba(255,255,255,0.6)' : undefined,
      }}
    >
      <div
        className="grid-item-image"
        style={{
          backgroundImage: `url(${getItemUrl(item)}`,
          width: imageSize,
          height: imageSize,
          transform: isRotated ? 'rotate(90deg)' : undefined,
        }}
      />

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
        <div className="grid-item-header">
          <div className="grid-item-info">
            <span className="grid-item-count">
              {item.count ? `${item.count.toLocaleString('en-us')}x` : ''}
            </span>
            <span className="grid-item-weight">
              {item.weight > 0
                ? item.weight >= 1000
                  ? `${(item.weight / 1000).toLocaleString('en-us', {
                      minimumFractionDigits: 1,
                    })}kg`
                  : `${item.weight.toLocaleString('en-us', {
                      minimumFractionDigits: 0,
                    })}g`
                : ''}
            </span>
          </div>
          {width > 1 || height > 1 ? (
            <button className="grid-item-rotate-btn" onClick={handleRotate} title="Rotate item (R)">
              ↻
            </button>
          ) : null}
        </div>

        <div className="grid-item-footer">
          {inventoryType !== 'shop' && item?.durability !== undefined && (
            <WeightBar percent={item.durability} durability />
          )}
          {inventoryType === 'shop' && item?.price !== undefined && item.price > 0 && (
            <div
              className="grid-item-price"
              style={{ color: item.currency === 'money' || !item.currency ? '#2ECC71' : '#E74C3C' }}
            >
              {Locale.$ || '$'}{item.price.toLocaleString('en-us')}
            </div>
          )}
          <div className="grid-item-label">
            {item.metadata?.label ? item.metadata.label : Items[item.name]?.label || item.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GridItem);
