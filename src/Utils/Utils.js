const getFromLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

const addToLocalStorage = (item) => {
  localStorage.setItem("shopping-cart", JSON.stringify(item));
};

export { addToLocalStorage };
