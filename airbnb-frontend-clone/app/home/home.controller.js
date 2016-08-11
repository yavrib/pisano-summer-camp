class HomeController {
  constructor($http, ListingModel, $state) {
    this.$http = $http;
    this.$state = $state;
    this.ListingModel = ListingModel;
  }

$onInit() {
  this.ListingModel.query()
    .then((response) => {
      //console.log(response.data);
      this.listings = response.data;
      console.log(this.listings.length)
    })
  this.ListingModel.getUsersOfListings()
    .then((response) => {
      this.users = response.data;
    })
  }
  getUserOfListing(listing){
    var user = this.users.filter((user) => listing.user_id == user.id)
    return user[0]
    /*for (var index = 0; index <= user_count; index++) {
      if(listing.user_id==this.users[index].id){
        return this.users[index]
      }
    }*/
  }
  getUserName(listing){
    var user = this.getUserOfListing(listing);
    var user_name = user.first_name + " " + user.last_name;
    return user_name
  }
  goToUserPage(listing){
    this.$state.go('user',{'id':listing.user_id})
  }
  goToThisState(id){
    this.$state.go('listingPage',{'id':id})
  }
  getNumberOfBedCapacity(listing){
    return new Array(listing.bed_capacity);
  }
}

export default HomeController;
