export interface Row<T> {
  colors: T[];
  /** one row number */
  num: number;
}

export const pride_color = [
  "#151F27",
  "#7B4C1F",
  "#F42525",
  "#FBA652",
  "#F6E955",
  "#5ABD29",
  "#306EE9",
  "#6F1AE5",
];

export type PrideColorType = (typeof pride_color)[number];

const colorArr = [
  {
    color: "#151F27",
    num: 0,
  },
];
