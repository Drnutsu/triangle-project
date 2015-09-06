//triangle Project
angular.module('TriangleApp', [])
	.controller('TriangleController', function($scope) {
		$scope.result = function() {
			var sides = [$scope.a, $scope.b, $scope.c];
			sides.sort();
			var min = parseInt(sides[0]);
			var mid = parseInt(sides[1]);
			var max = parseInt(sides[2]);

			// drawing element
			//var draw = new Vivus('.canvas', {type: 'delayed', duration: 200, file: 'img/my.svg'});


			if((math.pow(min, 2) + math.pow(mid, 2)) == math.pow(max, 2)){
				return { type: "สามเหลี่ยมมุมฉาก", img: "images/right.svg" };
			}else if( min == mid && mid == max && max == min ){
				return { type: "สามเหลี่ยมด้านเท่า", img: "images/equal.svg" };
			}else if( min == mid ){
				return { type: "สามเหลี่ยมหน้าจั่ว", img: "images/acute.svg" };
			}else if( (min + mid) < max){
				return { type: "สามเหลี่ยมไม่มีรูปร่าง", img: "images/unshape.svg" };
			}else{
				return { type: "ไม่เป็นสามเหลี่ยม", img: "images/none.svg" };
			}
		};

	});