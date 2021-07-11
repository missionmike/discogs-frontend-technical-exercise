import {
  sortArrayByObjectKeyAscending,
  sortArrayByObjectKeyDescending,
} from "./utilities";

const testArrString = [
  { key: "a" },
  { key: "c" },
  { key: "b" },
  { key: "e" },
  { key: "d" },
];

const testArrNumber = [
  { key: 0 },
  { key: 2 },
  { key: 1 },
  { key: 4 },
  { key: 3 },
];

test("Sorts Object by Keys Ascending (string)", () => {
  expect(sortArrayByObjectKeyAscending(testArrString, "key")).toStrictEqual([
    { key: "a" },
    { key: "b" },
    { key: "c" },
    { key: "d" },
    { key: "e" },
  ]);
});

test("Sorts Object by Keys Descending (string)", () => {
  expect(sortArrayByObjectKeyDescending(testArrString, "key")).toStrictEqual([
    { key: "e" },
    { key: "d" },
    { key: "c" },
    { key: "b" },
    { key: "a" },
  ]);
});

test("Sorts Object by Keys Ascending (number)", () => {
  expect(sortArrayByObjectKeyAscending(testArrNumber, "key")).toStrictEqual([
    { key: 0 },
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
  ]);
});

test("Sorts Object by Keys Descending (number)", () => {
  expect(sortArrayByObjectKeyDescending(testArrNumber, "key")).toStrictEqual([
    { key: 4 },
    { key: 3 },
    { key: 2 },
    { key: 1 },
    { key: 0 },
  ]);
});
