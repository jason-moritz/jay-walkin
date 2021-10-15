const compareKey = (key) => (a, b) => {
  if (a[key].toLowerCase() < b[key].toLowerCase()) {
    return -1;
  }
  if (a[key].toLowerCase() > b[key].toLowerCase()) {
    return 1;
  }
  return 0;
};

export const AZ = (products) => 
  products.sort(compareKey("name"));


export const ZA = (products) => 
  products.sort(compareKey("name")).reverse();

export const lowestFirst = (products) =>
  products.sort((a, b) => Math.ceil(parseInt(a.price)) - Math.ceil(parseInt(b.price)));

export const highestFirst = (products) =>
  products.sort((a, b) => Math.ceil(parseInt(b.price)) - Math.ceil(parseInt(a.price)));

export const sortByBrand = (products) =>
  products.sort(compareKey("brand"))
