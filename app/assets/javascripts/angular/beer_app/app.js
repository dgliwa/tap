angular.module('beerApp.services', ['ngResource']);

angular.module('beerApp.directives', []);
angular.module('beerApp.controllers', []);

angular.module('beerApp', ['beerApp.services', 'beerApp.directives', 'beerApp.controllers', 'templates', 'ngRoute', 'btford.modal'])
  .config(['$httpProvider', '$locationProvider', '$routeProvider',  function($httpProvider, $locationProvider, $routeProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'AngularXMLHttpRequest';
        $routeProvider
          .when('/',
            { templateUrl: "/assets/beerIndex.html",
              controller: "BeerController",
              controllerAs: "vm"
            })
          .otherwise({
            redirectTo: '/'
          });
      }]);
