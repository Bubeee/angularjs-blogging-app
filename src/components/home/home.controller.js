export default class HomeController {
  constructor(articles, pagerService) {
    this.articles = articles.data;    
    this.pagerService = pagerService;

    this.pager = {};

    this.setPage(1);
  }

  setPage(page) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.GetPager(this.articles.length, page, 5);

    // get current page of items
    this.items = this.articles.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}

HomeController.$inject = ['articles', 'pager'];
