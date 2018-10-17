(function(){

//header - random quotes
	const quotes = [
		{
			quote: "The purpose of art is washing the dust of daily life off our souls.",
			author: "Pablo Picasso"
		},
		{
			quote: "A picture is a poem without words.",
			author: "Horace"
		},
		{
			quote: "The work of art is a scream of freedom.",
			author: "Christo"
		},
		{
			quote: "The art of a people is a true mirror of their minds.",
			author: "Jawaharlal Nehru"
		},
		{
			quote: "Painting is self-discovery. Every good artist paints what he is.",
			author: "Jackson Pollock"
		}
	];

	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	$('#quote').text(randomQuote.quote);
	$('#author').text(randomQuote.author);

//timeline
	const ART_PERIODS = [
		{
			name: 'impressionism',
			time: ' 1874-1886',
			artist: 'Claude Monet',
			piece: 'Impression, soleil levant',
			date: '1872',
			image: './assets/img/tile_10.jpg'
		},
		{
			name: 'postimpressionism',
			time: '1886-1905',
			artist: 'Vincent van Gogh',
			piece: 'Wheat Field with Cypresses',
			date: '1889',
			image: './assets/img/tile_7.jpg'
		}
	];

//GAME//
	const tiles_total = 32;
	const tiles_row = 8;
	var tiles = [];
	var tiles_taken = [];
	var canTake = true;
	var tiles_pairs = 0;
	const BACKGROUND_PATH = './assets/img/';
	const backgrounds = [
		BACKGROUND_PATH + 'tile_1.jpg',
		BACKGROUND_PATH + 'tile_2.jpg',
		BACKGROUND_PATH + 'tile_3.jpg',
		BACKGROUND_PATH + 'tile_4.jpg',
		BACKGROUND_PATH + 'tile_5.jpg',
		BACKGROUND_PATH + 'tile_6.jpg',
		BACKGROUND_PATH + 'tile_7.jpg',
		BACKGROUND_PATH + 'tile_8.jpg',
		BACKGROUND_PATH + 'tile_9.jpg',
		BACKGROUND_PATH + 'tile_10.jpg',
		BACKGROUND_PATH + 'tile_11.jpg',
		BACKGROUND_PATH + 'tile_12.jpg',
		BACKGROUND_PATH + 'tile_13.jpg',
		BACKGROUND_PATH + 'tile_14.jpg',
		BACKGROUND_PATH + 'tile_15.jpg',
		BACKGROUND_PATH + 'tile_16.jpg'
	];

	function startGame() {

		var board = $('#board').empty();
		tiles = [];
		tiles_taken = [];
		canTake = true;
		tiles_pairs = 0;

		for (var i=0; i<tiles_total; i++) {
			tiles.push(Math.floor(i/2));
		}

		for (var i=tiles_total-1; i>0; i--) {
			var swap = Math.floor(Math.random()*i);
			var tmp = tiles[i];
			tiles[i] = tiles[swap];
			tiles[swap] = tmp;
		}

		for (var i=0; i<tiles_total; i++) {
			var tile = $('<div class="tile"></div>');
			board.append(tile);
			tile.data('cardType',tiles[i]);
			tile.data('index', i);
			tile.css({
				left : 15+(tile.width()+15)*(i%tiles_row)
			});
			tile.css({
				top : 15+(tile.height()+15)*(Math.floor(i/tiles_row))
			});
			tile.bind('click',function() {clickTheTile($(this))});
		}
	}

	function clickTheTile(element) {

		if (canTake) {
			if (!tiles_taken[0] || (tiles_taken[0].data('index') !== element.data('index'))) {
				tiles_taken.push(element);
				console.log(tiles_taken);
				element.css({'background' : 'url('+backgrounds[element.data('cardType')]+')'});
			}

			if (tiles_taken.length === 2) {
				canTake = false;
				if (tiles_taken[0].data('cardType') === tiles_taken[1].data('cardType')) {
					window.setTimeout(function() {
						removeTiles();
					}, 500);
				} else {
					window.setTimeout(function() {
						resetTiles();
					}, 700);
				}
			}
		}
	}

	function removeTiles() {
		tiles_taken[0].fadeOut(function(){
			$(this).remove();
		});

		tiles_taken[1].fadeOut(function(){
			$(this).remove();
			tiles_pairs++
			if (tiles_pairs >= tiles_total / 2) {
				showTimeline();
			}

			canTake=true;
			tiles_taken = new Array();
		});
	}

	function resetTiles() {
		$.each(tiles_taken, function() {
			$(this).css({'background' : 'url(' + BACKGROUND_PATH + 'rsz_cover.jpg)'});
		});
		canTake = true;
		tiles_taken = new Array();
	}

	function showTimeline() {
		$('#timeline').toggleClass('hidden');
		$('#board').toggleClass('hidden');
		$('header').toggleClass('hidden');
		createPeriodLines();
	}

	function createPeriodLines() {
		window.setTimeout(function() {
			$('#period').toggleClass('hidden');
		}, 1000);
	}

	$(document).ready(function() {
		startGame();
	});

})();
