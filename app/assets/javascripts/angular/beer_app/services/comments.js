angular.module('beerApp.services').factory('comments', ['$resource', function($resource) {
        return $resource('/comments/', {}, {});
}]);
