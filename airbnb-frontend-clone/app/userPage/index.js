import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserPageComponent from './userPage.component';

const userPage = angular
  .module('userPage', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('userPage', {
        url: '/userPage/{id}',
        template: '<user-page />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('userPage', UserPageComponent)
  .name;

export default userPage;
