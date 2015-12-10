/**
 * Created by snowsolf(snowsolf@hotmail.com) on 2015/12/10.
 */

/**
 * 默认中心坐标
 */
var x = 200;
var y = 200;
window.onload = function() {
	var canvas = document.getElementById('canvas');
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	x = document.body.clientWidth / 2;
	y = document.body.clientHeight / 2;

	var ctx = canvas.getContext("2d");

}