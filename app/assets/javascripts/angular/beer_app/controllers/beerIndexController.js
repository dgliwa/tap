angular.module("beerApp.controllers").controller("BeerIndexController", ["$location", "$q", "beers", "beerModal", "comments", function($location, $q, beers, beerModal, comments) {
    var vm = this;
    vm.beers = [];

    navigator.geolocation.getCurrentPosition(function(position) {
        beers.query({ longitude: position.coords.longitude, latitude: position.coords.latitude}).$promise
        .then(function(response) {
            vm.beers = response;
        }, function(data) {

        });
    });

    vm.createBeer = function() {
        beerModal.activate();
    };

    vm.viewBeer = function(beer) {
        $location.path('/beers/' + beer.id);
    };

    vm.follow = function(beer) {
        beers.follow({id: beer.id}).$promise
            .then(function(response) {
                beer.followed = true;
            }, function(data) {
            });
    };

    vm.unfollow = function(beer) {
        beers.unfollow({id: beer.id}).$promise
            .then(function(response) {
                beer.followed = false;
            }, function(data) {
            });
    };
}]);

