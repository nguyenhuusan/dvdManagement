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
        {"id":"006", "title":"The Revenant", "description":"In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.", "releasedDate":"2015","genre":"Adventure | Drama | Western", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"007", "title":"The Good Dinosaur", "description":"An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.", "releasedDate":"2015","genre":"Animation | Adventure | Comedy | Family | Fantasy", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"008", "title":"Love", "description":"Murphy is an American living in Paris who enters a highly sexually and emotionally charged relationship with the unstable Electra. Unaware of the effect it will have on their relationship, they invite their pretty neighbor into their bed.", "releasedDate":"2015","genre":"Drama | Romance", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"009", "title":"In the Heart of the Sea", "description":"Based on the 1820 event, a whaling ship is preyed upon by a giant whale, stranding its crew at sea for 90 days, thousands of miles from home.", "releasedDate":"2015","genre":"Action | Adventure | Biography | Drama | History | Thriller", "price":"20","purchasedDate":"2015/2/16"},
        {"id":"010", "title":"Chi-Raq (2015) 	Add to Watchlist Chi-Raq", "description":"A modern day adaptation of the ancient Greek play Lysistrata by Aristophanes, set against the backdrop of gang violence in Chicago.", "releasedDate":"2015","genre":"Drama", "price":"20","purchasedDate":"2015/2/16"}
    ];

    //$http.get('js/data.json').success (function(data){
    //    $scope.movies = data;
    //    console.log(data);
    //});

    console.log($scope.dvdList);

//    index = 0;
//
//    $scope.add = function() {
//        $http.put('/appREST/webresources/dvdManagement',{buydate: $scope.buyDate, notes: $scope.notes,
//            payamount: $scope.payAmount, incomeamount: $scope.incomeAmount,
//            kamokuid: $scope.kamokuId, consumer: $scope.consumer, payer: $scope.payer
//            }).success(function(){
//                //alert('Success');
//            $("#loginBtn").addClass('hide');
//            }).error(function(){
//                alert('Error');
//        });
//
//
//
////        $scope.kakeiList.push({id: index, buyDate: $scope.buyDate, payAmount: $scope.payAmount,
////            incomeAmount: $scope.incomeAmount, kamokuId: $scope.kamokuId, notes: $scope.notes,
////            consumer: $scope.consumer, payer: $scope.payer});
////        $scope.message = "";
////        index++;
//    };
//
//    $scope.delete = function(id) {
//        alert("Delete?");
//        $http.delete('/appREST/webresources/dvdManagement/' + id  ).success(function(kakeiList){
//            $scope.kakeiList = kakeiList;
//        });
//    };
//
//    $scope.getList = function() {
//        $http.get('/appREST/webresources/dvdManagement/?searchBuyDateFrom='
//          + $scope.searchBuyDateFrom + '&searchBuyDateTo=' + $scope.searchBuyDateTo + '&searchNotes=' + $scope.searchNotes
//          + '&searchKamokuid=' + $scope.searchKamokuid + '&searchConsumer=' + $scope.searchConsumer
//          + '&searchPayer=' + $scope.searchPayer  ).success(function(kakeiList){
//          $scope.kakeiList = kakeiList;
//      });
//    };
//
//    $scope.login = function(user,password) {
//        $http.get('/appREST/webresources/dvdManagement/login/' + user + "/" + password  ).success(function(userName){
//            $scope.userName = userName;
//        });
//    };

}]);