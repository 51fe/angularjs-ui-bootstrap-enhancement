/**
 * 下拉框指令（统一外观）
 * options：数据源(简单数组或关联数组)
 * selected：当前选择项
 * labelField：label对应的数据源字段，默认为lable
 * valueField：value对应的数据源字段，默认为value
 * disabled：下拉框是否可用，默认为false
 */

angular
  .module('directives', [])
  .directive('riaSelect', function() {
    return {
      restrict: 'EA',
      templateUrl: 'components/riaSelect.html',
      scope: {
        options: '=',
        selected: '=',
        labelField: '@',
        valueField: '@',
        disabled: '@'
      },
      replace: true,
      link: function(scope, element, attr) {
        if (attr.labelField == undefined) {
          attr.labelField = 'label';
        }
        if (attr.valueField == undefined) {
          attr.valueField = 'value';
        }

        if (element.css('width') != undefined) {
          var w = element.css('width');
          // w == undefined将自适应宽度
          if (w != undefined) {
            var btn = element.find('button');
            btn.css({'width': '100%', 'text-align': 'left'});
            btn.next().css('min-width', '100%');
          }
        }

        scope.select = function(item) {
          scope.selected = item;
        };
      }
    }
  });