"use strict";var app=angular.module("cormo",["ui.router","ui.bootstrap","firebase","ngTouch","ngAnimate"]);app.config(["$stateProvider","$urlRouterProvider",function(t,r){t.state("about",{url:"/about",templateUrl:"/html/about.html"}).state("rates",{url:"/rates",templateUrl:"/html/rates.html"}).state("calendar",{url:"/calendar",templateUrl:"/html/calendar.html"}).state("contact",{url:"/contact",templateUrl:"/html/contact.html"}).state("login",{url:"/login",templateUrl:"/html/login.html",controller:"loginCtrl"}),r.otherwise("/about")}]),app.constant("FB_URL","https://country-roads-moving.firebaseio.com/");var app=angular.module("cormo");app.service("UserService",function(){var t=this;this.setUser(function(r){return t.user=r}),this.getUser(function(r){return t.user})});var app=angular.module("cormo");app.controller("loginCtrl",["$scope","$firebaseAuth","FB_URL",function(t,r,a){var o=new Firebase(a);t.authObj=r(o),t.signIn=function(r){t.authObj.$authWithPassword({email:r.email,password:r.password}).then(function(t){console.log("Logged in as:",t.uid)})["catch"](function(t){console.error("Authentication failed:",t)})}}]);var app=angular.module("cormo");app.controller("mainCtrl",["$scope",function(t){console.log("mainCtrl")}]);var app=angular.module("cormo");app.controller("navCtrl",function(){console.log("navCtrl")});var app=angular.module("cormo");app.directive("navbar",function(){return{restrict:"E",templateUrl:"../../html/components/navbar.html",controller:"navCtrl"}});
//# sourceMappingURL=quiver.js.map
