AppOne = angular.module('AppOne', ['ui.router']); 
AppOne.controller('NameController', ['$scope', function($scope){
$scope.name = 'Dawid'; 

    //zadanie 3
    $scope.listaocen = [
      {"ocena":5, "przedmiot":"Analiza", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Systemy", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Projektowanie Systemow", "event":"kolokwium"},
      {"ocena":3, "przedmiot":"Angielski", "event":"wejsciowka"},
      {"ocena":4, "przedmiot":"Logistyka", "event":"egzamin"},
      {"ocena":5, "przedmiot":"Hurtownie Danych", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Badania Operacyjne", "event":"kolokwium"},
      {"ocena":3, "przedmiot":"Bazy Danych", "event":"wejsciowka"},
      {"ocena":4, "przedmiot":"Grafika", "event":"egzamin"},
      {"ocena":5, "przedmiot":"Metodyka Zarzadzania Projektami", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Metodologia", "event":"kolokwium"},
      {"ocena":3, "przedmiot":"Zarzadzanie projektami", "event":"wejsciowka"},
      {"ocena":4, "przedmiot":"Fizyka", "event":"egzamin"},
      {"ocena":5, "przedmiot":"Matematyka", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Filozofia", "event":"kolokwium"},
      {"ocena":3, "przedmiot":"WF", "event":"egzamin"},
      {"ocena":4, "przedmiot":"Programowanie Obiektowe", "event":"wejsciowka"},
      {"ocena":5, "przedmiot":"Programowanie", "event":"sprawdzian"},
      {"ocena":2, "przedmiot":"Socjologia", "event":"kolokwium"},
      {"ocena":3, "przedmiot":"Statystyka", "event":"egzamin"},
      {"ocena":4, "przedmiot":"Makroekonomia", "event":"wejsciowka"},
      {"ocena":5, "przedmiot":"Mikroekonomia", "event":"sprawdzian"}
    ];  
      $scope.sort = "";
      $scope.reverse = false;

      $scope.changeSort = function(value){
          if ($scope.sort == value){
            $scope.reverse = !$scope.reverse;
            return;
          }

          $scope.sort = value;
          $scope.reverse = false;
      }
}]);

//zadanie2
AppOne.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/name");

  $stateProvider
    .state('name', {
      url: "/name",
      templateUrl: "src/ptrng.tmplt.html",
      controller: function($scope) {
        $scope.name = 'Dawid';
      }
    })
    //zadanie3
	.state('Lista', {
      url: "/Lista",
      templateUrl: "src/Lista.html"
	  })
	
	
	
});

AppOne.directive('ptrngName',function()
{
return{
restrict: 'E',
template: 'Your name is {{name}}'
};
});