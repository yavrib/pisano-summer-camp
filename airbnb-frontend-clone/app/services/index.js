import angular from 'angular';
import Authentication from './authentication.service';

const authentication = angular
  .module('Authentication', [])
  .service('Authentication', Authentication)
  .name;

export default authentication;
