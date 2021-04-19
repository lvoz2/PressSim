function load() {
	location.replace("https://lvoz2.github.io/PressSim/#pressure_creation")
	loadSave()
}
function loadSave() {
	var save = localStorage.getItem('save');
	save = parseInt(save);
	if (save == 2) {
		var pricePerHandfile = localStorage.getItem('pricePerHand');
		var moneyfile = localStorage.getItem('money'); 
		var psifile = localStorage.getItem('psi'); 
		var handsfile = localStorage.getItem('hands'); 
		var psipersecfile = localStorage.getItem('psipersec');
		var handMultiplierfile = localStorage.getItem('handMultipler'); 
		var researchpointcostfile = localStorage.getItem('researchpointcost'); 
		var researchpointsfile = localStorage.getItem('researchpoints'); 
		var moneycostfile = localStorage.getItem('moneycost'); 
		var chemistrykitfile = localStorage.getItem('chemistrykit'); 
		var chemistrykitMultiplierfile = localStorage.getItem('chemistrykitMultiplier'); 
		var salespersonfile = localStorage.getItem('salesperson'); 
		var salespersonMultiplierfile = localStorage.getItem('salespersonMultiplier');
		pricePerHandfile = atob(pricePerHandfile); 
		moneyfile = atob(moneyfile); 
		psifile = atob(psifile); 
		handsfile = atob(handsfile); 
		psipersecfile = atob(psipersecfile); 
		handMultiplierfile = atob(handMultiplierfile); 
		researchpointcostfile = atob(researchpointcostfile); 
		researchpointsfile = atob(researchpointsfile); 
		moneycostfile = atob(moneycostfile); 
		chemistrykitfile = atob(chemistrykitfile); 
		chemistrykitMultiplierfile = atob(chemistrykitMultiplierfile); 
		salespersonfile = atob(salespersonfile); 
		salespersonMultiplierfile = atob(salespersonMultiplierfile);
		pricePerHand = parseInt(pricePerHandfile); 
		money = parseInt(moneyfile); 
		psi = parseInt(psifile); 
		hands = parseInt(handsfile); 
		psipersec = parseInt(psipersecfile); 
		handMultiplier = parseInt(handMultiplierfile); 
		researchpointcost = parseInt(researchpointcostfile); 
		researchpoints = parseInt(researchpointsfile); 
		moneycost = parseInt(moneycostfile); 
		chemistrykit = parseInt(chemistrykitfile); 
		chemistrykitMultiplier = parseInt(chemistrykitMultiplierfile); 
		salesperson = parseInt(salespersonfile); 
		salespersonMultiplier = parseInt(salespersonMultiplierfile);
	}
	if (save!= 2) {
	}
	refresh()
}
function gainPsi(psiToIncreaseBy) {
	psi = psi + psiToIncreaseBy;
	refresh()
}
function gainResearch(researchpointsToIncreaseBy) {
	if (psi < (researchpointsToIncreaseBy * researchpointcost)) {
		functionAlert()
	}
	if (psi >= (researchpointsToIncreaseBy * researchpointcost)) {
		researchpoints = researchpoints + researchpointsToIncreaseBy;
		psi = psi - (researchpointsToIncreaseBy * researchpointcost);
		
	}
	refresh()
}
function gainCoins(coinsToIncreaseBy) {
	if (researchpoints < (coinsToIncreaseBy * moneycost)) {
		functionAlert()
	}
	if (researchpoints >= (coinsToIncreaseBy * moneycost)) {
		money = money + coinsToIncreaseBy;
		researchpoints = researchpoints - (coinsToIncreaseBy * moneycost);
	}
	refresh()
}
function buyHands(handsToBuy) {
	if ((handsToBuy * pricePerHand) <= money) {
		hands = hands + handsToBuy;
	}
	if ((handsToBuy * pricePerHand) > money) {
		functionAlert()
	}
	refresh()
}
function refresh() {
	psipersec = hands * handMultiplier;
	psiValue.innerHTML = psi;
	psiPerSec.innerHTML = psipersec;
	researchpersec = chemistrykit * chemistrykitMultiplier
	researchValue.innerHTML = researchpoints;
	researchPerSec.innerHTML = researchpersec;
	coinspersec = salesperson * salespersonMultiplier
	coinsValue.innerHTML = money;
	coinsPerSec.innerHTML = coinspersec;
}
function functionAlert(msg, myYes) {
	var confirmBox = $("#confirm");
	confirmBox.find(".message").text(msg);
	confirmBox.find(".yes").unbind().click(function() {
		confirmBox.hide();
	});
	confirmBox.find(".yes").click(myYes);
	confirmBox.show();
}
function savetoLS(key, value) {
	var lssave = btoa(value);
	localStorage.setItem(key, lssave);
}
function updateSaveFile() {
	savetoLS('pricePerHand', pricePerHand);
	savetoLS('money', money);
	savetoLS('psi', psi);
	savetoLS('hands', hands);
	savetoLS('psipersec', psipersec);
	savetoLS('handMultiplier', handMultiplier);
	savetoLS('researchpointcost', researchpointcost);
	savetoLS('researchpoints', researchpoints);
	savetoLS('moneycost', moneycost);
	savetoLS('chemistrykit', chemistrykit);
	savetoLS('chemistrykitMultiplier', chemistrykitMultiplier);
	savetoLS('salesperson', salesperson);
	savetoLS('salespersonMultiplier', salespersonMultiplier);
	savetoLS('save', 2);
}
load()
