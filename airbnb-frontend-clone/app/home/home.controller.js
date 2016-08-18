class HomeController {
  constructor($http, ListingModel, UserModel, $state) {
    this.$http = $http;
    this.$state = $state;
    this.ListingModel = ListingModel;
    this.UserModel = UserModel;
    this.shared_room_type = {
      'shared_room' : 'Shared Room',
      'entire_house': 'Entire House',
      'private_room': 'Private Room'
    }
    this.users = [];
    this.listings = [];

  }
  $onInit() {
    this.ListingModel.query()
    .then((response) => {
      this.listings = response.data;
    })
    this.UserModel.getUsers()
    .then((response) => {
      this.users = response.data;
    })
  }
  getBedCapacity(listing){
    return new Array(listing.bed_capacity);
  }
  getUserOfListing(listing){
    let user;
    user = this.users.filter((user) => listing.user_id == user.id)
    return user[0]
    /*for (var index = 0; index <= user_count; index++) {
      if(listing.user_id==this.users[index].id){
        return this.users[index]
      }
    }*/
  }
  getUserName(listing){
    let user = this.getUserOfListing(listing);
    let first_name;
    let last_name;
    first_name = user.first_name;
    last_name = user.last_name;
    let user_name = first_name + " " + last_name;
    return user_name
  }
  getSharingType(listing){
    return this.shared_room_type[listing.sharing_type]
  }
  goToUserPage(listing){
    this.$state.go('userPage',{'id':listing.user_id})
  }
  goToListingPage(listing){
    this.$state.go('listingPage',{'id':listing.id})
  }
}

export default HomeController;
