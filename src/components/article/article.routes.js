routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('article', {
      url: '/article',
      template: require('./article.html'),
      controller: 'ArticleController',
      controllerAs: 'article'
    })
    .state('articleEdit', {
      url: '/article/:id',
      template: require('./article.html'),
      controller: 'ArticleController',
      controllerAs: 'article',
      params: { article: null }
    });
}
