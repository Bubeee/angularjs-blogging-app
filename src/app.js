'use strict';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

import home from './components/home';
import article from './components/article';

angular.module('app', [uirouter, home, article]).config(routing);

