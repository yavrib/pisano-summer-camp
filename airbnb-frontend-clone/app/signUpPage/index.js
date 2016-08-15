import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SignUpPageComponent from './signUpPage.component';
import ngCookies from 'angular-cookies';

const signUpPage = angular
  .module('signUpPage', [
    uiRouter,
    ngCookies
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('signUpPage', {
        url: '/signUpPage',
        template: '<sign-up-page />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('signUpPage', SignUpPageComponent)
  .name;

export default signUpPage;
