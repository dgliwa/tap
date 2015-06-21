angular.module("beerApp.controllers").controller("BeerModalController", ["beers", "beerModal", "Upload", function(beers, beerModal, Upload) {
    var vm = this;
    vm.beer = {};
    vm.picFile;
    navigator.geolocation.getCurrentPosition(function(position) {
        vm.beer.latitude = position.coords.latitude
        vm.beer.longitude = position.coords.longitude
    });
    vm.save = function () {
        Upload.upload({
            url: 'beers',
            fields: {beer: vm.beer},
            file: vm.picFile
        }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        }).success(function (data, status, headers, config) {
            beerModal.deactivate();
        });
    };

    vm.close = function() {
    	beerModal.deactivate();
    }
}]);

