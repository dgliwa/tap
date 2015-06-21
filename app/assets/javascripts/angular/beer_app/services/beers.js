angular.module('beerApp.services').factory('beers', ['$resource', function($resource) {
        var beers = $resource('/beers/:id', {id: '@id'}, {});
        var myBeers = $resource('/beers/me', {}, {});

        return { query: beers.query, delete: beers.delete, myBeers: myBeers.query };
}]);
