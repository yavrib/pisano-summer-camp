class LoginPageController{
  constructor($http,$state,$cookieStore,API_URL,Authentication){
    this.$http = $http;
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.Authentication = Authentication;
    this.userCredentials = {
      'user' : {
        'email': null,
        'password':null
      }
    }
    this.url = API_URL + '/users/login'
  }

  $onInit(){
  }
  login(){
    //Some http request
    this.Authentication.login(this.userCredentials)
    this.Authentication.checkUserToken()
  }
}

export default LoginPageController;
