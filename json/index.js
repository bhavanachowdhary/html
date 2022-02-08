var empMS = angular.module("empMS", [])
empMS.controller("empMSCtrl", ($scope, $http)=>{

    //retrieve JSON file
    $http.get("./employee.json")
    .success((response)=>{
        $scope.employees = response
    })
})

//email validation filter
empMS.filter("validateEmail", ()=>{
    return (input)=>{
        document.getElementById(input).style.color = "white"
        if((/^([a-z0-9_\.]+)@(([a-z0-9]+)\.)([a-z]{2,3})$/).test(input))
        {
            document.getElementById(input).style.backgroundColor = "green"
            return input
        }
        document.getElementById(input).style.backgroundColor = "red"
        return input
    }
})

//phone validation filter
empMS.filter("validatePhone", ()=>{
    return (input)=>{
        document.getElementById(input).style.color = "white"
        if((/^[0-9]{10}$/).test(input))
        {
            document.getElementById(input).style.backgroundColor = "green"
            return input
        }
        document.getElementById(input).style.backgroundColor = "red"
        return input
    }
})