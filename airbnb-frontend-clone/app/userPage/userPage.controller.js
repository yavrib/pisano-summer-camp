class UserPageController {
  constructor($http,UserModel,$state,$stateParams,ListingModel) {
    this.$http = $http;
    this.$state = $state;
    this.UserModel = UserModel;
    this.ListingModel = ListingModel;
    this.user_id = $stateParams.id;
    this.shared_room_type = {
      'shared_room' : 'Shared Room',
      'entire_house': 'Entire House',
      'private_room': 'Private Room'
    }
  }
  $onInit() {
    this.UserModel.getUser(this.user_id)
      .then((response) => {
        this.user = response.data;
      })
    this.ListingModel.query()
      .then((response) => {
        this.listings_of_user = response.data.filter((listing) => listing.user_id == this.user.id)
      })

  }
  getFullNameOfUser(){
    var full_name = this.user.first_name + " " + this.user.last_name;
    return full_name
  }
  goToListingPage(listing){
    this.$state.go('listingPage',{'id':listing.id})
  }
  getBedCapacity(listing){
    return new Array(listing.bed_capacity);
  }
}

export default UserPageController;
