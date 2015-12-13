/**
 * Created by snowsolf(snowsolf@hotmail.com) on 2015/12/10.
 */

/**
 * 默认斜角值及
 * @type {number}
 */
var half = 9;
var third = 6;
var length = 100;
var pi = Math.PI;
var r = 10;
window.onload = function() {
	var canvas = document.getElementById('canvas');
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;

	var minW = Math.floor(canvas.width / 100);

	half = minW / 6 * 4;
	third = minW / 6 * 3;
	length = minW * 8;
	r = minW / 6 * 5;

	var ctx = canvas.getContext("2d");

	setInterval(function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var date = new Date();
		var hours = date.getHours();
		var first = Math.floor(hours / 10);
		var second = Math.floor(hours % 10);
		drawAll(ctx, first, minW * 10, minW * 16);
		drawAll(ctx, second, minW * 23, minW * 16);
		drawDot(ctx, minW * 35, minW * 20);

		var minutes = date.getMinutes();
		first = Math.floor(minutes / 10);
		second = Math.floor(minutes % 10);
		drawAll(ctx, first, minW * 40, minW * 16);
		drawAll(ctx, second, minW * 53, minW * 16);
		drawDot(ctx, minW * 65, minW * 20);

		var seconds = date.getSeconds();
		first = Math.floor(seconds / 10);
		second = Math.floor(seconds % 10);
		drawAll(ctx, first, minW * 70, minW * 16);
		drawAll(ctx, second, minW * 83, minW * 16);
	}, 50);
};

function drawDot(ctx, x, y) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * pi, true);
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x, y + length, r, 0, 2 * pi, true);
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.stroke();
}

function drawAll(ctx, num, x, y) {
	if(num == 0) {
		drawTop(ctx, x, y - 2);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y);
		drawLeft(ctx, x - 2, y + length + 1);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 1) {
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 2) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y + length + 1);
		drawRight(ctx, x + length + 2, y);
	} else if(num == 3) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 4) {
		drawMiddle(ctx, x, y + length);
		drawLeft(ctx, x - 2, y);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 5) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 6) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y);
		drawLeft(ctx, x - 2, y + length + 1);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 7) {
		drawTop(ctx, x, y - 2);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 8) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y);
		drawLeft(ctx, x - 2, y + length + 1);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	} else if(num == 9) {
		drawTop(ctx, x, y - 2);
		drawMiddle(ctx, x, y + length);
		drawBottom(ctx, x, y + (length * 2) + 2);
		drawLeft(ctx, x - 2, y);
		drawRight(ctx, x + length + 2, y);
		drawRight(ctx, x + length + 2, y + length + 1);
	}
}

function drawTop(ctx, x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + third, y - third);
	ctx.lineTo(x + length - third, y - third);
	ctx.lineTo(x + length, y);
	ctx.lineTo(x + length - (third * 2), y + (third * 2));
	ctx.lineTo(x + (third * 2), y + (third * 2));
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}

function drawMiddle(ctx, x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + half + 2, y + half);
	ctx.lineTo(x + length - half - 2, y + half);
	ctx.lineTo(x + length, y);
	ctx.lineTo(x + length - half - 2, y - half);
	ctx.lineTo(x + half + 2, y - half);
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}

function drawBottom(ctx, x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + third, y + third);
	ctx.lineTo(x + length - third, y + third);
	ctx.lineTo(x + length, y);
	ctx.lineTo(x + length - (third * 2), y - (third * 2));
	ctx.lineTo(x + (third * 2), y - (third * 2));
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}

function drawLeft(ctx, x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x - third, y + third);
	ctx.lineTo(x - third, y + length - third - 1);
	ctx.lineTo(x, y + length - 1);
	ctx.lineTo(x + (third * 2), y + length - (third * 2) - 1);
	ctx.lineTo(x + (third * 2), y + (third * 2));
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}

function drawRight(ctx, x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x - (third * 2), y + (third * 2));
	ctx.lineTo(x - (third * 2), y + length - (third * 2) - 1);
	ctx.lineTo(x, y + length - 1);
	ctx.lineTo(x + third, y + length - third - 1);
	ctx.lineTo(x + third, y + third);
	ctx.closePath();
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.stroke();
}