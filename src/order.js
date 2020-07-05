// takeOrder function adds new orders to an array as an object
// Should not allow more than 3 order objects in the array

// create a FUNCTION called takeOrder that pulls in order and designated array as params
function takeOrder(order, array) {
  // IF array length is LESS THAN 3, PUSH the order param to the array
  if(array.length < 3) {
    array.push(order)
  // ELSE do nothing
  };
};

// refundOrder function removes an order by orderNumber
// create a FUNCTION called refundOrder that pulls in orderNumber string and deliveryOrders array as params
function refundOrder(orderNumber, deliveryOrders) {
  // LOOP through deliveryOrders array beginning at [0] to length of array
  for(var i = 0; i < deliveryOrders.length; i++) {
    // IF orderNumber is the same as the string of the index being checked
    if(orderNumber === deliveryOrders[i].orderNumber) {
      // SPLICE one element, starting at the index being checked
      deliveryOrders.splice(deliveryOrders[i], 1);
    };
      // ELSE do nothing
  };
};

// listItems function puts all the order items into a STRING separated by commas
// create FUNCTION called listItems that pulls in deliveryOrders as a param
function listItems(deliveryOrders) {
  // create an empty ARRAY to send items to
  var listItemsArray = [];
  // LOOP through the deliveryOrders array beginning at [0] through the length of the array
  for(var i = 0; i < deliveryOrders.length; i++) {
    // PUSH the current index item value into the listItemsArray
    listItemsArray.push(deliveryOrders[i].item);
  };
  // create a STRING variable INTERPOLATING each index of the new array in the correct format
  var listString = `${listItemsArray[0]}, ${listItemsArray[1]}, ${listItemsArray[2]}`;
  // RETURN the interpolated string value
  return listString;
};

// searchOrder function searches the order list for an item and returns a BOOLEAN
  // COULD THIS BE MADE INTO A TERNARY??
// create a FUNCTION called searchOrders that pulls in the array deliveryOrders, and item we're searching for
function searchOrder(deliveryOrders, item) {
  // LOOP through the deliveryOrders array beginning at [0] until the end of the array
  for(var i = 0; i < deliveryOrders.length; i++) {
    // IF item param is equal to the item in the index we are looking at
    if(item === deliveryOrders[i].item) {
      // RETURN true
      return true;
      // ELSE RETURN false
    } else {
      return false;
    };
  };
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
