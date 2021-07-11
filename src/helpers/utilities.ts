import { IRelease } from "../types/interfaces";

/**
 *
 * @param a 1st item to compare
 * @param b 2nd item to compare
 * @returns number to indicate how it should be sorted
 */
const sortAscending = (a: string | number, b: string | number) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

/**
 * @description Sorts an array of objects
 * @param arr array of objects to be sorted
 * @param key key of object to sort by
 * @returns sorted array in ascending order
 */
const sortArrayByObjectKeyAscending = (
  arr: IRelease[] | { [key: string]: any },
  key: string
) => {
  return arr.sort((a, b) => {
    return sortAscending(a[key], b[key]);
  });
};

/**
 * @description Sorts an array of objects
 * @param arr array of objects to be sorted
 * @param key key of object to sort by
 * @returns sorted array in descending order
 */
const sortArrayByObjectKeyDescending = (
  arr: IRelease[] | { [key: string]: any },
  key: string
) => {
  return arr
    .sort((a, b) => {
      return sortAscending(a[key], b[key]);
    })
    .reverse();
};

export { sortArrayByObjectKeyAscending, sortArrayByObjectKeyDescending };
