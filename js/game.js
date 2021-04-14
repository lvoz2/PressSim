function load() {
	location.replace("https://lvoz2.github.io/PressSim/#pressure_creation")
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
		money = money + researchpointsToIncreaseBy;
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
load()
