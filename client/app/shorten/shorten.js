angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
    Shorten.addLink().then(function (url) {
      //??
    }).catch(function (err) {
      console.log(err);
    })
  }
});
