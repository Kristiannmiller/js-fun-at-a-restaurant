// create a FUNCTION called nameMenuItem that pulls in a food param
function nameMenuItem(food) {
  // return the string "Delicious <food>"
  return `Delicious ${food}`
};

// create a new FUNCTION called createMenuItem that pulls in menuItemName, price, and type params
function createMenuItem(menuItemName, price, type) {
  // return a new OBJECT using the createMenuItem params
  return {
    name: menuItemName,
    price: price,
    type: type
  };
};

// create a FUNCTION called addIngredients that pulls in ingredient and the name of the array as params
function addIngredients(ingredient, array) {
  // IF the ingredient param already exists in the array, don't add it
  // ELSE PUSH the ingredient into the array param
  array.includes(ingredient) ? null : array.push(ingredient)
};

// create a FUNCTION called formatPrice that pulls in an initialPrice param
function formatPrice(initialPrice) {
  // RETURN the initialPrice param concatenated to be $0.00 format
  return "$" + initialPrice
};

// create a FUNCTION called decreasePrice that pulls in a price param
function decreasePrice(price) {
  // return price minus 10% of the price
  return price - (price * .1);
};

//create a FUNCTION called createRecipe that pulls in title, ingredients, and menuItemType as params
function createRecipe(title, ingredients, menuItemType) {
  // RETURN an OBJECT using the createRecipe params
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
