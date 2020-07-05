// create a CLASS of Chef with name and restaurant attributes
class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant
  };
  // METHOD greetCustomer pulls in the customer name and a boolean stating if it is morning as params
  greetCustomer(customer, morning) {
    // IF morning is true
    if(morning === true) {
      // RETURN morning greeting
      return `Good morning, ${customer}!`
      // ELSE RETURN normal greeting
    } else {
      return `Hello, ${customer}!`
    };
  };
  // METHOD checkForFood checks to see if an item is on the menu, returns a string
  // checks to see if an item is not on the menu, returns a different string

  // create METHOD checkForFood that takes in params of foodItem, and restaurant object
  checkForFood(foodItem, restaurant) {
    // assign restaurant to this chef's restaurant
    restaurant = this.restaurant
    // create empty ARRAY to push to
    var menuSearch = []
    // create FUNCTION to check through the menu of the restaurant param
    function checkMenu(restaurant) {
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
    };
    // CALL the function checkMenu
    checkMenu(restaurant)
    // IF the menuSearch array INCLUDES the name property of the foodItem
    if(menuSearch.includes(foodItem.name)) {
      // RETURN INSTANTIATED string
      return `Yes, we're serving ${foodItem.name} today!`
      // ELSE RETURN other INSTANTIATED string
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    };
  };
}

module.exports = Chef;
