angular.module("beerApp.controllers").controller("BeerIndexController", ["$location", "$q", "beers", "beerModal", "comments", function($location, $q, beers, beerModal, comments) {
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

    vm.viewBeer = function(beer) {
        $location.path('/beers/' + beer.id);
    };

    vm.message = function(beer) {
        comments.save({beer_id: beer.id, text: beer.text}).$promise
            .then(function(response) {
               beer.commented = true;
            }, function(data) {
            });
    };

}]);

