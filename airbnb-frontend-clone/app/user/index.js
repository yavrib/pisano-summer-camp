import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserComponent from './user.component';

const user = angular
  .module('user', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('user', {
        url: '/user/{id}',
        template: '<user />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('user', UserComponent)
  .name;

export default user;
