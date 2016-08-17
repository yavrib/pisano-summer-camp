class Authentication {
  constructor($http,API_URL,$cookieStore,$state) {
    this.$http = $http;
    this.API_URL = API_URL;
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.userLoggedIn
  }
  login(userCredentials){
    let url=this.API_URL+'/users/login'
    this.$http.post(url,userCredentials)
      .then((response) => {
        this.$cookieStore.put('eyirbiyenbi-token',response.data);
        this.checkUserToken();
        this.$state.go(this.$cookieStore.get('eyirbiyen-previous-state'))
      }, ((response) => {
        console.log(response.data.error)
      }))
  }
  signUp(userCredentials){
    let url=this.API_URL+'/users'
    this.$http.post(url,userCredentials)
      .then((response) => {
        this.$cookieStore.put('eyirbiyenbi-token',response.data);
        this.$state.go(this.$cookieStore.get('eyirbiyen-previous-state'))
        this.checkUserToken()
      }, ((response) => {
        console.log(response.data.error)
      }))
  }
  checkUserToken(){
    var tokenCookie = this.$cookieStore.get('eyirbiyenbi-token');
    if(tokenCookie && tokenCookie.token){
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }
}

Authentication.$inject = ['$http', 'API_URL', '$cookieStore','$state'];

export default Authentication;
