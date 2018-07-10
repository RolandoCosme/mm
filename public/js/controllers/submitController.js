// var myApp = angular.module('myApp',[]);

// function MyCtrl($scope) {
//     $scope.myForm = {};
    
//     $scope.processForm = function(){
//         alert("Submitting form..");
//     }
// }

var app = angular.module('Minds', []);
// angular.module('Minds', [])
    app.controller('submitController', ['$scope', function processForm($scope) {
        $scope.myForm = {};
        $scope.processForm = function(){
            alert("Submitting form..");
        };
    }]);