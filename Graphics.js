var Graphics = function() {
	var key = {};
	
	function private() {
		var obj = {};
		
		return function(testkey) {
			if (key == testkey) return obj;
			console.log("Error: PrivateVariable;");
			return undefined;
		};
	}
	
	function Graphics() {
		this._ = private();
		this._(key).canvas = document.createElement("canvas");
		
		document.body.appendChild(this._(key).canvas);
		
		this._(key).ctx = this._(key).canvas.getContext("2d");
		
		this.height = 0;
		this.width = 0;
	}
	
	Graphics.prototype.init = function(w, h) {
		this.height = h;
		this.width = w;
		
		this._(key).canvas.height = this.height;
		this._(key).canvas.width = this.width;
	};
	
	Graphics.prototype.setClearColor = function(rgb) {
		var r = (rgb >> 16) & 0xFF;
		var g = (rgb >> 8) & 0xFF;
		var b = rgb & 0xFF;
		
		this._(key).ctx.fillRect(0, 0, this.width, this.height);
	};
	
	Graphics.prototype.setPixel = function(x, y, arw, arh, r, g, b) {
		this._(key).ctx.fillStyle = "rgb(" + [ r, g, b ].join(", ") + ")";
		this._(key).ctx.fillRect(x * arw, y * arh, arw, arh);
	};
	
	return Graphics;
}();

var g = new Graphics();
g.init(640, 480);
g.setClearColor(0xFF7F3F);
g.setPixel(0, 0, 1, 1, 255, 255, 255);
