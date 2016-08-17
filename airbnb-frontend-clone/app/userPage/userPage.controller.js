class UserPageController {
  constructor($http,UserModel,$state,$stateParams,ListingModel,$cookieStore) {
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
    this.currentUser = $cookieStore.get('eyirbiyenbi-token')
  }
  $onInit() {
    console.log(this.currentUser)
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
  goToAddListing(){
    this.$state.go('addListing')
  }
  /*
  editListing(){
    this.UserModel.editListing(this.newListing)
      .then((response)=>{
        console.log(response.data)
      })
  }
  */
  deleteListing(listing){
    console.log(listing)
    this.UserModel.deleteListing(listing)
    this.$state.go('home')
  }

}

export default UserPageController;
