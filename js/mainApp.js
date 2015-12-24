/**
 * Created by tetsuya.matsuura on 2015/07/30.
 * Modified by san.h.nguyen on 2015/12/12
 */
var MainApp = angular.module('mainApp', []);

MainApp.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.dvdList = [
        {"id":"001", "title":"Star Wars: The Force Awakens", "description":"A continuation of the saga created by George Lucas and set thirty years after Jedai no fukushuu (1983).", "releasedDate":"2015","genre":"Action | Adventure | Fantasy | Sci-Fi", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"002", "title":"Creed", "description":"The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.", "releasedDate":"2015","genre":"Drama | Sport", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"003", "title":"Krampus", "description":"A boy who has a bad Christmas ends up accidentally summoning a Christmas demon to his family home.", "releasedDate":"2015","genre":"Comedy | Fantasy | Horror", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"004", "title":"The Hunger Games: Mockingjay - Part 2", "description":"As the war of Panem escalates to the destruction of other districts by the Capitol, Katniss Everdeen, the reluctant leader of the rebellion, must bring together an army against President Snow, while all she holds dear hangs in the balance.", "releasedDate":"2015","genre":"Adventure | Sci-Fi", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"005", "title":"Spectre", "description":"A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.", "releasedDate":"2015","genre":"Action | Adventure | Thriller", "price":"20","purchasedDate":"2015/2/16"},
    ];

    console.log($scope.dvdList);

    index = 0;

    $scope.add = function() {
        $http.put('/appREST/webresources/dvdManagement',{id: $scope.id, title: $scope.title, description: $scope.description,
            releasedDate: $scope.releasedDate, genre: $scope.genre,
            price: $scope.price, purchasedDate: $scope.purchasedDate
            }).success(function(){
                $scope.dvdList.push({id: $scope.id, title: $scope.title, description: $scope.description,
                    releasedDate: $scope.releasedDate, genre: $scope.genre,
                    price: $scope.price, purchasedDate: $scope.purchasedDate
                })
            $("#loginBtn").addClass('hide');
            }).error(function(){
                // TODO
                $scope.dvdList.push({id: $scope.id, title: $scope.title, description: $scope.description,
                    releasedDate: $scope.releasedDate, genre: $scope.genre,
                    price: $scope.price, purchasedDate: $scope.purchasedDate
                })
        });

        $scope.message = "";
    };

    $scope.delete = function(id) {
        //alert("Delete?");
        $http.delete('/appREST/webresources/dvdManagement/' + id  ).success(function(kakeiList){
            $scope.kakeiList = kakeiList;
        });
        $scope.dvdList.splice(id, 1);
    };

    $scope.getList = function() {
        $http.get('/appREST/webresources/dvdManagement/?searchBuyDateFrom='
          + $scope.searchBuyDateFrom + '&searchBuyDateTo=' + $scope.searchBuyDateTo + '&searchNotes=' + $scope.searchNotes
          + '&searchKamokuid=' + $scope.searchKamokuid + '&searchConsumer=' + $scope.searchConsumer
          + '&searchPayer=' + $scope.searchPayer  ).success(function(kakeiList){
          $scope.kakeiList = kakeiList;
      });
    };
}]);


MainApp.directive('ngConfirmBoxClick', [
    function () {
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmBoxClick || "Are you sure want to delete?";
                var clickAction = attr.confirmedClick;
                element.bind('click', function (event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }
]);
