const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("shopping_cart"));
};

const addToLocalStorage = (id) => {
  const exists = getFromLocalStorage();

  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = exists;

    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));
};

const clearLocalStorage = () => {
  localStorage.removeItem("shopping_cart");
};

export { addToLocalStorage, clearLocalStorage, getFromLocalStorage };
