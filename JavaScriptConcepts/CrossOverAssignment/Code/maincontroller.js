var buildStatus = angular.module('buildStatusApp', []);

buildStatus.controller('buildStatusController',  function($scope, $http){
	var data = [];
	var label = [];
	var colors = [];
	$http.get("data.json").success(function(response) {
        $scope.buildData = response;
    });
    
	$scope.drawUnitTestPieChart = function(id){
		canvas = document.getElementById("unit-test-piechart"+id);
		$('.'+id).toggleClass("hide-progress-bar");
		data = [263, 97];
		labels = ["142", "10"];
		colors = ["#77b300", "#e68900"];

		var context = canvas.getContext("2d");
		for (var i = 0; i < data.length; i++) {
		    drawSegment(canvas, context, i);
		}
	};
	$scope.drawFuncTestPieChart = function(id){
		canvas = document.getElementById("func-piechart"+id);
		data = [170, 190];
		labels = ["4321", "2145"];
		colors = ["#77b300", "#e68900"];

		var context = canvas.getContext("2d");
		for (var i = 0; i < data.length; i++) {
		    drawSegment(canvas, context, i);
		}
	};

	function drawSegment(canvas, context, i) {
		    context.save();
		    //alert("In arch");
		    var centerX = Math.floor(canvas.width / 2);
		    var centerY = Math.floor(canvas.height / 2);
		    radius = Math.floor(canvas.width / 2);

		    var startingAngle = degreesToRadians(sumTo(data, i));
		    var arcSize = degreesToRadians(data[i]);
		    var endingAngle = startingAngle + arcSize;

		    context.beginPath();
		    context.moveTo(centerX, centerY);
		    context.arc(centerX, centerY, radius, 
		                startingAngle, endingAngle, false);
		    
		    context.closePath();

		    context.fillStyle = colors[i];
		    context.fill();

		    context.restore();

		    drawSegmentLabel(canvas, context, i);
		}

		function degreesToRadians(degrees) {
		    return (degrees * Math.PI)/180;
		}

		function drawSegmentLabel(canvas, context, i) {
		   context.save();
		   var x = Math.floor(canvas.width / 2);
		   var y = Math.floor(canvas.height / 2);
		   var angle = degreesToRadians(sumTo(data, i));

		   context.translate(x, y);
		   context.rotate(angle);
		   var dx = Math.floor(canvas.width * 0.5) - 20;
		   var dy = Math.floor(canvas.height * 0.05);

		   context.textAlign = "right";
		   var fontSize = Math.floor(canvas.height / 10);
		   context.font = fontSize + "pt Helvetica";

		   context.fillText(labels[i], x/2, y/2);

		   context.restore();
		}
		function sumTo(a, i) {
		    var sum = 0;
		    for (var j = 0; j < i; j++) {
		      sum += a[j];
		    }
		    return sum;
		}
});