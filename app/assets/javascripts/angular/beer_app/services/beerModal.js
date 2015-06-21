angular.module('beerApp.services').factory('beerModal', function (btfModal) {
      return btfModal({
              controller: 'BeerModalController',
                 controllerAs: 'vm',
                 templateUrl: 'assets/beerModal.html'
            });
});
