// credit: http://himalayev.tumblr.com

var words;
var t = 0;
var width = window.innerWidth,
	height = window.innerHeight;

$(document).ready(function() {
	animate_bg();
	$('body').width(width);
	$('body').height(height);

	$('#wave').load(function() {
		$('#wave').css({
			'position':'absolute',
			'left':width/2-($('#wave').width()/2),
			'top':'40px'

		})
	})

	//init command
	var cmd = $('<div>');
	cmd.attr('id','cmd');
	cmd.appendTo('body');
	cmd.css({
		'top':'200px',
		'font-size':'40px',
		'position':'absolute',
		'width':'100vw',
		'text-align':'center',
		'color':'white',
	})

	$.getJSON("assets/verbs_nouns_preps.json", function(json) {
		$('#loading').hide();
		words = json;	
		update_command()

		//MOUSE MOVE
		$('body').mousemove(function(e){ update_command();})
		document.addEventListener('touchmove', function(e) { update_command();}, false);
	});
})

function update_command() {
	$('#cmd').empty();
	$('#cmd').html(gen_command());
}

function gen_command() {
	var v = words['verbs'],
		n = words['nouns'],
		p = words['preps'];
	return choice(v) + " " + choice(p) + " " + choice(n);
}

function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function animate_bg() {
	color_background();
	t += 1;
	requestAnimationFrame(animate_bg);
}

function color_background() {
	var w0 = 0|Math.sin(t/100)*50;
	var w1 = 0|Math.cos(t/100)*50;
	var r = (w1+60)%256;
	var g = (w1+w0+30)%256;
	var b = (w0+100)%256;
	$('body').css({
		'background':'rgb('+r+','+g+','+b+')'
		});

}




