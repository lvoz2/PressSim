function load() {
	location.replace("https://lvoz2.github.io/PressSim/#pressure_creation")
	setInterval(update, 1000);
	loadSave()
}
function loadSave() {
	save = localStorage.getItem('save');
	save = atob(save);
	save = parseInt(save);
	if (save == 2) {
		var pricePerHandfile = localStorage.getItem('pricePerHand');
		var moneyfile = localStorage.getItem('money'); 
		var psifile = localStorage.getItem('psi'); 
		var handsfile = localStorage.getItem('hands'); 
		var psipersecfile = localStorage.getItem('psipersec');
		var handMultiplierfile = localStorage.getItem('handMultiplier'); 
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
function purgeSave() {
	localStorage.clear()
	load()
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
	updateSaveFile()
}
function update() {
	gainPsi(psipersec)
	researchpoints = researchpoints + researchpersec 
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
var angGame = angular.module('game', []);
angGame.controller('gameCtrl', function($scope) {
    $scope.psi = psi;
});
