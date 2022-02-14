var abc = angular.module("abc", ['ngRoute'])

//router config
abc.config(($routeProvider)=>{
    $routeProvider
    .when("/", {
        templateUrl: './home.html',
        controller: "homeCtrl"
    })
    .when("/about", {
        templateUrl: './about.html',
        controller:'aboutCtrl'
    })
    .when("/contact", {
        templateUrl: './contact.html',
        controller: "contactCtrl"
    })
})

//controllers
abc.controller("abcCtrl", ($rootScope, $http)=>{
    //retrieve JSON file
    $http.get("./employee.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
})

abc.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.var = "Todays logins"
    $scope.message = "There are no logins for today!"
})
abc.controller("aboutCtrl",function($scope,$rootScope, $http)
{
    $rootScope.var = "Commitee Details"
    //retrieve JSON file
    $http.get("./employee.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
})
abc.controller("contactCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Employees"
    $scope.message = "Search employees in logins by name:"

    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>{
        if(search_name.value.trim() == "")
        {
            document.getElementById("search_table").style.display = "none"
        }
        else
        {
            document.getElementById("search_table").style.display = "table"
        }
    })
})