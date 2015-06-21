angular.module("beerApp.controllers").controller("BeerController", ["$routeParams", "$window", "$filter", "$q", "$anchorScroll", "beers", "beerModal", function($routeParams, $window, $filter, $q, $anchorScroll, beers, beerModal) {
    var vm = this;
    vm.beers = [];

    navigator.geolocation.getCurrentPosition(function(position) {
        beers.query({ latitude: position.coords.latitude, longitude: position.coords.longitude }).$promise
            .then(function(response) {
                vm.beers = response;
            }, function(data) {

            });
    });

    vm.createBeer = function() {
        beerModal.activate();
    };
}]);

