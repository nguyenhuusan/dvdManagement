/**
 * Created by tetsuya.matsuura on 2015/07/30.
 */
var KakeiApp = angular.module('KakeiApp', []);

KakeiApp.controller('KakeiCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.kakeiList = [];
    index = 0;

    $scope.add = function() {
        $http.put('/KakeiREST/webresources/kakei4',{buydate: $scope.buyDate, notes: $scope.notes,
            payamount: $scope.payAmount, incomeamount: $scope.incomeAmount,
            kamokuid: $scope.kamokuId, consumer: $scope.consumer, payer: $scope.payer
            }).success(function(){
                //alert('Success');
            $("#loginBtn").addClass('hide');
            }).error(function(){
                alert('Error');
        });



//        $scope.kakeiList.push({id: index, buyDate: $scope.buyDate, payAmount: $scope.payAmount,
//            incomeAmount: $scope.incomeAmount, kamokuId: $scope.kamokuId, notes: $scope.notes,
//            consumer: $scope.consumer, payer: $scope.payer});
//        $scope.message = "";
//        index++;
    };

    $scope.delete = function(id) {
        alert("Delete?");
        $http.delete('/KakeiREST/webresources/kakei4/' + id  ).success(function(kakeiList){
            $scope.kakeiList = kakeiList;
        });
    };

    $scope.getList = function() {
        $http.get('/KakeiREST/webresources/kakei4/?searchBuyDateFrom='
          + $scope.searchBuyDateFrom + '&searchBuyDateTo=' + $scope.searchBuyDateTo + '&searchNotes=' + $scope.searchNotes
          + '&searchKamokuid=' + $scope.searchKamokuid + '&searchConsumer=' + $scope.searchConsumer
          + '&searchPayer=' + $scope.searchPayer  ).success(function(kakeiList){
          $scope.kakeiList = kakeiList;
      });
    };

    $scope.login = function(user,password) {
        $http.get('/KakeiREST/webresources/kakei4/login/' + user + "/" + password  ).success(function(userName){
            $scope.userName = userName;
        });
    };

}]);