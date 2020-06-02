var MemSector = window.localStorage;

function addDataToMemSector(dn, dv) {
	MemSector.setItem(dn, dv);
}

function clearMemSector() {
	MemSector.clear();
}

function createRegisterR(i) {
	if (i >= 0 && i <= 15) {
		addDataToMemSector("r" + i);
	}
}

function deleteDataFromMemSctor(dn) {
	MemSector.removeItem(dn);
}

function getDataFromMemSctor(dn) {
	MemSector.getItem(dn);
}

function parseCode(text) {}
