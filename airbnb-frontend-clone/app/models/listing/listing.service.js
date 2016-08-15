class ListingModel {
  constructor($http,API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }


  query() {
    return this.$http.get(this.API_URL + '/listings')
  }

  getUsersOfListings() {
    return this.$http.get(this.API_URL + '/users')
  }
  getSelectedListing(id) {
    return this.$http.get(this.API_URL + '/listings/' + id)
  }
  getUserOfListing(listing){
    this.$http.get(this.API_URL+'/users/'+listing.user_id)
  }
}

ListingModel.$inject = ['$http', 'API_URL'];

export default ListingModel;
