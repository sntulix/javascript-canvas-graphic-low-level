const width = 640;
const height = 480;
const memory = new WebAssembly.Memory( { initial: 19 } );
var imports = { js: { mem: memory } };

fetch("index.wasm")
    .then( response => response.arrayBuffer() )
    .then( bytes => WebAssembly.compile( bytes ) )
    .then( module => new WebAssembly.Instance( module, imports ) )
    .then(instance => {
	const res = instance.exports.putPixel();
	
	const vram = new Uint8ClampedArray( memory.buffer, 0, width * height * 4 );
	const image = new ImageData( vram, width, height );
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.putImageData( image, 0, 0 );	
    });
