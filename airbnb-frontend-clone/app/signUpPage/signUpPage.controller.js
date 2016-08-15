class SignUpPageController{
  constructor($http,$state,$stateParams,$cookieStore,API_URL){
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$cookieStore = $cookieStore;
    this.userCredentials = {
      'user' : {
        'first_name':null,
        'last_name':null,
        'email': null,
        'password':null,
        'phone_number': null,
        'profile_picture_url': null
      }
    }
    this.url = API_URL + '/users'
  }

  $onInit(){
  }
  signUp(){
    //Some http request
    if(this.verifyPassword()){
      this.$http.post(this.url,this.userCredentials)
      .then((response) => {
        console.log(response)
        this.$cookieStore.put('eyirbiyenbi-token',response.data.token);
        this.$state.go('home')
      })
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
