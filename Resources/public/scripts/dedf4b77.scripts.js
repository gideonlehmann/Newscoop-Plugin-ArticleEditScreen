"use strict";angular.module("authoringEnvironmentApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("authoringEnvironmentApp").controller("MainCtrl",["$scope",function(a){a.$on("$viewContentLoaded",function(){jQuery("#cs-specific").prependTo(".main-background-container")})}]),angular.module("authoringEnvironmentApp").controller("SfPanesCtrl",["$scope","$filter","panes",function(a,b,c){a.panes=c.query(),a.tabpaneIsOpen=function(c){return b("filter")(a.panes,{position:c,selected:!0,active:!0}).length>0},a.flipActive=function(c,d){angular.forEach(b("filter")(a.panes,{position:d,selected:!0,active:!0}),function(a){a.active=a!=c?!1:a.active}),c.active=!c.active}}]),angular.module("authoringEnvironmentApp").controller("PaneTopicsCtrl",["$scope",function(a){a.topics=[{id:0,text:"Foo",selected:!1},{id:1,text:"Bar",selected:!0},{id:2,text:"Baz",selected:!1},{id:3,text:"whatever",selected:!1},{id:4,text:"lekker boeiend",selected:!1},{id:5,text:"koekje",selected:!1},{id:6,text:"cookie",selected:!1},{id:7,text:"heee",selected:!1},{id:8,text:"naja",selected:!1}],a.chosenTopics=[],a.addTopic=function(){a.topics.push({text:a.topicText,selected:!1,id:a.topics[a.topics.length-1].id+1}),a.topicText=""},a.deleteTopic=function(b){a.topics.splice(a.topics.indexOf(b),1)},a.chooseTopic=function(a){a.selected=!0},a.deleteChTopic=function(a){a.selected=!1}}]),angular.module("authoringEnvironmentApp").factory("panes",function(){var a=[{name:"Topics",icon:"chat",template:"views/pane-topics.html",position:"left",active:!1,selected:!0},{name:"Koekjes",icon:"ingest",template:"views/pane-topics.html",position:"left",active:!1,selected:!0},{name:"Media",icon:"ingest",template:"views/pane-topics.html",position:"right",active:!1,selected:!0}];return{query:function(){return a},active:function(a){a.active=!a.active}}}),angular.module("authoringEnvironmentApp").controller("PanesConfigCtrl",["$scope","panes",function(a,b){a.panes=b.query(),a.flipPosition=function(a){a.position="left"==a.position?"right":"left"}}]),angular.module("authoringEnvironmentApp").controller("ArticleCtrl",["$scope","$http","$location",function(a,b,c){var d=c.search(),e=d.f_article_number;b.get("http://tw-merge.lab.sourcefabric.org/api/articles/"+e).success(function(b){a.article=b})}]);