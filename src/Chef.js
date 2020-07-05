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
    // create empty ARRAY to push to
    // var menuSearch = []
    // create FUNCTION to check through the menu of the restaurant param
    // function checkMenus(foodItem) {
      // IF there is a value within the breakfast menu of the object
      /*if(this.restaurant.menus.breakfast) {
        // assign the variable bkfst to the name property of that value
        var bkfst = this.restaurant.menus.breakfast[0].name
        // ELSE assign the variable bkfst to an empty array
      } else {
        var bkfst = []
      };
      // repeat IF/ELSE statments for lunch and dinner menus
      if(this.restaurant.menus.lunch[0]) {
        var lunch = this.restaurant.menus.lunch[0].name
      } else {
        var lunch = []
      };
      if(this.restaurant.menus.dinner[0]) {
        var lunch = this.restaurant.menus.dinner[0].name
      } else {
        var dinner = []
      };
      // PUSH the bkfst, lunch, and dinner arrays to the menuSearch array
      console.log(menuSearch)
      menuSearch.push(bkfst, lunch, dinner);
    };
    // CALL the function checkMenu
    checkMenus(foodItem) {*/

    // IF the menuSearch array INCLUDES the name property of the foodItem
    // if(this.restaurant.menus.breakfast.includes(foodItem) || this.restaurant.menus.lunch.includes(foodItem) || this.restaurant.menus.dinner.includes(foodItem)) {
    //   return `Yes, we're serving ${foodItem.name} today!`
    // } else {
    //   return `Sorry, we aren't serving ${foodItem.name} today.`
    //}
    //if(menuSearch.includes(foodItem.name)) {
      // RETURN INSTANTIATED string
      //return `Yes, we're serving ${foodItem.name} today!`
      // ELSE RETURN other INSTANTIATED string
    //} else {
      //return `Sorry, we aren't serving ${foodItem.name} today.`

module.exports = Chef;
