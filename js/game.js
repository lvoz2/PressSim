function load() {
	location.replace("https://lvoz2.github.io/PressSim/#pressure_creation")
	variables()
	setInterval(update, 10);
	checkAlertify()
	loadSave()
}
function loadSave() {
	save = localStorage.getItem('save');
	save = atob(save);
	save = parseInt(save);
	if (save == 2) {
		var pricePerHandfile = localStorage.getItem('pricePerHand');
		var pricePerKitfile = localStorage.getItem('pricePerKit');
		var pricePerAKitfile = localStorage.getItem('pricePerAKit');
		var pricePerSalespersonfile = localStorage.getItem('pricePerSalesperson');
		var pricePerManagerfile = localStorage.getItem('pricePerManager');
		var pricePerSalespersonrpfile = localStorage.getItem('pricePerSalesperson');
		var moneyfile = localStorage.getItem('money'); 
		var psifile = localStorage.getItem('psi'); 
		var handsfile = localStorage.getItem('hands'); 
		var psipersecfile = localStorage.getItem('psipersec');
		var handMultiplierfile = localStorage.getItem('handMultiplier'); 
		var researchpointcostfile = localStorage.getItem('researchpointcost'); 
		var researchpointsfile = localStorage.getItem('researchpoints'); 
		var moneycostfile = localStorage.getItem('moneycost'); 
		var salespersonfile = localStorage.getItem('salesperson'); 
		var salespersonMultiplierfile = localStorage.getItem('salespersonMultiplier');
		var kitsfile = localStorage.getItem('kits');
		var Akitsfile = localStorage.getItem('Akits');
		var Managersfile = localStorage.getItem('Managers');
		var kitsMultiplierfile = localStorage.getItem('kitsMultiplier');
		pricePerHandfile = atob(pricePerHandfile); 
		pricePerSalespersonfile = atob(pricePerSalespersonfile);
		pricePerManagerfile = atob(pricePerManagerfile);
		pricePerSalespersonrpfile = atob(pricePerSalespersonrpfile);
		pricePerKitfile = atob(pricePerKitfile); 
		pricePerAKitfile = atob(pricePerAKitfile); 
		moneyfile = atob(moneyfile); 
		psifile = atob(psifile); 
		handsfile = atob(handsfile); 
		psipersecfile = atob(psipersecfile); 
		handMultiplierfile = atob(handMultiplierfile); 
		researchpointcostfile = atob(researchpointcostfile); 
		researchpointsfile = atob(researchpointsfile); 
		moneycostfile = atob(moneycostfile); 
		salespersonfile = atob(salespersonfile); 
		salespersonMultiplierfile = atob(salespersonMultiplierfile);
		kitsfile = atob(kitsfile);
		Akitsfile = atob(Akitsfile);
		Managersfile = atob(Managersfile);
		kitsMultiplierfile = atob(kitsMultiplierfile);
		pricePerHand = parseInt(pricePerHandfile); 
		priceKitHand = parseInt(pricePerKitfile); 
		money = parseInt(moneyfile); 
		psi = parseInt(psifile); 
		hands = parseInt(handsfile); 
		psipersec = parseInt(psipersecfile); 
		handMultiplier = parseInt(handMultiplierfile); 
		researchpointcost = parseInt(researchpointcostfile); 
		researchpoints = parseInt(researchpointsfile); 
		moneycost = parseInt(moneycostfile); 
		salesperson = parseInt(salespersonfile); 
		salespersonMultiplier = parseInt(salespersonMultiplierfile);
		kits = parseInt(kitsfile);
		Akits = parseInt(Akitsfile);
		Managers = parseInt(Managersfile);
		kitsMultiplier = parseInt(kitsMultiplierfile);
	}
	if (save != 2) {
	}
	refresh()
}
function gainPsi(psiToIncreaseBy) {
	psi = psi + psiToIncreaseBy;
	refresh()
}
function gainResearch(researchpointsToIncreaseBy) {
	if (psi < (researchpointsToIncreaseBy * researchpointcost)) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if (psi >= (researchpointsToIncreaseBy * researchpointcost)) {
		researchpoints = researchpoints + researchpointsToIncreaseBy;
		psi = psi - (researchpointsToIncreaseBy * researchpointcost);
		
	}
	refresh()
}
function gainCoins(coinsToIncreaseBy) {
	if (researchpoints < (coinsToIncreaseBy * moneycost)) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if (researchpoints >= (coinsToIncreaseBy * moneycost)) {
		money = money + coinsToIncreaseBy;
		researchpoints = researchpoints - (coinsToIncreaseBy * moneycost);
	}
	refresh()
}
function buyHands(handsToBuy) {
	if ((handsToBuy * pricePerHand) > money) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if ((handsToBuy * pricePerHand) <= money) {
		hands = hands + handsToBuy;
		money = money - (handsToBuy * pricePerHand);
	}
	refresh()
}
function buyKits(kitsToBuy) {
	if ((kitsToBuy * pricePerKit) > money) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if ((kitsToBuy * pricePerKit) <= money) {
		kits = kits + kitsToBuy;
		money = money - (kitsToBuy * pricePerKit);
	}
	refresh()
}

function buyAKits(aKitsToBuy) {
	if ((aKitsToBuy * pricePerAKit) > money) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if ((aKitsToBuy * pricePerAKit) <= money) {
		Akits = Akits + aKitsToBuy;
		money = money - (aKitsToBuy * pricePerAKit);
		
	}
	refresh()
}
function buyManager(managersToBuy) {
	if ((managersToBuy * pricePerManager) > money) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if ((managersToBuy * pricePerManager) <= money) {
		Managers = Managers + managersToBuy;
		money = money - (managersToBuy * pricePerManager);
		kits = kits - 5;
	}
	refresh()
}
function buySales(SalespersonToBuy) {
	if ((SalespersonToBuy * pricePerSalesperson) > money) {
		alertify.message("Sorry, but you don't have enough coins to purchase this item. Please generate more coins and try again.");
	}
	if ((SalespersonToBuy * pricePerSalesperson) <= money) {
		salesperson = salesperson + SalespersonToBuy;
		money = money - (SalespersonToBuy * pricePerSalesperson);
		researchpersec = (researchpersec - pricePerSalespersonrp); 
	}
	refresh()
}
function purgeSave() {
	localStorage.clear()
	load()
}
function refresh() {
	psipersec = hands * handMultiplier;
	researchpersec = kits + (Akits * AkitMultiplier) * kitMultiplier;
	psiValue.innerHTML = Math.floor(psi);
	psiPerSec.innerHTML = psipersec;
	researchValue.innerHTML = Math.floor(researchpoints);
	researchPerSec.innerHTML = researchpersec;
	coinspersec = (salesperson * salespersonMultiplier) + (Managers * ManagerMultiplier);
	coinsValue.innerHTML = Math.floor(money);
	coinsPerSec.innerHTML = coinspersec;
	updateSaveFile()
}
function update() {
	gainPsi(psipersec / 100)
	gainResearch(researchpersec / 100)
	gainCoins(coinspersec / 100)
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
	savetoLS('kits', kits);
	savetoLS('Akits', Akits); 
	savetoLS('Managers', Managers); 
	savetoLS('kitMultiplier', kitMultiplier);
	savetoLS('researchpointcost', researchpointcost);
	savetoLS('researchpoints', researchpoints);
	savetoLS('moneycost', moneycost);
	savetoLS('salesperson', salesperson);
	savetoLS('salespersonMultiplier', salespersonMultiplier);
	savetoLS('save', 2);
}
function checkAlertify() {
	if(!alertify.errorAlert){
	  //define a new errorAlert base on alert
	  alertify.dialog('errorAlert',function factory(){
	    return{
		    build:function(){
			var errorHeader = '<h2>PressSim</h2>';
			this.setHeader(errorHeader);
		    }
		}; 
	    },true,'alert');
	}
}
function variables() {
	//Javascript Internal Variables
	window.pricePerHand = 4;
	window.money = 0;
	window.psi = 0;
	window.hands = 0;
	window.psipersec = 0;
	window.researchpersec = 0;
	window.handMultiplier = 1;
	window.researchpointcost = 10;
	window.researchpoints = 0;
	window.moneycost = 1;
	window.kits = 0; 
	window.Akits = 0;
	window.Managers = 0;
	window.pricePerKit = 5;
	window.pricePerAKit = 50;
	window.pricePerManager = 20;
	window.pricePerSalesperson = 5;
	window.pricePerSalespersonrp = 1;
	window.pricePerKitSpeedCost = 10;
	window.kitMultiplier = 1;
	window.AkitMultiplier = 10;
	window.ManagerMultiplier = 10;
	window.salesperson = 0;
	window.salespersonMultiplier = 1;
	window.save = 0;

	//Element Variables
	window.psiValue = document.getElementById("psiValue");
	window.psiPerSec = document.getElementById("psiPerSec");
	window.researchValue = document.getElementById("researchValue");
	window.researchPerSec = document.getElementById("researchPerSec");
	window.coinsValue = document.getElementById("coinsValue"); 
	window.coinsPerSec = document.getElementById("coinsPerSec");
}
load()

