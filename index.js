let nums = [];
let num = 0;
let NUM_OF_PICTURES_TO_PLAY_WITH = 12;
//init
$("#seed").keyup(function() {
	fire();
});

$("#gameMode").change(function() {
	fire();
});

$("#pixnum").keyup(function() {
	fire();
});

let PIX_AVAILABLE = 13233;

$("#seed").val(Math.floor(Math.random() * PIX_AVAILABLE));

fire();

function fire() {
	//get seed for randomizer
	var seed = document.getElementById("seed").value;
	Math.seedrandom(seed.toLowerCase());

	let board = $('#board');
	NUM_OF_PICTURES_TO_PLAY_WITH = $("#pixnum").val() || 12;
	num = Math.floor(Math.random() * NUM_OF_PICTURES_TO_PLAY_WITH);
	nums = [];
	board.empty();

	// get random pix
	while (nums.length < NUM_OF_PICTURES_TO_PLAY_WITH ) {
		let randNum = Math.floor((Math.random() * PIX_AVAILABLE) + 1);
			if ($.inArray(randNum, nums) === -1) {
				nums.push(randNum);
			}
	}

	nums.map(num => {
		board.append('<img src="assets/pix' + num +'.jpg">');	
	});

	$('img').bind('click', function(){
		if($(this).hasClass('tint')) {
			$(this).removeClass('tint');	
		} else {
			$(this).wrap('<figure class="tint red"></figure>');
		}
	    
	});
}

function spyMaster() {
	let board = $('#board');
	board.empty().append('<img src="assets/pix' + nums[num] +'.jpg">');
}