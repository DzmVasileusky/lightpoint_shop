/*********************************************** 
  Directive to select items and bind to model
***********************************************/
angular.module('Shared').directive('nsSelector', [function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      options: '<'
    },
    require: '?ngModel',
    templateUrl: 'app/shared/ns-selector/ns-selector.html',
    link: function(scope, el, attrs, ngModelCtrl) {
      scope.items = [];

      scope.onClick = function($event) {
        var $this = $($event.currentTarget),
            item = scope.options[$this.attr('data-option-id')*1];

        if ($this.hasClass('ns-selector_option--selected')) {
          $this.removeClass('ns-selector_option--selected');
          scope.items = scope.items.filter(function(value) {
            return value.id != item.id;
          });
        } else {
          $this.addClass('ns-selector_option--selected');
          scope.items.push(item);
          scope.items.sort(function(a, b) { return a.id - b.id; });
        }

        ngModelCtrl.$setViewValue(scope.items);
      };

      scope.isSelected = function(option) {
        return scope.items && scope.items.filter(function(value) {
          return value.id === option.id
        }).length;
      };

      ngModelCtrl.$render = function() {
        scope.items = ngModelCtrl.$viewValue || [];
      };
    }
  }
}]);