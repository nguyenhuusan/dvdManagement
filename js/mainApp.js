/**
 * Created by tetsuya.matsuura on 2015/07/30.
 * Modified by san.h.nguyen on 2015/12/12
 */
var MainApp = angular.module('mainApp', []);

MainApp.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.genres = [
        {name: 'Action', value: 'Action'},
        {name: 'Adventure', value: 'Adventure'},
        {name: 'Fantasy', value: 'Fantasy'},
        {name: 'Sci-Fi', value: 'Sci-Fi'},
        {name: 'Drama', value: 'Drama'},
        {name: 'Sport', value: 'Sport'},
        {name: 'Comedy', value: 'Comedy'},
        {name: 'Thriller', value: 'Thriller'},
        {name: 'Crime', value: 'Crime'},
        {name: 'Horror', value: 'Horror'}
    ];

    $scope.dvdList = [
        {"id":"001", "title":"Star Wars: The Force Awakens", "description":"A continuation of the saga created by George Lucas and set thirty years after Jedai no fukushuu (1983).", "releasedDate":"2015","genre":["Action","Adventure","Fantasy","Sci-Fi"], "price":"20","purchasedDate":"2015/2/16", "imageName":"001.jpg"},
        {"id":"002", "title":"Creed", "description":"The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.", "releasedDate":"2015","genre":["Drama","Sport"], "price":"31","purchasedDate":"2015/2/16", "imageName":"002.jpg"},
        {"id":"003", "title":"Krampus", "description":"A boy who has a bad Christmas ends up accidentally summoning a Christmas demon to his family home.", "releasedDate":"2015","genre":["Comedy","Fantasy","Horror"], "price":"41","purchasedDate":"2015/2/16", "imageName":"003.jpg"},
    ];

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
                // get selected genres
                var checks = [];
                angular.forEach($scope.genres, function(genre) {
                    if (genre.checked) checks.push(genre.value);
                });

                $scope.dvdList.push({id: $scope.id, title: $scope.title, description: $scope.description,
                    releasedDate: $scope.releasedDate, genre: checks,
                    price: $scope.price, imageName: $scope.imageName
                })

                $scope.registFormClear();

        });

        $scope.message = "";
    };

    $scope.delete = function(id) {
        $http.delete('/appREST/webresources/dvdManagement/' + id  )
            .success(function(dvdList){
            $scope.dvdList = dvdList;
        });
        $scope.dvdList.splice(id, 1);
    };

    $scope.getList = function() {
        $http.get('/appREST/webresources/dvdManagement/?searchBuyDateFrom='
          + $scope.searchBuyDateFrom + '&searchBuyDateTo=' + $scope.searchBuyDateTo + '&searchNotes=' + $scope.searchNotes
          + '&searchKamokuid=' + $scope.searchKamokuid + '&searchConsumer=' + $scope.searchConsumer
          + '&searchPayer=' + $scope.searchPayer  ).success(function(dvdList){
          $scope.dvdList = dvdList;
      });
    };

    $scope.displayGenres = function(genres){
        return genres.join(" | ");
    };

    $scope.registFormClear = function () {
        $scope.title = "";
        $scope.description = "";
        $scope.releasedDate = "";
        $scope.price = "";
        angular.forEach($scope.genres, function(genre) {
            if (genre.checked) genre.checked = false;
        });
        $('#imageName').fileinput('clear');
    };

    angular.element(document).ready(function () {
        $('#releasedDate').datepicker({
            format: "yyyy",
            viewMode: "years",
            minViewMode: "years",
            language: "en",
            autoclose: true,
            orientation: "top auto"
        });
        var today = new Date();
        var year = today.getYear();
        if(year<1000) year+=1900;
        $("#releasedDate").datepicker("setDate", today);
    });
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

MainApp.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0].name;
                });
            });
        }
    }
}]);