export interface Row<T> {
  colors: T[];
  /** one row number */
  num: number;
}

export const PRIDE_COLOR = [
  "#151F27",
  "#7B4C1F",
  "#F42525",
  "#FBA652",
  "#F6E955",
  "#5ABD29",
  "#306EE9",
  "#6F1AE5",
];
export const TRANS_COLOR = [
  "#71C8F3",
  "#F9B9C3",
  "#FFFFFF",
  "#F9B9C3",
  "#71C8F3",
];

export type PrideColorType = (typeof PRIDE_COLOR | typeof TRANS_COLOR)[number];
