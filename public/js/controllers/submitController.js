// var myApp = angular.module('myApp',[]);

// function MyCtrl($scope) {
//     $scope.myForm = {};
    
//     $scope.processForm = function(){
//         alert("Submitting form..");
//     }
// }

var app = angular.module('Ladybug', []);
// angular.module('Ladybug', [])
    app.controller('submitController', ['$scope', function processForm($scope) {
        $scope.myForm = {};
        $scope.processForm = function(){
            alert("Submitting form..");
        };
    }]);