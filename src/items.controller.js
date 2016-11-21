(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemListController', ItemListController);

  ItemListController.$inject = ['items'];
  function ItemListController(items) {
    var itemList = this;
    itemList.catShortName = items.category.short_name;
    itemList.catName = items.category.name;
    itemList.items = items.menu_items;
  }

})();
