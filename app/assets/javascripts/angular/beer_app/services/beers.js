angular.module('beerApp.services').factory('beers', ['$resource', function($resource) {
        var beers = $resource('/beers/:id', {id: '@id'}, {});
        var followBeers = $resource('/beers/:id/follow', {id: '@id'}, {});
        var unfollowBeers = $resource('/beers/:id/unfollow', {id: '@id'}, {});
        var beersInStock = $resource('/beers/:id/in_stock', {id: '@id'}, {});
        var myBeers = $resource('/beers/me', {}, {});

        return { query: beers.query, delete: beers.delete, myBeers: myBeers.query, inStock: beersInStock.save, follow: followBeers.save, unfollow: unfollowBeers.save };
}]);
