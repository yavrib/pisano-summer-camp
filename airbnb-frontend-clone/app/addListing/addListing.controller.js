class AddListingController{
  constructor($http,$state,$cookieStore,API_URL,UserModel){
    this.$http = $http;
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.UserModel = UserModel;
    this.currentUser = $cookieStore.get('eyirbiyenbi-token')
    this.url = API_URL + '/listings?token='+$cookieStore.get('eyirbiyenbi-token')
    this.newListing = {
      'listing':{
        'image_url' : null,
        'user_id':this.currentUser.id,
        'title':null,
        'sharing_type':null,
        'guest_capacity':null,
        'bed_capacity':null,
        'daily_price':null
      }
    }
    this.shared_room_type = {
      'shared_room' : 'Shared Room',
      'entire_house': 'Entire House',
      'private_room': 'Private Room'
    }
  }

  $onInit(){
  }
  addListing(){
    this.UserModel.addListing(this.newListing);
    this.$state.go('userPage',{'id':this.currentUser.id})

  }
}

export default AddListingController;
