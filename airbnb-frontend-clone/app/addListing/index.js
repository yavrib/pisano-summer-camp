import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AddListingComponent from './addListing.component';
import ngCookies from 'angular-cookies';

const addListing = angular
  .module('addListing', [
    uiRouter,
    ngCookies
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('addListing', {
        url: '/addListing',
        template: '<add-listing />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('addListing', AddListingComponent)
  .name;

export default addListing;
