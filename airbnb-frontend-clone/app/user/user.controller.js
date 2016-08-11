class UserController {
  constructor($http,API_URL,$state,$stateParams) {
    this.$http = $http;
    this.API_URL = API_URL;
    this.$state = $state;
    this.user_id = $stateParams.id;
  }
  $onInit() {
    this.$http.get(this.API_URL + '/users/' + this.user_id)
      .then((response) => {
        this.user=response.data;
        console.log(this.user)
      })
  }
  getFullNameOfUser(){
    var full_name = this.user.first_name + " " + this.user.last_name;
    return full_name
  }
  getJoinDateOfUser(){
    var join_date = this.user.created_at;
    return join_date
  }
  getEmailOfUser(){
    var email = this.user.email;
    return email
  }
  getPictureOfUser(){
    var pic_url = this.user.profile_picture_url;
    return pic_url;
  }
}

export default UserController;
