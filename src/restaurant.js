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
  // LOOP through the breakfast menu starting at [0] through the length of the array
  for(var i = 0; i < restaurant.menus.breakfast.length; i++) {
    // IF there is a value within the breakfast menu of the object
    // assign the variable bkfst to the name property of that value
    // ELSE assign the variable bkfst to an empty array
    var bkfst = restaurant.menus.breakfast[i] ? restaurant.menus.breakfast[i].name : [];
    // PUSH the values to the menuSearch array
    menuSearch.push(bkfst);
  };
  // repeat for lunch menu
  for(var i = 0; i < restaurant.menus.lunch.length; i++) {
    var lunch = restaurant.menus.lunch[0] ? restaurant.menus.lunch[0].name : [];
    menuSearch.push(lunch);
  };
  // repeat for dinner menu
  for(var i = 0; i < restaurant.menus.dinner.length; i++) {
    var dinner = restaurant.menus.dinner[0] ? restaurant.menus.dinner[0].name : [];
    menuSearch.push(dinner);
  }
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
    // IF the item is in the breakfast menu
    if(type === "breakfast") {
      // LOOP through the breakfast menu to find the index of the item
      for(var i = 0; i < restaurant.menus.breakfast.length; i++) {
        if(restaurant.menus.breakfast[i].name === mealName) {
          // SPLICE one item at the current index out of the breakfast menu
          restaurant.menus.breakfast.splice([i], 1);
          // RETURN interpolated string
          return `No one is eating our ${mealName} - it has been removed from the breakfast menu!`;
        };
      };
    // repeat for lunch menu
    } else if(type === "lunch") {
      for(var i = 0; i < restaurant.menus.lunch.length; i++) {
        if(restaurant.menus.lunch[i].name === mealName) {
          restaurant.menus.lunch.splice([i], 1);
          return `No one is eating our ${mealName} - it has been removed from the lunch menu!`;
        };
      };
    // repeat for dinner menu
    } else if(type === "dinner") {
      for(var i = 0; i < restaurant.menus.dinner.length; i++) {
        if(restaurant.menus.dinner[i].name === mealName) {
          restaurant.menus.dinner.splice([i], 1);
          return `No one is eating our ${mealName} - it has been removed from the dinner menu!`;
        };
      };
    };
  // ELSE return "sorry" interpolated string
  } else {
    return `Sorry, we don't sell ${mealName}, try adding a new recipe!`
  };
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  // NEED TO ADD checkMenu in order for the test to recognize it
  checkMenu
}
