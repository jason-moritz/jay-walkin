const compareKey = (key) => (a, b) => {
  if (a[key] < b[key]) {
    return -1;
  }
  if (a[key] > b[key]) {
    return 1;
  }
  return 0;
};

export const AZ = (products) => products.sort(compareKey("name"));
export const ZA = (products) => products.sort(compareKey("name")).reverse();
export const lowestFirst = (products) =>
  products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
export const highestFirst = (products) =>
  products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
