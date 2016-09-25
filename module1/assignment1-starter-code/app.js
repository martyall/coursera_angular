(function () {
'use strict';


angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

    $scope.contents = "";

    $scope.message = "";

    $scope.tooMuch = function (contentsList) {
        var itemizedContentsList = contentsList.split(',').filter(function (s) {
            return s != "";
        });
        if (itemizedContentsList.length == 0) {
            $scope.message = "Please Enter Data First";
        } else if (itemizedContentsList.length <= 3){
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too Much!";
        }
    };
}
})();
