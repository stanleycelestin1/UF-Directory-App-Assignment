angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.currentListing = {
            "code": "AAF", 
            "name": "Academic Advisement - Farrior Hall", 
            "coordinates": {
                "latitude": 29.6502323, 
                "longitude": -82.34563860000002
            }, 
            "address": "100 Fletcher Dr, Gainesville, FL 32611, United States"
        }
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */


    $scope.addListing = function() {
      if($scope.listings.listingName && $scope.listings.listingCode && $scope.listings.listingAddress 
        && $scope.listings.listingLatitude && $scope.listings.listingLongitude){
        this.toStore = {
            "code": $scope.listings.listingCode, 
            "name": $scope.listings.listingName, 
            "coordinates": {
                "latitude": $scope.listings.listingLatitude, 
                "longitude": $scope.listings.listingLongitude
            }, 
            "address": $scope.listings.listingAddress 
        };

        $scope.listings.push(this.toStore);
        
        console.log("good");
        console.log($scope.listings.listingName + $scope.listings.listingCode + $scope.listings.listingAddress 
        + $scope.listings.listingLatitude + $scope.listings.listingLongitude);

        }
        else{
          console.log("bad");
        }

    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    
    $scope.hoverIn = function(index){
      this.hoverEdit = true;
      $scope.currentListing = $scope.listings[index];
    };

    $scope.hoverOut = function(){
      this.hoverEdit = false;
    };

    $scope.showListing = function (index){
      console.log("good");
      this.show = true;
      $scope.currentListing = $scope.listings[index];
    }
  }
]);