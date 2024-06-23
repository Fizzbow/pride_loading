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

export const LGBT_COLOR = [
  "91,206,250",
  "245,169,184",
  "255,255,255",
  "96,57,23",
  "0,0,0",
  "238,49,36",
  "245,126,41",
  "255,238,0",
  "88,185,71",
  "0,83,166",
  "159,36,143",
];
export type PrideColorType = (
  | typeof PRIDE_COLOR
  | typeof TRANS_COLOR
  | typeof LGBT_COLOR
)[number];
