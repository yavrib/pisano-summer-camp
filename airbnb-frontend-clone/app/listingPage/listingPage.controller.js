class ListingPageController{
  constructor($http,ListingModel,$state,$stateParams, API_URL){
    this.$http = $http;
    this.ListingModel = ListingModel;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.API_URL = API_URL;
  }
  $onInit(){
    this.ListingModel.getSelectedListing(this.$stateParams.id)
    .then((response)=>{
      this.listing = response.data
      this.getUser();
    })
  }
  getListingTitle(){
    return this.listing.title;
  }
  getUser(){
    this.$http.get(this.API_URL + /users/ + this.listing.user_id)
    .then((response) => {
      this.user = response.data;
      console.log(this.user)
    })
  }
}

export default ListingPageController;
