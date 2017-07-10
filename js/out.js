/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    var tiles_total = 32;
    var tiles_row = 8;
    var tiles = [];
    var tiles_taken = [];
    var canTake = true;
    var tiles_pairs = 0;
    var backgrounds = ['./images/tile_1.jpg', './images/tile_2.jpg', './images/tile_3.jpg', './images/tile_4.jpg', './images/tile_5.jpg', './images/tile_6.jpg', './images/tile_7.jpg', './images/tile_8.jpg', './images/tile_9.jpg', './images/tile_10.jpg', './images/tile_11.jpg', './images/tile_12.jpg', './images/tile_13.jpg', './images/tile_14.jpg', './images/tile_15.jpg', './images/tile_16.jpg'];

    function startGame() {

        var board = $('#board').empty();
        tiles = [];
        tiles_taken = [];
        canTake = true;
        tiles_pairs = 0;

        for (var i = 0; i < tiles_total; i++) {
            tiles.push(Math.floor(i / 2));
        }
        console.log(tiles);

        for (var i = tiles_total - 1; i > 0; i--) {
            var swap = Math.floor(Math.random() * i);
            var tmp = tiles[i];
            tiles[i] = tiles[swap];
            tiles[swap] = tmp;
        }

        for (var i = 0; i < tiles_total; i++) {
            var tile = $('<div class="tile"></div>');
            board.append(tile);
            tile.data('cardType', tiles[i]);
            tile.data('index', i);
            tile.css({
                left: 15 + (tile.width() + 15) * (i % tiles_row)
            });
            tile.css({
                top: 15 + (tile.height() + 15) * Math.floor(i / tiles_row)
            });
            tile.bind('click', function () {
                clickTheTile($(this));
            });
        }
    }

    function clickTheTile(element) {
        console.log(element.data('cardType') + "clicked");

        if (canTake) {
            if (!tiles_taken[0] || tiles_taken[0].data('index') != element.data('index')) {
                tiles_taken.push(element);
                console.log(tiles_taken);
                element.css({ 'background': 'url(' + backgrounds[element.data('cardType')] + ')' });
            }

            if (tiles_taken.length == 2) {
                canTake = false;
                if (tiles_taken[0].data('cardType') == tiles_taken[1].data('cardType')) {
                    window.setTimeout(function () {
                        removeTiles();
                    }, 500);
                } else {
                    window.setTimeout(function () {
                        resetTiles();
                    }, 700);
                }
            }
        }
    }

    function removeTiles() {
        tiles_taken[0].fadeOut(function () {
            $(this).remove();
        });

        tiles_taken[1].fadeOut(function () {
            $(this).remove();

            tiles_pairs++;
            if (tiles_pairs >= tiles_total / 2) {
                $('#timeline').toggleClass('hidden');
                $('#board').toggleClass('hidden');
                $('header').toggleClass('hidden');
            }

            canTake = true;
            tiles_taken = new Array();
        });
    }

    function resetTiles() {
        tiles_taken[0].css({ "background": "url(./images/rsz_cover.jpg)" });
        tiles_taken[1].css({ "background": "url(./images/rsz_cover.jpg)" });

        canTake = true;
        tiles_taken = new Array();
    }

    $(document).ready(function () {
        startGame();
    });
})();

/***/ })
/******/ ]);