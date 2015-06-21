angular.module("beerApp.controllers").controller("BeerModalController", ["beers", "beerModal", function(beers, beerModal) {
    var vm = this;
    vm.beer = {};
    
    vm.save = function() {
        beers.save(vm.beer).$promise
        .then(function(response) {
            beerModal.deactivate();
        }, function(data) {

        });
    };
}]);

