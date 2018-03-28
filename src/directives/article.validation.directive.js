import angular from 'angular';

function articleValidation() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      var blacklist = attr.articleValidation.split(',');
      //For DOM -> model validation
      ngModel.$parsers.unshift(function(value) {
        var valid = blacklist.indexOf(value) === -1;
        ngModel.$setValidity('blacklist', valid);
        return valid ? value : undefined;
      });

      //For model -> DOM validation
      ngModel.$formatters.unshift(function(value) {
        ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
        return value;
      });
    }
  };
}

export default angular
  .module('directives.article.validation', [])
  .directive('articleValidation', articleValidation).name;
