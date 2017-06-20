(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


function LunchCheckController($scope) {
  $scope.message = "";
  $scope.totalValue = 0;

  $scope.check = function () {
    var numItems = calculateNumberItems($scope.items);

    if (numItems == 0 ){
      $scope.message = "Please enter data first"
    }
    else if (numItems < 4){
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
  };


  function calculateNumberItems(string) {

    if(string === ""){
      console.log("returning zero");
      return 0;
    }
    if(string === undefined){
      console.log("returning zero");
      return 0;
    }
    // var totalStringValue = 0;
    // for (var i = 0; i < string.length; i++) {
    //   totalStringValue += string.charCodeAt(i);
    // }


    var ar = string.split(',');

    var arrayLength = ar.length;
    var actualLength = 0;
    for (var i = 0; i < arrayLength; i++) {
      if(ar[i] != ""){
        actualLength++;
      }
      //Do something
    }

    console.log("returning: ", actualLength);
    return actualLength;
  }

}

})();
