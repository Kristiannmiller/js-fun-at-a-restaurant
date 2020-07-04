var chai = require("chai");
var assert = chai.assert;

var {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
} = require("../src/restaurant");

describe("restaurant.js", function() {
  describe("createRestaurant", function() {
    it.skip("should be a function", function () {
      assert.isFunction(createRestaurant);
    });

    it.skip("should have a name", function () {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      assert.equal(pizzaRestaurant.name, "Sexy Pizza");
    });

    it.skip("should be able to have a different name", function () {
      var arepaRestaurant = createRestaurant("Quiero Arepas");

      assert.equal(arepaRestaurant.name, "Quiero Arepas");
    });

    it.skip("should have menus", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");

      assert.isObject(pizzaRestaurant.menus);
    });

    it.skip("should have different types of menus", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");

      assert.deepEqual(pizzaRestaurant.menus.breakfast, []);
      assert.deepEqual(pizzaRestaurant.menus.lunch, []);
      assert.deepEqual(pizzaRestaurant.menus.dinner, []);
    });
  });

  describe("addMenuItem", function() {
    it.skip("should be a function", function() {
      assert.isFunction(addMenuItem);
    });

    it.skip("should add an item to the lunch menu", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken",
        price: "12.49",
        type: "lunch"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);

      assert.equal(pizzaRestaurant.menus.lunch[0], bbqPizza);
    });

    it.skip("should add menu items to the correct menu automatically", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);

      assert.equal(pizzaRestaurant.menus.lunch[0], bbqPizza);
      assert.equal(pizzaRestaurant.menus.breakfast[0], baconEggsPizza);
    });

    it.skip("shouldn't add the same menu item more than once", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [baconEggsPizza], lunch: [bbqPizza], dinner: []
      });
    });
  });

  describe("removeMenuItem", function() {
    it.skip("should be a function", function () {
      assert.isFunction(removeMenuItem);
    });

    it.skip("should remove an item from the menu to update it", function() {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var veggiePizza = {
        name: "Veggie Pizza",
        price: "11.49",
        type: "dinner"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, veggiePizza);

      var result = removeMenuItem(pizzaRestaurant, "Bacon and Eggs Pizza", "breakfast");

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [], lunch: [bbqPizza], dinner: [veggiePizza]
      });
      assert.equal(result, "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!");
    });

    it.skip("should remove a different item from the menu to update it", function () {
      var pizzaRestaurant = createRestaurant("Sexy Pizza");
      var bbqPizza = {
        name: "BBQ Chicken Pizza",
        price: "12.49",
        type: "lunch"
      };

      var veggiePizza = {
        name: "Veggie Pizza",
        price: "11.49",
        type: "dinner"
      };

      var baconEggsPizza = {
        name: "Bacon and Eggs Pizza",
        price: "13.49",
        type: "breakfast"
      };

      addMenuItem(pizzaRestaurant, bbqPizza);
      addMenuItem(pizzaRestaurant, baconEggsPizza);
      addMenuItem(pizzaRestaurant, veggiePizza);

      var result = removeMenuItem(pizzaRestaurant, "Veggie Pizza", "dinner");

      assert.deepEqual(pizzaRestaurant.menus, {
        breakfast: [baconEggsPizza], lunch: [bbqPizza], dinner: []
      });
      assert.equal(result, "No one is eating our Veggie Pizza - it has been removed from the dinner menu!");
    });

    it.skip("should only remove a menu item if it is on the menu", function() {
      var arepaRestaurant = createRestaurant("Quiero Arepas");
      var error = removeMenuItem(arepaRestaurant, "Mom's Spaghetti");

      assert.equal(error, "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!");
    });
  });
});
