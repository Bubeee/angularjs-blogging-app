export default class HomeController {
  constructor(articles) {
    this.articles = articles.data;
  }
}

HomeController.$inject = ['articles'];
