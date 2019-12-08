// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'App' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('App', ['ionic', 'ngCordova', 'ngAnimate'])

.run(['$ionicPlatform', 
			'$sqliteService',
      function($ionicPlatform, $sqliteService) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
		
    //Load the Pre-populated database, debug = true
    $sqliteService.preloadDataBase(true);
  });
}])
.config(['$stateProvider',
         '$urlRouterProvider',
         '$ionicConfigProvider',
         '$compileProvider',
         function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content|ms-appx|x-wmapp0):|data:image\/|img\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
    
    $ionicConfigProvider.scrolling.jsScrolling(ionic.Platform.isIOS());
    
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: 'HomeController'
        })
        .state('app', {
            url: '/app',
            abstract: true,
            controller: 'AppController',
            templateUrl: 'templates/menu.html'
        })
        .state('app.gallery', {
            url: "/gallery",
            cache: false,
            views: {
                viewContent: {
                    templateUrl: "templates/gallery.html",
                    controller: 'GalleryController'
                }
            }
        })
        .state('app.item', {
            url: "/item/{title}",
            params: {
                color: null,
                icon: null
            },
            cache: false,
            views: {
                viewContent: {
                    templateUrl: "templates/item.html",
                    controller: 'ItemController'
                }
            }
        }); /*;*/
        /*
        .state('app.item', {
            url: "/item/Add%20Clothes",
            (function(AWS){

                // Establish a reference to the `window` object, and
                // save the previous value of the `ImageUpload` variable.
                const root = this;
                const previousImageUpload = root.ImageUploader;
              
                const sizeLimit = 10485760;   // 10MB in Bytes
                const sizeLabel = Math.round(sizeLimit / 1024 / 1024) + 'MB';   // Bytes To MB string
              
                // Generate a unique string
                const uniqueString = function() {
                  let text = '';
                  const regx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                  for (let idx = 0; idx < 8; idx++) {
                    text = `${text}${regx.charAt(Math.floor(Math.random() * regx.length))}`;
                  }
                  return text;
                };
              
                const defaultConfig = {
                  accessKeyId: 'AKIAJDDLMBIFFIUWYCEA',
                  bucket: {},
                  bucketName: 'com.thinkcrazy.ionicimageupload',
                  bucketUrl: 'https://s3.amazonaws.com/com.thinkcrazy.ionicimageupload/',
                  file: {},
                  region: 'us-east-1',
                  secretAccessKey: 'gCF19auerZBOx9IvpPpKAlCJYbD0yUo+bLyNB+wA',
                  sizeLimit,
                  uploadProgress: 0,
                };
              
                // ImageUploader class
                function ImageUploader(inputConfig) {
                  const config = inputConfig || defaultConfig;
                  AWS.config.update({
                    accessKeyId: config.accessKeyId,
                    secretAccessKey: config.secretAccessKey,
                    region: config.region,
                  });
                  this._err = {};
                  this._accessKeyId = config.accessKeyId;
                  this._secretAccessKey = config.secretAccessKey;
                  this._region = config.region;
                  this._bucketName = config.bucketName;
                  this._bucketUrl = config.bucketUrl;
                  this._file = config.file;
                  this._uploadProgress = config.uploadProgress;
                  this._sizeLimit = config.sizeLimit;
                  this._bucket = new AWS.S3({ params: { Bucket: this._bucketName } });
                  return this;
                }
              
                root.ImageUploader = ImageUploader;
              
                ImageUploader.prototype = {
                  validateFile(file) {
                    // Check that file exists
                    if (!file.size) {
                      this._err = { message: 'Missing file argument', code: 'No File' };
                    }
                    // Check that file size is above 0
                    if (file.size <= 0) {
                      this._err = { message: 'File has size of 0', code: 'Erroneous File' };
                    }
                    // Check that file size is below size limit
                    if (Math.round(parseInt(file.size, 10)) > this._sizeLimit) {
                      this._err = { code: 'File Too Large', message: 'Attachment too big. Max ' + sizeLabel + ' allowed' };
                    }
                    return this._err;
                  },
                  clearProgress() {
                    this._uploadProgress = 0;
                  },
                  updateProgress(progress) {
                    this._uploadProgress = progress;
                  },
                  resetUploadProgress() {
                    setTimeout(function() {
                      ImageUploader.prototype.clearProgress();
                    }, 100);
                  },
                  push(file, callback) {
                    if (!this.validateFile(file)) {
                      throw new Error('Missing file.');
                    }
                    const filename = encodeURI(uniqueString() + '-' + file.name);
                    const params = {
                      ACL: 'public-read',
                      Body: file,
                      Bucket: this._bucketName,
                      ContentType: file.type,
                      Key: filename,
                      ServerSideEncryption: 'AES256',
                    };
                    this.updateProgress(0);
                    this._bucket.putObject(params, function(err, data) {
                      if (err) {
                        this._err = Object.assign({}, err, { data });
                        return false;
                      }
                      this.resetUploadProgress();
                      Object.assign(data, data, { filename, url: this._bucketUrl + filename });
                      callback(data);
                      return true;
                    }).on('httpUploadProgress', function(prog) {
                      this.updateProgress(Math.round(prog.loaded / prog.total * 100));
                    });
                  },
                };
              })(window.AWS);');
              */
        
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("home");
    });
}]); 

