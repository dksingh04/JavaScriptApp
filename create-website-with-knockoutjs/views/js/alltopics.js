var app = angular.module("AllTopics", []);

app.controller("listtopicsCtrl", function($scope, $http) {
  
  $http.get('data/allarticles.json').
    success(function(data, status, headers, config) {
        $scope.articles = data.topiclists;
    }).
    error(function(data, status, headers, config) {
    });
    
    
});