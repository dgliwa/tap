angular.module('beerApp.services').factory('beers', ['$resource', function($resource) {
        return $resource('/beers/', {}, {});
}]);
