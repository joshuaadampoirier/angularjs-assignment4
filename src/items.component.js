(function () {
  'use strict';

  angular.module('MenuApp')
  .component('menuItemsList', {
    templateUrl: 'src/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });

})();
