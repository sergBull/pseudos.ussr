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
		
		document.body.appendChild(this._);
		
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
		
		alert("rgb(" + [ r, g, b ].join(", ") + ")");
	}
	
	return Graphics;
}();

var g = new Graphics();
g.init(240, 320);
g.setCearColor(0xFF7F3F);
