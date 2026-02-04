export type ItemData = {
  name: string;
  label: string;
  stack: boolean;
  usable: boolean;
  close: boolean;
  count: number;
  description?: string;
  buttons?: string[];
  ammoName?: string;
  image?: string;
  // Grid-based inventory properties
  width?: number;  // Grid width in cells (default: 1)
  height?: number; // Grid height in cells (default: 1)
};
