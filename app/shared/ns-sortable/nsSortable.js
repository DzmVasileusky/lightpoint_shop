/*********************************************** 
  Directive to sort elements through Drag and Drop
***********************************************/
angular.module('Shared').directive('nsSortable', ['$document', '$window', function($document, $window) {
  return {
    scope: {
      instance: '@',
      onOrderChange: '&'
    },
    require: '?ngModel',
    restrict: 'A',
    link: function(scope, el, attrs, ngModelCtrl) {
      var startX = 0, startY = 0, x = 0, y = 0,
          elToReplace = null;

      scope.shops;

      el.on('mousedown', function(e) {
        e.preventDefault();
        el.addClass('ns-sortable_dragging');
        startX = e.pageX - x;
        startY = e.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      ngModelCtrl.$render = function() {
        scope.shops = ngModelCtrl.$viewValue || [];
      };

      function applyPostition() {
        var dragId, dropId, cache;
        angular.element('.ns-sortable_dropping').removeClass('ns-sortable_dropping');
        el.removeClass('ns-sortable_dragging');
        startX = startY = x = y = 0;
        el.css({
          top: 0,
          left: 0
        });

        if (scope.shops.length && elToReplace && elToReplace[0]) {
          scope.shops.forEach(function(value, index) {
            if (value.id == el[0].id) {
              dragId = index;
            } else if (value.id == elToReplace[0].id) {
              dropId = index;
            }
          });

          cache = scope.shops[dragId].order;
          scope.shops[dragId].order = scope.shops[dropId].order;
          scope.shops[dropId].order = cache;
          ngModelCtrl.$setViewValue(scope.shops);
          scope.onOrderChange({args: [ scope.shops[dragId], scope.shops[dropId] ]});
        }
      };

      function mousemove(e) {
        var eX = e.pageX, 
            eY = e.pageY - $window.pageYOffset;

        y = e.pageY - startY;
        x = e.pageX - startX;
        el.css({
          top: y + 'px',
          left:  x + 'px'
        });

        el.hide();    
        elToReplace = angular.element(document.elementFromPoint(eX, eY)).closest('.' + scope.instance);
        el.show();

        angular.element('.ns-sortable_dropping').removeClass('ns-sortable_dropping');
        elToReplace.addClass('ns-sortable_dropping');
      };

      function mouseup(e) {
        applyPostition(e);
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      };
    }
  };
}]);