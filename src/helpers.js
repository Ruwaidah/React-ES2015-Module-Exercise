import fruits from "./foods";
const choice = (items) => {
  const indx = Math.floor(Math.random() * items.length);
  return items[indx];
};

const remove = (items, item) => {
  const indx = items.indexOf(item);
  fruits.splice(indx, 1);
};

export { choice, remove };
