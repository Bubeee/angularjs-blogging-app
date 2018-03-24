export default class ArticleController {
  constructor(articles, $stateParams) {
    this.articles = articles.data;
    debugger;
    this.article = $stateParams.article;
  }

  add(data){
    debugger;
  }
}

ArticleController.$inject = ['articles', '$stateParams'];
