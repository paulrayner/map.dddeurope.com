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

	eval("'use strict';\n\nfunction initialize() {\n    var mapOptions = {\n        center: {\n            lat: 50.85034,\n            lng: 4.35171\n        },\n        zoom: 6\n    };\n\n    var mapCanvas = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);\n\n    locations.map(function (location) {\n        var marker = new google.maps.Marker(location);\n        google.maps.event.addListener(marker, 'click', function () {\n            marker.info.open(marker.get('map'), marker);\n        });\n        marker.setMap(mapCanvas);\n    });\n}\n\ngoogle.maps.event.addDomListener(window, 'load', initialize);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/scripts/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/scripts/main.js?");

/***/ }
/******/ ]);