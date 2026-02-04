export type Slot = {
  slot: number;
  name?: string;
  count?: number;
  weight?: number;
  metadata?: {
    [key: string]: any;
  };
  durability?: number;
  // Grid-based positioning
  gridX?: number;  // X position in grid (column)
  gridY?: number;  // Y position in grid (row)
  width?: number;  // Width in grid cells
  height?: number; // Height in grid cells
  rotated?: boolean; // If true, width/height are swapped visually
};

export type SlotWithItem = Slot & {
  name: string;
  count: number;
  weight: number;
  durability?: number;
  price?: number;
  currency?: string;
  ingredients?: { [key: string]: number };
  duration?: number;
  image?: string;
  grade?: number | number[];
  // Grid-based positioning (required for items)
  gridX: number;
  gridY: number;
  width: number;
  height: number;
  rotated?: boolean;
};
