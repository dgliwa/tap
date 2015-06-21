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

    vm.message = function(beer) {
        comments.save({beer_id: beer.id, text: beer.text}).$promise
            .then(function(response) {
                beer.toggled = false;
            }, function(data) {
            });
    };

    vm.toggleBeer = function(beer) {
        beer.toggled = beer.toggled ? false : true;
    }
}]);

