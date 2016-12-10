angular.module('myApp', ['ngRoute'])
.config(function($routeProvider){
          $routeProvider.when("/",
                {
                        templateUrl: "components/home/home.html",
                    }).when("/About", {
                        templateUrl: "components/about/about.html"
                    }).when("/GetInvolved", {
                        templateUrl: "components/gi/getInvolved.html",
                    }).when("/Contact", {
                        templateUrl: "components/contact/contact.html"
                    })
            });
