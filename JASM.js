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
	var blocks = text.split("<")[1];
	blocks = blocks.split(">")[0];
	blocks = blocks.split(";");
	
	for (var i = 0; i < blocks.length; i++) {
		document.write(blocks[i]);
	}
}

function pushToLabel(lbl, val) {
	var stack = getDataFromMemSector(lbl);
	
	stack.push(val);
}
