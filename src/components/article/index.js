import './article.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './article.routes';
import ArticleController from './article.controller';

import articles from '../../services/articles.service';

export default angular.module('app.article', [uirouter, articles])
  .config(routing)
  .controller('ArticleController', ArticleController)
  .name;