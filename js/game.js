function load() {
	location.replace("https://lvoz2.github.io/PressSim/#pressure_creation")
	refresh()
}
function gainPsi(psiToIncreaseBy) {
	psi = psi + psiToIncreaseBy;
	refresh()
}
function gainResearch(researchpointsToIncreaseBy) {
	if (psi >= researchpointcost) {
		researchpoints = researchpoints + researchpointsToIncreaseBy;
	}
	if (psi < researchpointcost) {
		functionAlert()
	}
	refresh()
}
function gainCoins(coinsToIncreaseBy) {
	if (researchpoints >= moneycost) {
		money = money + researchpointsToIncreaseBy;
	}
	if (researchpoints < moneycost) {
		functionAlert()
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
