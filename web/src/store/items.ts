import { ItemData } from '../typings/item';

export const Items: {
  [key: string]: ItemData | undefined;
} = {
  water: {
    name: 'water',
    close: false,
    label: 'VODA',
    stack: true,
    usable: true,
    count: 0,
    hCells: 1,
    vCells: 2,
  },
  burger: {
    name: 'burger',
    close: false,
    label: 'BURGR',
    stack: false,
    usable: false,
    count: 0,
    hCells: 2,
    vCells: 2,
  },
};
