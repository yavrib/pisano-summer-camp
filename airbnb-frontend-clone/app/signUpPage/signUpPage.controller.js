class SignUpPageController{
  constructor($http,$state,$cookieStore,API_URL,Authentication){
    this.$http = $http;
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.Authentication = Authentication;
    this.userCredentials = {
      'user' : {
        'first_name':null,
        'last_name':null,
        'email': null,
        'password':null
      }
    }
    this.url = API_URL + '/users'
  }

  $onInit(){
  }
  signUp(){
    if(this.verifyPassword()){
      this.Authentication.signUp(this.userCredentials)
      this.Authentication.checkUserToken()
    } else {
      alert('Passwords do not match!')
    }
  }
  verifyPassword(){
    if (this.userCredentials.user.password==this.passwordVerification) {
      return true
    } else {
      return false
    }
  }
}

export default SignUpPageController;
