class UserModel {
  constructor($http,API_URL,$cookieStore,$state) {
    this.$http = $http;
    this.API_URL = API_URL;
    this.$state = $state;
    this.$cookieStore = $cookieStore;
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
  addListing(listing){
    var url = this.API_URL+'/listings?token='+this.$cookieStore.get('eyirbiyenbi-token').token
    this.$http.post(url,listing)
      .then((response)=>{
        this.$state.go('home', {}, {reload:true})
      })
  }
  /*
  editListing(listing){
    var url = this.API_URL+'listings?token='+this.$cookieStore.get('eyirbiyenbi-token').token
    this.$http.put(url,listing)
  }
  */
  deleteListing(listing){
    var url = this.API_URL+'/listings/'+listing.id+'?token='+this.$cookieStore.get('eyirbiyenbi-token').token
    this.$http.delete(url,listing)
      .then((response)=>{
        this.$state.go('home')
      })
  }

}

UserModel.$inject = ['$http', 'API_URL', '$cookieStore', '$state'];

export default UserModel;
