describe('triangle',function() {
	beforeEach(angular.mock.module('TriangleApp'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	describe('right angle', function () {
		it('3, 4, 5 should be right triangle', function() {
			var $scope = {};
			var controller = $controller('TriangleController', {$scope: $scope});
			$scope.a = 3;
			$scope.b = 4;
			$scope.c = 5;
			var result = $scope.result();
			expect(result.key).toBe("right");
		});
	});

	describe('equal angle', function () {
		it('3, 3, 3 should be equal triangle', function() {
			var $scope = {};
			var controller = $controller('TriangleController', {$scope: $scope});
			$scope.a = 3;
			$scope.b = 3;
			$scope.c = 3;
			var result = $scope.result();
			expect(result.key).toBe("equal");
		});
	});

	describe('have empty fields', function () {
		it('3, -, - should notice error', function() {
			var $scope = {};
			var controller = $controller('TriangleController', {$scope: $scope});
			$scope.a = 3;
			var result = $scope.result();
			expect(result.key).toBe("empty");
		});
	});	

	describe('acute angle', function () {
		it('3, 3, 20 should be acute triangle', function() {
			var $scope = {};
			var controller = $controller('TriangleController', {$scope: $scope});
			$scope.a = 3;
			$scope.b = 3;
			$scope.c = 20;
			var result = $scope.result();
			expect(result.key).toBe("acute");
		});
	});
});