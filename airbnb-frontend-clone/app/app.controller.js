class AppController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit() {
  }

  goToHome(){
    this.$state.go('home')
  }
  goToLogin(){
    this.$state.go('loginPage')
  }
  goToSignUp(){
    this.$state.go('signUpPage')
  }
}

export default AppController;
