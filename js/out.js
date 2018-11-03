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

	//header - random quotes
	var quotes = [{
		quote: "The purpose of art is washing the dust of daily life off our souls.",
		author: "Pablo Picasso"
	}, {
		quote: "A picture is a poem without words.",
		author: "Horace"
	}, {
		quote: "The work of art is a scream of freedom.",
		author: "Christo"
	}, {
		quote: "The art of a people is a true mirror of their minds.",
		author: "Jawaharlal Nehru"
	}, {
		quote: "Painting is self-discovery. Every good artist paints what he is.",
		author: "Jackson Pollock"
	}];

	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	$('#quote').text(randomQuote.quote);
	$('#author').text(randomQuote.author);

	//timeline
	var ART_PERIODS = [{
		id: 1,
		name: 'renaissance',
		time: ' 1400-1600',
		artist: 'Sandro Botticelii',
		piece: 'Madonna of the Book',
		date: '1480-1483'
	}, {
		id: 2,
		name: 'baroque',
		time: '1600-1710',
		artist: 'Caravaggio',
		piece: 'Judith Beheading Holofernes',
		date: '1599–1602'
	}, {
		id: 3,
		name: 'rococo',
		time: '1720-1790',
		artist: 'Jean-Honoré Fragonard',
		piece: 'The Swing',
		date: '1767'
	}, {
		id: 4,
		name: 'classicism',
		time: '1750‒1800',
		artist: 'Jacques-Louis David',
		piece: 'Oath of the Horatii',
		date: '1784'
	}, {
		id: 5,
		name: 'romanticism',
		time: '1790s-1840s',
		artist: 'Caspar David Friedrich',
		piece: 'The Sunset or Brothers',
		date: '1830-1835'
	}, {
		id: 6,
		name: 'realism',
		time: '1850s',
		artist: 'Jean-François Millet',
		piece: 'The Gleaners',
		date: '1857'
	}, {
		id: 7,
		name: 'impressionism',
		time: ' 1874-1886',
		artist: 'Claude Monet',
		piece: 'Impression, soleil levant',
		date: '1872'
	}, {
		id: 8,
		name: 'postimpressionism',
		time: '1886-1905',
		artist: 'Vincent van Gogh',
		piece: 'Wheat Field with Cypresses',
		date: '1889'
	}, {
		id: 9,
		name: 'symbolism',
		time: 'from 1886',
		artist: 'Hugo Simberg',
		piece: 'The Wounded Angel',
		date: '1903'
	}, {
		id: 10,
		name: 'fauvism',
		time: '1905–1908',
		artist: 'Henri Matisse',
		piece: 'View of Collioure',
		date: '1905'
	}, {
		id: 11,
		name: 'cubism',
		time: '1907-1920',
		artist: 'Pablo Picasso',
		piece: 'Girl with a Mandolin',
		date: '1910'
	}, {
		id: 12,
		name: 'abstract-art',
		time: '1910-1925',
		artist: 'Vassily Kandinsky',
		piece: 'On White II',
		date: '1910'
	}, {
		id: 13,
		name: 'art-déco',
		time: '1919-1939',
		artist: 'Tamara de Lempicka',
		piece: 'The sleeping girl',
		date: '1930'
	}, {
		id: 14,
		name: 'surrealism',
		time: '1924-1953',
		artist: 'Salvador Dalí',
		piece: 'The persistance of memory',
		date: '1931'
	}, {
		id: 15,
		name: 'abstract-expressionism',
		time: '1940s',
		artist: 'Jackson Pollock',
		piece: 'No. 5',
		date: '1948'
	}, {
		id: 16,
		name: 'pop-art',
		time: '1950-1970',
		artist: 'Andy Warhol',
		piece: 'Marilyn Monroe (Marilyn)',
		date: '1967'
	}];

	//GAME//
	var tiles_total = 32;
	var tiles_row = 8;
	var tiles = [];
	var tiles_taken = [];
	var canTake = true;
	var tiles_pairs = 0;
	var BACKGROUND_PATH = './assets/img/';
	var backgrounds = [BACKGROUND_PATH + 'tile_1.jpg', BACKGROUND_PATH + 'tile_2.jpg', BACKGROUND_PATH + 'tile_3.jpg', BACKGROUND_PATH + 'tile_4.jpg', BACKGROUND_PATH + 'tile_5.jpg', BACKGROUND_PATH + 'tile_6.jpg', BACKGROUND_PATH + 'tile_7.jpg', BACKGROUND_PATH + 'tile_8.jpg', BACKGROUND_PATH + 'tile_9.jpg', BACKGROUND_PATH + 'tile_10.jpg', BACKGROUND_PATH + 'tile_11.jpg', BACKGROUND_PATH + 'tile_12.jpg', BACKGROUND_PATH + 'tile_13.jpg', BACKGROUND_PATH + 'tile_14.jpg', BACKGROUND_PATH + 'tile_15.jpg', BACKGROUND_PATH + 'tile_16.jpg'];

	function startGame() {

		var board = $('#board').empty();
		tiles = [];
		tiles_taken = [];
		canTake = true;
		tiles_pairs = 0;

		for (var i = 0; i < tiles_total; i++) {
			tiles.push(Math.floor(i / 2));
		}

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

		if (canTake) {
			if (!tiles_taken[0] || tiles_taken[0].data('index') !== element.data('index')) {
				tiles_taken.push(element);
				console.log(tiles_taken);
				element.css({ 'background': 'url(' + backgrounds[element.data('cardType')] + ')' });
			}

			if (tiles_taken.length === 2) {
				canTake = false;
				if (tiles_taken[0].data('cardType') === tiles_taken[1].data('cardType')) {
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
				showTimeline();
			}

			canTake = true;
			tiles_taken = new Array();
		});
	}

	function resetTiles() {
		$.each(tiles_taken, function () {
			$(this).css({ 'background': 'url(' + BACKGROUND_PATH + 'rsz_cover.jpg)' });
		});
		canTake = true;
		tiles_taken = new Array();
	}

	function showTimeline() {
		$('#timeline').toggleClass('hidden');
		$('#board').toggleClass('hidden');
		$('#reload').toggleClass('hidden');
		createPeriods();
	}

	function createPeriods() {
		ART_PERIODS.forEach(function (period) {
			var name = period.name;
			var time = period.time;
			var artist = period.artist;
			var piece = period.piece;
			var date = period.date;
			var side = 'left';
			if (period.id % 2 === 0) {
				side = 'right';
			}

			var newPeriod = '<div class="art-memo__timeline__period" data-aos="fade-up" data-aos-duration="1500"><div class="art-memo__timeline__period__dot art-memo__timeline__period__dot--' + name + '"></div><div class="art-memo__timeline__period__content art-memo__timeline__period__content--' + side + '"><div class="art-memo__timeline__period__content__main"><div class="art-memo__timeline__period__content__main__name">' + name + '</div><div class="art-memo__timeline__period__content__main__time">' + time + '</div></div><div class="art-memo__timeline__period__content__additional"><div class="art-memo__timeline__period__content__additional__artist">' + artist + '</div><div class="art-memo__timeline__period__content__additional__piece">' + piece + '</div><div class="art-memo__timeline__period__content__additional__date">' + date + '</div></div></div></div>';

			$('#periods').append(newPeriod);
			AOS.init();
		});
	}

	$(document).ready(function () {
		startGame();
	});
})();

/***/ })
/******/ ]);