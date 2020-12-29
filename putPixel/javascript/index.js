var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
var data = pixels.data;
data[0]   = 255;
data[1] = 0;
data[2] = 0;
data[3] = 255;
ctx.putImageData(pixels, 0,0);
