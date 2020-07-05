// createRestaurant function creates a restaurant object using a name parameter
// restaurant object contains a name and menus for breakfast, lunch, and dinner

// create a FUNCTION called createRestaurant that pulls in name as param
function createRestaurant(name) {
  // RETURN an object with properties of name (set to equal the param), and a menus object containing breakfast, lunch, and dinner as empty arrays
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  };
};

// ADDING THIS FUNCTION TO AID WITH SEARCHING THE MENU FOR ITEMS
// NOT PART OF ORIGINAL TEST FILE
// checkMenu pushes items from all the menus to an easily searchable array
// checks to see if the ARRAY contains an item as a param

// create FUNCTION called checkMenu that pulls in the object and item to be checked as params
// (don't forget to add it to the module.exports later)
function checkMenu(restaurant, item) {
  // create an empty ARRAY to push to
  var menuSearch = []
  // IF there is a value within the breakfast menu of the object
  if(restaurant.menus.breakfast[0]) {
    // assign the variable bkfst to the name property of that value
    var bkfst = restaurant.menus.breakfast[0].name
    // ELSE assign the variable bkfst to an empty array
  } else {
    var bkfst = []
  };
  // repeat IF/ELSE statments for lunch and dinner menus
  if(restaurant.menus.lunch[0]) {
    var lunch = restaurant.menus.lunch[0].name
  } else {
    var lunch = []
  };
  if(restaurant.menus.dinner[0]) {
    var lunch = restaurant.menus.dinner[0].name
  } else {
    var dinner = []
  };
  // PUSH the bkfst, lunch, and dinner arrays to the menuSearch array
  menuSearch.push(bkfst, lunch, dinner);
  // RETURN search results
  return menuSearch.includes(item);
};

// addMenuItem function adds an item (as a param) to it's type property menu
// Shouldn't add the same item more than once

// create a FUNCTION called addMenuItem with restaurant object and item object as params
function addMenuItem(restaurant, item) {
  // IF item's type is lunch and the lunch menu DOES NOT contain the item
  if(item.type === "lunch" && !restaurant.menus.lunch.includes(item)) {
    // PUSH the item to the lunch menu
    restaurant.menus.lunch.push(item)
    // ELSE if item's type is dinner and the dinner menu DOES NOT contain the item
  } else if(item.type === "dinner" && !restaurant.menus.dinner.includes(item)) {
    // PUSH the item to the lunch menu
    restaurant.menus.dinner.push(item)
    // ELSE if item's type is breakfast and the breakfast menu DOES NOT contain the item
  } else if(item.type === "breakfast" && !restaurant.menus.breakfast.includes(item)) {
    // PUSH the item to the breakfast menu
    restaurant.menus.breakfast.push(item)
  };
};

// removeMenuItem function removes an item from the menu as a param, and returns a string
// Won't let you remove an item that isn't on the menu - returns a different string

// create FUNCTION called removeMenuItem with restaurant object, mealName object, and type property as params
function removeMenuItem(restaurant, mealName, type) {
  // IF the result of checkMenu is true
  if(checkMenu(restaurant, mealName)) {
    // SPLICE the item from the type property in the restaurant menu object
    restaurant.menus[type].splice(0, 1)
    // RETURN the string using INCANTATION
    return `No one is eating our ${mealName} - it has been removed from the ${type} menu!`
    // ELSE return the other string using INCANTATION
  } else {
    return `Sorry, we don't sell ${mealName}, try adding a new recipe!`
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  // NEED TO ADD checkMenu in order for the test to recognize it
  checkMenu
}
