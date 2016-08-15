class UserModel {
  constructor($http,API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  getUsers() {
    return this.$http.get(this.API_URL+'/users')
  }

  getUserOfListing(listing){
    var user;
    this.$http.get(this.API_URL + '/users/' + listing.user_id)
      .then((response) => {
        this.getUser(response.data.id).then((response) => {
          user = response.data;
        })
      })
    return user;
  }
  getUser(id){
    return this.$http.get(this.API_URL+'/users/'+id)
  }

}

UserModel.$inject = ['$http', 'API_URL'];

export default UserModel;
