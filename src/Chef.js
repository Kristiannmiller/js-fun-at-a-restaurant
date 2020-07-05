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

  // create METHOD checkForFood that takes in param of foodItem
  checkForFood(foodItem) {
    // IF any of the menus within THIS instance of the class INCLUDES the param
    if(this.restaurant.menus.breakfast.includes(foodItem) || this.restaurant.menus.lunch.includes(foodItem) || this.restaurant.menus.dinner.includes(foodItem)) {
      // RETURN INTERPOLATED STRING
      return `Yes, we're serving ${foodItem.name} today!`
      // ELSE RETURN other INTERPOLATED STRING
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    };
  };
};

module.exports = Chef;
