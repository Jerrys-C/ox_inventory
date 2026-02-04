import InventoryComponent from './components/inventory';
import useNuiEvent from './hooks/useNuiEvent';
import { Items } from './store/items';
import { Locale } from './store/locale';
import { setImagePath } from './store/imagepath';
import { setupInventory } from './store/inventory';
import { Inventory } from './typings';
import { useAppDispatch } from './store';
import { debugData } from './utils/debugData';
import DragPreview from './components/utils/DragPreview';
import { fetchNui } from './utils/fetchNui';
import { useDragDropManager } from 'react-dnd';
import KeyPress from './components/utils/KeyPress';

debugData([
  {
    action: 'setupInventory',
    data: {
      leftInventory: {
        id: 'test',
        type: 'player',
        slots: 50,
        label: 'Player Inventory',
        weight: 3000,
        maxWeight: 30000,
        gridWidth: 8,
        gridHeight: 6,
        items: [
          {
            slot: 1,
            name: 'iron',
            weight: 3000,
            count: 5,
            gridX: 0,
            gridY: 0,
            width: 1,
            height: 1,
            metadata: {
              description: `Iron ingot - used for crafting`,
            },
          },
          { 
            slot: 2, 
            name: 'WEAPON_PISTOL', 
            weight: 1500, 
            count: 1, 
            gridX: 1, 
            gridY: 0, 
            width: 2, 
            height: 1,
            metadata: { durability: 75 } 
          },
          { 
            slot: 3, 
            name: 'WEAPON_CARBINERIFLE', 
            weight: 3200, 
            count: 1, 
            gridX: 0, 
            gridY: 1, 
            width: 4, 
            height: 2,
            metadata: { durability: 90, type: 'Assault Rifle' } 
          },
          {
            slot: 4,
            name: 'water',
            weight: 500,
            count: 3,
            gridX: 4,
            gridY: 0,
            width: 1,
            height: 1,
            metadata: { description: 'Fresh water bottle' },
          },
          { 
            slot: 5, 
            name: 'burger', 
            weight: 220, 
            count: 2, 
            gridX: 5, 
            gridY: 0, 
            width: 1, 
            height: 1 
          },
          {
            slot: 6,
            name: 'armour',
            weight: 3000,
            count: 1,
            gridX: 4,
            gridY: 1,
            width: 2,
            height: 2,
            metadata: { durability: 100 },
          },
          {
            slot: 7,
            name: 'lockpick',
            weight: 160,
            count: 5,
            gridX: 6,
            gridY: 0,
            width: 1,
            height: 2,
          },
          {
            slot: 8,
            name: 'radio',
            weight: 1000,
            count: 1,
            gridX: 0,
            gridY: 4,
            width: 1,
            height: 2,
          },
          {
            slot: 9,
            name: 'phone',
            weight: 190,
            count: 1,
            gridX: 2,
            gridY: 4,
            width: 1,
            height: 1,
          },
          {
            slot: 10,
            name: 'bandage',
            weight: 115,
            count: 8,
            gridX: 3,
            gridY: 4,
            width: 1,
            height: 1,
          },
        ],
      },
      rightInventory: {
        id: 'container',
        type: 'container',
        slots: 30,
        label: 'Storage Container',
        weight: 1500,
        maxWeight: 50000,
        gridWidth: 6,
        gridHeight: 6,
        items: [
          {
            slot: 1,
            name: 'money',
            weight: 0,
            count: 15000,
            gridX: 0,
            gridY: 0,
            width: 1,
            height: 1,
          },
          {
            slot: 2,
            name: 'WEAPON_ASSAULTRIFLE',
            weight: 4500,
            count: 1,
            gridX: 0,
            gridY: 1,
            width: 4,
            height: 2,
            metadata: { durability: 60 },
          },
          {
            slot: 3,
            name: 'ammo-rifle',
            weight: 500,
            count: 120,
            gridX: 4,
            gridY: 0,
            width: 1,
            height: 2,
          },
          {
            slot: 4,
            name: 'medikit',
            weight: 300,
            count: 2,
            gridX: 2,
            gridY: 0,
            width: 1,
            height: 1,
          },
        ],
      },
    },
  },
]);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const manager = useDragDropManager();

  useNuiEvent<{
    locale: { [key: string]: string };
    items: typeof Items;
    leftInventory: Inventory;
    imagepath: string;
  }>('init', ({ locale, items, leftInventory, imagepath }) => {
    for (const name in locale) Locale[name] = locale[name];
    for (const name in items) Items[name] = items[name];

    setImagePath(imagepath);
    dispatch(setupInventory({ leftInventory }));
  });

  fetchNui('uiLoaded', {});

  useNuiEvent('closeInventory', () => {
    manager.dispatch({ type: 'dnd-core/END_DRAG' });
  });

  return (
    <div className="app-wrapper">
      <InventoryComponent />
      <DragPreview />
      <KeyPress />
    </div>
  );
};

addEventListener("dragstart", function(event) {
  event.preventDefault()
})

export default App;
