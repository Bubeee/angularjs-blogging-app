import './article.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './article.routes';
import ArticleController from './article.controller';

import articles from '../../services/articles.service';

import articleValidation from '../../directives/article.validation.directive';

export default angular
  .module('app.article', [uirouter, articles, articleValidation])
  .config(routing)
  .controller('ArticleController', ArticleController).name;
