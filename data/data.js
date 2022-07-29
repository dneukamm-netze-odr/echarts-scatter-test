import data from "./data.json";

const labels = data
  .map((e) => e.operation)
  .sort()
  .filter((el, idx, array) => (idx > 0 ? array[idx - 1] !== el : true));

export { data, labels };
