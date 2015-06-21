angular.module("beerApp.controllers").controller("MyBeerController", ["$routeParams", "$location", "$filter", "$q", "$anchorScroll", "beers", "beerModal", function($routeParams, $location, $filter, $q, $anchorScroll, beers, beerModal) {
    var vm = this;
    vm.beers = [];

    beers.myBeers().$promise
    .then(function(response) {
        vm.beers = response;
    }, function(data) {

    });

    vm.delete = function(beer) {
        beers.delete({id: beer.id}).$promise.
            then(function(response){
                var index = vm.beers.indexOf(beer);
                vm.beers.splice(index, 1);
            }, function(data) {

            });
    };

    vm.inStock = function(beer) {
        beers.inStock({id: beer.id}).$promise.
            then(function(response){
            }, function(data) {

            });
    };

}]);

