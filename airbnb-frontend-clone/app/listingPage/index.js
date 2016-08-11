import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ListingPageComponent from './listingPage.component';

const listingPage = angular
  .module('listingPage', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('listingPage', {
        url: '/listingPage/{id}',
        template: '<listing-page />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('listingPage', ListingPageComponent)
  .name;

export default listingPage;
