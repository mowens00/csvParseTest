angular.module("MyApp", [])

  .controller("ctrl", function($scope, $http) {
  
  var data;

  $http.get('./forMatt.csv').success(function(d) {
    data = d;
  })
  .then(function() {
      
    var dataArr = data.split(/\r\n/|/\n/);

    $scope.final = [];

    for(var i = 0; i < dataArr.length; i++) {
      var model = {
        "first_name": "",
        "last_name": "",
        "phone_number": ""
      }

      var newObj = dataArr[i].split(',');
      model.first_name = newObj[0];
      model.last_name = newObj[1];
      model.phone_number = newObj[2];
      $scope.final.push(model);
    }
    console.log($scope.final);
  });
});