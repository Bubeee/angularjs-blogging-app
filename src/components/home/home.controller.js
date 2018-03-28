export default class HomeController {
  constructor(articles) {
    this.articles = articles.data;
    this.currentPage = 1;
    this.numPerPage = 5;
    this.maxSize = 5;
  }
}

HomeController.$inject = ['articles'];
