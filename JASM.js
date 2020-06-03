var ColorDepth = 0;
var Colors = {
	cga: [
		0x000000, 0x0000AA, 0x00AA00, 0x00AAAA,
		0xAA0000, 0xAA00AA, 0xAA5500, 0xAAAAAA,
		0x555555, 0x5555FF, 0x55FF55, 0x55FFFF,
		0xFF5555, 0xFF55FF, 0xFF5555, 0xFFFFFF
	],
	currentColor: 0
};
var GraphicalMode = {};
var MemSector = window.localStorage;
var TextMode = {
	textSize: [ 0, 0 ]
};
var VideoModes = [
	0x090, // CGA 40x25x16 8x8 Text
	0x092, // CGA 80x25x16 8x8 Text
	0x092, // CGA 160x100 2x2 Graphical
	0x092, // CGA 160x200 2x1 Graphical
	0x093, // CGA 320x200 1x1 Graphical Palette 1
	0x094, // CGA 320x200 1x1 Graphical Palette 2
	0x095, // CGA 320x200 1x1 Graphical Palette 3
	0x096, // CGA 320x200 1x1 Graphical All Palettes
	0x097, // CGA 640x200 1x1 Graphical Monochrome
	0x098, // CGA 640x200 1x1 Graphial All Palettes
	0x099, // EGA 40x25 8x8 Text
	0x09A, // EGA 80x25 8x14 Text
	0x09B, // EGA 80x43 8x8 Text
	0x09C, // EGA 320x200 Text
	0x09D, // EGA 640x200 Text
	0x09E, // EGA 640x350 Text
	0x09F, // VGA 40x25x16 Text
	0x0A0, // VGA 80x25x2 Text
	0x0A1, // VGA 80x25x16 Text
	0x0A2, // VGA 320x200x4 Graphical
	0x0A3, // VGA 320x200x16 Graphical
	0x0A4, // VGA 320x200x256 Graphical
	0x0A5, // VGA 640x350x2 Graphical
	0x0A6, // VGA 640x350x16 Graphical
	0x0A7, // VGA 640x480x2 Graphical
	0x0A8, // VGA 640x480x16 Graphical
];

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

function getColorDepth(cd) {
	if (cd == 16) {
		Colors.currentColor = Colors.cga[0];
	}
}

function rgb(color) {
	var r = (color >> 16) & 0xFF;
	var g = (color >> 8) & 0xFF;
	var b = color & 0xFF;
	
	return [ r, g, b ];
}

function setBgColor(color) {
	ctx.fillStyle = "rgb(" + rgb(color).join(", ") + ")";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setCurrentColor(color) {
	Colors.currentColor = color;
}

function setVideoMode(mode) {
	if (mode == VideoModes[0]) {
		canvas.height = 200;
		canvas.width = 320;
		
		ColorDepth = 16;
		
		TextMode.textSize[0] = 8;
		TextMode.textSize[1] = 8;
		
		for (var i = 0; i < Colors.cga.length; i++) {
			if (Colors.currentColor != Colors.cga[i]) setCurrentColor(0x000000);
		}
		
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
}

setCurrentColor(Colors.cga[1]);
setVideoMode(0x090);
setBgColor(Colors.currentColor);
