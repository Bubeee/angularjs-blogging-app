import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './home.routes';
import HomeController from './home.controller';

import articles from '../../services/articles.service';

export default angular.module('app.home', [uirouter, articles, 'ui.bootstrap'])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;