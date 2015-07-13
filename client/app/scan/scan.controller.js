'use strict';

angular.module('yoscanApp' )
  .controller('ScanCtrl', function ($scope) {
    
      $scope.divwidth = 200;
	  $scope.divheight = 50;
	  $scope.show = true;
	  $scope.divtop = 80;
	  $scope.divleft = 50;
	  $scope.divtop2 = 180;
	  $scope.divleft2 = 150;

	  $('.resizable').resizable({
		    aspectRatio: true,
		    handles: 'ne, se, sw, nw'
      });

	  // reference canvas element (with id="c")
		
  var canvas  = new fabric.Canvas('c' ,{
  background: "https://www.freshdesignweb.com/wp-content/uploads/2015/06/GRAPE-Responsive-App-Landing-Page-Template.jpg",
  selectionColor: 'blue',
  selectionLineWidth: 2
  // ...
});
  fabric.Object.prototype.transparentCorners = false;

  canvas.on('mouse:over', function(e) {
    e.target.setFill('red');
    canvas.renderAll();
  });

  canvas.on('mouse:out', function(e) {
    e.target.setFill('green');
    canvas.renderAll();
  });

  // add random objects
  for (var i = 15; i--; ) {
    var dim = fabric.util.getRandomInt(30, 60);
    var klass = ['Rect', 'Triangle', 'Circle'][fabric.util.getRandomInt(0,2)];
    var options = {
      top: fabric.util.getRandomInt(0, 600),
      left: fabric.util.getRandomInt(0, 600),
      fill: 'green'
    };
    if (klass === 'Circle') {
      options.radius = dim;
    }
    else {
      options.width = dim;
      options.height = dim;
    }
    canvas.add(new fabric[klass](options));
  }



  });
