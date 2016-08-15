class ListingPageController{
  constructor($http,ListingModel,$state,$stateParams,UserModel){
    this.$http = $http;
    this.ListingModel = ListingModel;
    this.$state = $state;
    this.UserModel = UserModel;
    this.$stateParams = $stateParams;
    this.shared_room_type = {
      'shared_room' : 'Shared Room',
      'entire_house': 'Entire House',
      'private_room': 'Private Room'
    }
  }
/*
    TODO List
  * Required fields: Listing.title, Listing.bed_capacity, Listing.created_at, Listing.shared_room_type, Rating, User.first_name, User.last_name
  * Required methods: Get listings, get users, get rating
  * Required actions: Clicking on User name will redirect to UserPage
  * Required objects: Shared_room_types
*/
  $onInit(){
    this.ListingModel.getSelectedListing(this.$stateParams.id)
    .then((response)=>{
      this.listing = response.data
      this.UserModel.getUser(this.listing.user_id)
        .then((response)=>{
          this.user = response.data;
        });
    })
  }
  getUserName(){
    return this.user.first_name + " " + this.user.last_name
  }
  getSharedRoomType(){
    return this.shared_room_type[this.listing.sharing_type]
  }
  getBedCapacity(listing){
    return new Array(listing.bed_capacity);
  }
  goToUserPage(listing){
    this.$state.go('userPage',{'id':listing.user_id})
  }
}

export default ListingPageController;
