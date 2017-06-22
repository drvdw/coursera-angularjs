(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  // Use factory to create new shopping list service
  //var shoppingList = ShoppingListCheckOffService();

  toBuy.items = ShoppingListCheckOffService.getToBuy();

  toBuy.itemName = "";
  toBuy.itemQuantity = "";

  toBuy.addItem = function () {
    ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
  }

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };


  toBuy.errorMessage = function () {

    if ((toBuy.items.length == 0) ||
        (toBuy.items.length === undefined)){
      return "Everything is bought!";
    }
    else {
      return false;
    }
  };



}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBought();

  alreadyBought.errorMessage = function () {

    if ((alreadyBought.items.length == 0) ||
        (alreadyBought.items.length === undefined)){
      return "Nothing bought yet";
    }
    else {
      return false;
    }
  };

}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var item1 = { name: "Cookies", quantity: 10 };
  var item2 = { name: "Cookies", quantity: 10 };

  var tobuy = [];
  tobuy.push(item1);
  tobuy.push(item2);

  var bought = [];

  service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      tobuy.push(item);
  };

  service.buyItem = function (itemIndex) {
    bought.push(tobuy[itemIndex]);
    tobuy.splice(itemIndex, 1);
    console.log(bought);
    console.log("buy Item");
  };

  service.getToBuy = function () {
    console.log("get tobuy");
    return tobuy;
  };

  service.getBought = function () {
    console.log("get bought");
    return bought;
  }

}




})();
