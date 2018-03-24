import angular from 'angular';

class Articles {
  constructor() {
    this.data = [
      { id: 1, title: 'Blog 1', content: 'awesome content motherfuckers!!'},
      { id: 12, title: 'Blog 2', content: 'awesome content motherfuckers!!'},
      { id: 1423, title: 'Blog 3', content: 'awesome content motherfuckers!!'},
      { id: 1124346, title: 'Blog 4', content: 'awesome content motherfuckers!!'},
      { id: 8984, title: 'Blog 5', content: 'awesome content motherfuckers!!'},
    ];
  }
}

export default angular.module('services.articles', [])
  .service('articles', Articles)
  .name;