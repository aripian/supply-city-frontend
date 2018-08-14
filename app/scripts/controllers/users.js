'use strict';

angular.module('supplyFrontApp')
  .controller('usersCtrl', ['$scope','$filter','$http', function($scope, $filter, $http){
  	var apiURL = 'https://swapi.co/api/people'; //Please put api url here
  	//this function is for initialization
  	$scope.init = function (){
  		$http.get(apiURL,{})
  			.then(function success(response){
          $scope.users = [{
            id: 1,
            name: "NIK",
            email: "nikei@nik.com",
            type: "1",
            active: "1"
          }, {
            id: 2,
            name: "NEMI",
            email: "abe@stylo.com",
            type: "1",
            active: "2"
          },{
            id: 3,
            name: "ADLI",
            email: "adela@yahoo.com",
            type: "2",
            active: "2"
          }];
  				//do something with success response here
          console.log($scope.users);
  				console.log(response);
  			}, function failure(err){
  				//handle failure response here
  			})			
  	};

  }]);
