//triangle Project

angular.module('TriangleApp', [])
	.controller('TriangleController', function($scope) {
		$scope.result = function() {
			var sides = [$scope.a, $scope.b, $scope.c];

			sides.sort(function(a,b){
  				var keyA = parseFloat($(a).text(), 10);
  				var keyB = parseFloat($(b).text(), 10);
				if (keyA < keyB) return -1;
  				if (keyA > keyB) return 1;
  				return 0;
			});

			var min = parseFloat(sides[0], 10);
			var mid = parseFloat(sides[1], 10);
			var max = parseFloat(sides[2], 10);
			console.log("hey : " + min + mid + max);

			// drawing element
			//var draw = new Vivus('.canvas', {type: 'delayed', duration: 200, file: 'img/my.svg'});
			
			if( /[0-9]/.test($scope.a) && /[0-9]/.test($scope.b) && /[0-9]/.test($scope.c) ){
				if(min < 0 || min < 0 || max < 0){
					return {type: "ไม่ควรใส่ค่าลบ", img: "images/none.svg", key: "error" };
				}

				if((math.pow(min, 2) + math.pow(mid, 2)) == math.pow(max, 2)){
					return { type: "สามเหลี่ยมมุมฉาก", img: "images/right.svg", key: "right" };
				}else if( min == mid && mid == max && max == min ){
					return { type: "สามเหลี่ยมด้านเท่า", img: "images/equal.svg", key: "equal" };
				}else if( min == mid ){
					return { type: "สามเหลี่ยมหน้าจั่ว", img: "images/acute.svg", key: "acute" };
				}else if( (min + mid) < max){
					return { type: "สามเหลี่ยมไม่มีรูปร่าง", img: "images/unshape.svg", key: "unshape" };
				}else{
					return { type: "ไม่เป็นสามเหลี่ยม", img: "images/none.svg", key: "none" };
				}				
			}else{
				return { type: "ยังใส่ค่าไม่ครบ", img: "images/none.svg", key: "empty" }; 
			}

		};

	});
