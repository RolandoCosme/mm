angular.module('Minds', [ 
  'ngRoute'
 ])
.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/home', {
        templateUrl: '/public/partials/partial-home.html'
      })
      .when('/gallery',{
          templateUrl: '/public/partials/partial-gallery.html',
          controller: 'galleryControler.js'
      })
      .when('/practical-life',{
          templateUrl: '/public/partials/partial-practical.html',
      })
      .when('/sensorial',{
          templateUrl: '/public/partials/partial-sensorial.html',
      })
      .when('/mathematics',{
          templateUrl: '/public/partials/partial-mathematics.html',
      })
      .when('/language',{
          templateUrl: '/public/partials/partial-language.html',
      })
      .when('/science',{
          templateUrl: '/public/partials/partial-science.html',
      })
      .when('/geography',{
          templateUrl: '/public/partials/partial-geography.html',
      })
      .when('/art',{
          templateUrl: '/public/partials/partial-art.html',
      })
      .when('/enrollment',{
          templateUrl: '/public/partials/partial-enrollment.html',
          controller: 'submitController.js'
      })
      .when('/contact',{
          templateUrl: '/public/partials/partial-contact.html',
          // controller: 'mailController.js'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);