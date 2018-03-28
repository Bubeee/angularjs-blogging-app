export default class ArticleController {
  constructor(articles, $stateParams, $location) {
    this.location = $location;

    this.isEditMode = !!$stateParams.id;
    this.articles = articles.data;
    this.article = $stateParams.article;
  }

  add() {
    if (this.isEditMode) {
    } else {
      this.article.id = 9087631;
      this.articles.push(this.article);
    }

    this.location.path("home");
  }
}

ArticleController.$inject = ['articles', '$stateParams', '$location'];
