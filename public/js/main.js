/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar locations = [{\n    title: 'DDDEU Brussels Conference',\n    position: new google.maps.LatLng(50.85034, 4.35171),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain-Driven Design Conference Europe</strong><br/>How are the world’s leading experts applying Domain-Driven Design today? On January 28th & 29th 2016 visit Brussels, Belgium, for a two-day conference, and fuel your passion for tackling complexity in the heart of software.<br/><a href=\"http://dddeurope.com\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Domain Driven Design Wroclaw Meetup',\n    position: new google.maps.LatLng(51.107885, 17.038538),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain Driven Design Wroclaw Meetup</strong><br/>This is a group for people interested in learning and adoption of Domain-Driven Design. We want to share knowledge, ideas and experience. We also want to promote DDD in Wrocław. <br/> <a href=\"http://www.meetup.com/DDD-WRO/\">Visit the Website</a>'\n    })\n}, {\n    title: 'Domain Driven Design Denver Meetup',\n    position: new google.maps.LatLng(39.739236, -104.990251),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain Driven Design Denver Meetup</strong><br/>This is a group for those interested in learning about and adopting DDD, and includes a number of experienced domain-driven design (DDD) practitioners. Our goal is to encourage building a DDD culture in the mile-high region, within its organizations and their teams, and helping you follow through with successful implementations.<br/> <a href=\"http://www.meetup.com/ddd-denver/\">Visit the Website</a>'\n    })\n}, {\n    title: 'Domain Driven Design Paris Meetup',\n    position: new google.maps.LatLng(48.856614, 2.352222),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain Driven Designss Paris Meetup</strong><br/>Ce groupe a pour but de réunir les gens intéressés par l’apprentissage et l’adoption de Domain Driven Design, de partager leur expérience, de discuter des problèmes de design rencontrés et de promouvoir la culture DDD dans les entreprises et leurs équipes. <br/> <a href=\"http://www.meetup.com/fr/DDD-Paris/\">Visit the Website</a>'\n    })\n}, {\n    title: 'Domain Driven Design Israel Meetup',\n    position: new google.maps.LatLng(32.0853, 34.781768),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>The Inaugural DDD-IL Meetup</strong><br/>This group is intended to bring together Israeli software professionals(architects, developers, project managers, qa) to meet and discuss DDD principles, practices, and processes.<br/> <a href=\"http://www.meetup.com/ddd-il/\">Visit the Website</a>'\n    })\n}, {\n    title: 'DDD Belgium Meetup',\n    position: new google.maps.LatLng(50.83034, 4.35171),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain-Driven Design Belgium Meetup</strong><br/>We are a group of software developers, ranging from noobs to veterans, who meet up regularly at different places in Belgium. We aim to spread the ideas of Domain-Driven Design, and become better Software Craftsmen, by teaching and learning. We are technology-agnostic. We are open, self-organized, and inclusive.<br/><a href=\"http://www.meetup.com/dddbelgium/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Copenhagen Domain Driven Design Meetup',\n    position: new google.maps.LatLng(55.676097, 12.568337),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain-Driven Design Copenhagen Meetup</strong><br/>We meet to discuss the theory and practice of Domain Driven Design.<br/><a href=\"http://www.meetup.com/Copenhagen-Domain-Driven-Design-Meetup/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Domain Driven Design Copenhagen Meetup',\n    position: new google.maps.LatLng(55.676097, 12.568337),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain-Driven Design Copenhagen Meetup</strong><br/>We meet to discuss the theory and practice of Domain Driven Design.<br/><a href=\"http://www.meetup.com/Copenhagen-Domain-Driven-Design-Meetup/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Domain Driven Design Kraków Meetup',\n    position: new google.maps.LatLng(50.06465, 19.94498),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Domain-Driven Design Kraków Meetup</strong><br/>This is a group for people interested in learning and adoption of Domain-Driven Design. We want to share knowledge, ideas and experience. We also want to promote DDD in Kraków. Join us to discuss benefits and trade-offs, that DDD gives.<br/><a href=\"http://www.meetup.com/DDD-KRK/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'CQRS Beers in Den Haag',\n    position: new google.maps.LatLng(52.070498, 4.3007),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>CQRS Beers in Den Haag</strong><br/>An informal beers and chats about Domain-Driven Design, Event Sourcing, Command Query Responsibility Segregation. This is a part of \"Global Day of CQRS Beers\".<br/><a href=\"http://www.meetup.com/CQRS-Beers-in-Den-Haag/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'NYC Domain-Driven Design User Group',\n    position: new google.maps.LatLng(40.712784, -74.005941),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>NYC Domain-Driven Design Meetup</strong><br/>Meet other local people in NYC interested in Domain-Driven Design, learn more about it, exchange experiences, discuss current design problems, etc..<br/><a href=\"http://www.meetup.com/dddnyc/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'BDD London',\n    position: new google.maps.LatLng(51.507351, -0.127758),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>BDD Londen Meetup</strong><br/>Behaviour Driven Development (BDD) is a way to develop software through a constant communication with stakeholders in form of examples; examples of how this software should help them, and you, to achieve your goals. <br/><a href=\"http://www.meetup.com/BDDLondon/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Frankfurt Software Architecture Meetup',\n    position: new google.maps.LatLng(50.110922, 8.682127),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Frankfurt Software Architecture Meetup</strong><br/>This group is for anyone interested in the architecture of software systems. I started this group to create a place where software engineers and architects can share their learnings and discuss topics related to software architecture.<br/><a href=\"http://www.meetup.com/Frankfurt-Software-Architecture-Meetup/\">Visit the website</a></p>'\n    })\n}, {\n    title: 'Monster on Rails - Web Development Meetup Münster',\n    position: new google.maps.LatLng(51.960665, 7.626135),\n    info: new google.maps.InfoWindow({\n        content: '<p><strong>Monster on Rails - Web Development Meetup Münster</strong><br/>Monster on Rails was originally founded as Ruby on Rails Usergroup Münster. Since there are many corresponding technologies around in Ruby sphere we are dealing many topics like Ruby, Ruby on Rails, Sinatra, Software Architecture, Frontend Performance, Javascript in general, backbone.js, node.js, NoSQL, so on. Usually we meet monthly.<br/><a href=\"http://www.meetup.com/de/Monster-on-Rails-Web-Development-Meetup-Muenster/\">Visit the website</a></p>'\n    })\n}];\n\nfunction initialize() {\n    var mapOptions = {\n        center: {\n            lat: 50.85034,\n            lng: 4.35171\n        },\n        zoom: 6\n    };\n\n    var mapCanvas = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);\n\n    locations.map(function (location) {\n        var marker = new google.maps.Marker(location);\n        google.maps.event.addListener(marker, 'click', function () {\n            marker.info.open(marker.get('map'), marker);\n        });\n        marker.setMap(mapCanvas);\n    });\n}\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/scripts/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/scripts/main.js?");

/***/ }
/******/ ]);