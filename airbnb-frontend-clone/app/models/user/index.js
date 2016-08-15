import angular from 'angular';
import UserModel from './user.service';

const user = angular
  .module('User', [])
  .service('UserModel', UserModel)
  .name;

export default user;
