import angular from 'angular';

class Articles {
  constructor() {
    this.data = [
      { id: 1, title: 'Blog 1', content: 'awesome content motherfuckers!!'},
      { id: 12, title: 'Blog 2', content: 'awesome content motherfuckers!!'},
      { id: 1423, title: 'Blog 3', content: 'awesome content motherfuckers!!'},
      { id: 1124346, title: 'Blog 4', content: 'awesome content motherfuckers!!'},
      { id: 8984, title: 'Blog 5', content: 'awesome content motherfuckers!!'},
      { id: 123123123, title: 'Blog 6', content: 'awesome content motherfuckers!!'},
      { id: 123123, title: 'Blog 7', content: 'awesome content motherfuckers!!'},
      { id: 112312312423, title: 'Blog 8', content: 'awesome content motherfuckers!!'},
      { id: 13123123124346, title: 'Blog 9', content: 'awesome content motherfuckers!!'},
      { id: 891231231423423484, title: 'Blog 10', content: 'awesome content motherfuckers!!'},
      { id: 2342341, title: 'Blog 11', content: 'awesome content motherfuckers!!'},
      { id: 12342342, title: 'Blog 12', content: 'awesome content motherfuckers!!'},
      { id: 1234234423, title: 'Blog 13', content: 'awesome content motherfuckers!!'},
      { id: 112342344346, title: 'Blog 14', content: 'awesome content motherfuckers!!'},
      { id: 89234234284, title: 'Blog 15', content: 'awesome content motherfuckers!!'},
      { id: 2342341, title: 'Blog 16', content: 'awesome content motherfuckers!!'},
      { id: 23423412, title: 'Blog 17', content: 'awesome content motherfuckers!!'},
      { id: 123423423, title: 'Blog 18', content: 'awesome content motherfuckers!!'},
      { id: 11223424346, title: 'Blog 19', content: 'awesome content motherfuckers!!'},
      { id: 84234234984, title: 'Blog 20', content: 'awesome content motherfuckers!!'},
      { id: 13423234, title: 'Blog 21', content: 'awesome content motherfuckers!!'},
      { id: 23423423412, title: 'Blog 22', content: 'awesome content motherfuckers!!'},
      { id: 1234234423, title: 'Blog 23', content: 'awesome content motherfuckers!!'},
      { id: 1123423423423425246, title: 'Blog 24', content: 'awesome content motherfuckers!!'},
      { id: 2342342344, title: 'Blog 25', content: 'awesome content motherfuckers!!'},
    ];
  }
}

export default angular.module('services.articles', [])
  .service('articles', Articles)
  .name;