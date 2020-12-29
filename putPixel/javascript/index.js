var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
var data = pixels.data;
for (var i=0; i<data.length; i+=4) {   
    data[i]   = 0;
    data[i+1] = 0;
    data[i+2] = 0;
    data[i+3] = 255;
}
ctx.putImageData(pixels, 0,0);

console.log("did!!");
