import 'bootstrap/dist/css/bootstrap.css';
import 'app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import AppComponent from './app.component';
import Home from './home';
import User from './models/user';
import Listing from './models/listing';
import UserPage from './userPage';
import ListingPage from './listingPage';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import AddListing from './addListing';
import Authentication from './services';

const root = angular
  .module('eyirbiyenbiApp', [
    Home,
    uiRouter,
    ngCookies,
    User,
    Listing,
    UserPage,
    ListingPage,
    LoginPage,
    SignUpPage,
    AddListing,
    Authentication
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .constant('API_URL','http://localhost:3000')//'https://eyirbiyenbi-api-fabien.herokuapp.com')
  .constant('ROOT_URL','http://localhost:8080')
  .component('app', AppComponent)
  .name;

export default root;
