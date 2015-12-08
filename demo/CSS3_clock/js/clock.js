/**
 * Canvas clock.
 * Created by snowsolf(snowsolf@hotmail.com) on 2015/12/08.
 */

window.onload = function() {
	var canvas = document.getElementById('canvas');
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	x = document.body.clientWidth / 2;
	y = document.body.clientHeight / 2;

	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x, y + 100);
	ctx.lineWidth = 5;

	setInterval(function () {
		ctx.rotate(20*Math.PI/180);
		ctx.stroke();
	}, 50);
};
