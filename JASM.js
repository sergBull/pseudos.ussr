var MemSector = window.localStorage;

var Std = {
	add: function (r, a, b) {
		addDataToMemSector(r, a + b);
	},
	div: function (r, a, b) {
		addDataToMemSector(r, a / b);
	},
	or: function (r, a, b) {
		addDataToMemSector(r, a | b);
	},
	sub: function (r, a, b) {
		addDataToMemSector(r, a - b);
	}
}

function addDataToMemSector(dn, dv) {
	MemSector.setItem(dn, dv);
}

function clearMemSector() {
	MemSector.clear();
}

function createLabel(name) {
	var cmdList = addDataToMemSector(name, []);
}

function createRegister(i) {
	if (i >= 0 && i <= 12) {
		addDataToMemSector("r" + i, 0);
	}
}

function deleteDataFromMemSctor(dn) {
	MemSector.removeItem(dn);
}

function getDataFromMemSctor(dn) {
	MemSector.getItem(dn);
}

function getKeyFromMemSector(name) {
	return Object.keys(MemSector);
}

function parseCode(text) {
	var cmds = text.split("\n");
	
	for (var i = 0; i < cmds.length; i++) {
		var comment = /^;(.*)/;
		var digit = /(-)\d*\.\d*/;
		var eol = /,/;
		var label = /(\w+|_)\d*:/;
		var str = /"(.*)/";
		var whitespace = /\s+|\t+|\v+/;
		var word = /[a-zA-Z][0-9]/;
		
		var obj = cmds[i].split("");
		
		if (label.expr(obj[0])) {
			createLabel(label.replace(":", ""));
		}
		
		if (word.expr(obj[0])) {
			switch (obj[0]) {
				case "mov": {
					var a = getKeyFromMemSection(word.expr(obj[1]));
					var b = getDataFromMemSection(word.expr(obj[2]));
					
					deleteDataFromMemSector(a);
					addDataToMemSector(a, b);
					
					alert(a);
				}
			}
		}
	}
}

function pushToLabel(lbl, val) {
	var stack = getDataFromMemSector(lbl);
	
	stack.push(val);
}
