angular.module("beerApp.controllers").controller("BeerController", ["$routeParams", "$window", "$filter", "$q", "$anchorScroll", "beers", "beerModal", function($routeParams, $window, $filter, $q, $anchorScroll, beers, beerModal) {
    var vm = this;
    vm.beers = [];

    var getBeers = function() {
    beers.query().$promise
        .then(function(response) {
            vm.beers = response;
        }, function(data) {

        });
    };

    getBeers();

    vm.createBeer = function() {
        beerModal.activate();
    };

}]);

