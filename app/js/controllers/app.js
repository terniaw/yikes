(function () {
    'use strict';

    angular
        .module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$ionicPopover'];
    function AppController($scope, $ionicPopover) {
        
        $scope.items = [
            {
                color: "#000000",
                title: "FITTED\u2122"
            },
            {
                color: "#3DBEC9",
                title: "Add Clothes"
                
            },
            {
                color: "#5AD863",
                title: "Get Outfit"
            },
            {
                color: "#F8E548",
                title: "My Closet"
            },
            {
                color: "#D86B67",
                title: "Settings"
            }
        ];

        $scope.exitApp = function () {
            ionic.Platform.exitApp();
        };

        $ionicPopover.fromTemplateUrl('templates/modals/popover.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });

        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };
        
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
    }
})();