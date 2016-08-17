class AppController {
  constructor($state,$cookieStore,Authentication) {
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.Authentication = Authentication;
  }

  $onInit() {
    this.Authentication.checkUserToken()
  }
  goToHome(){
    this.$state.go('home')
  }
  goToLogin(){
    this.savePreviousState()
    this.$state.go('loginPage')
  }
  goToSignUp(){
    this.savePreviousState()
    this.$state.go('signUpPage')
  }
  goToUserProfile(){
    this.$state.go('userPage',{'id':this.$cookieStore.get('eyirbiyenbi-token').id})
  }
  logOut(){
    this.$cookieStore.put('eyirbiyenbi-token',null)
    this.$state.go('home', {refresh: true})
    this.Authentication.checkUserToken()
  }
  savePreviousState(){
    this.$cookieStore.put('eyirbiyen-previous-state', this.$state.current.name)
  }
}

export default AppController;
