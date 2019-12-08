(function() {
'use strict';

    angular
        .module('App')
        .controller('GalleryController', GalleryController);

    GalleryController.$inject = ['$scope', '$state'];
    function GalleryController($scope, $state) {
        
        $scope.openItem = function(item){
            $state.go('app.item', { title: item.title, icon: item.icon, color: item.color 
            });
        };
    }
})();

//<script src="lib/image-uploader.bundle.min.js"></script>
/*
const imageUpload = new ImageUpload();
imageUpload.push(file, (data) => {
  console.log('File uploaded Successfully', $scope.file, data);
  $scope.uploadUri = data.url;
});
*/