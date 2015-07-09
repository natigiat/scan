'use strict';

angular.module('yoscanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scan', {
        url: '/scan',
        templateUrl: 'app/scan/scan.html',
        controller: 'ScanCtrl'
      });
  });


angular.module('yoscanApp').directive('draggable', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.draggable({
				cursor: "move",
				stop: function (event, ui) {
					scope[attrs.xpos] = ui.position.left;
          scope[attrs.ypos] = ui.position.top;
          scope.$apply();
				}
			});
		}
	};
});