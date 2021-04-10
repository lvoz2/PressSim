function load() {
	
}
function gainPsi(psiToIncreaseBy) {
	psi = psi + psiToIncreaseBy;
	refresh()
}
function buyHands(handsToBuy) {
	if ((handsToBuy * pricePerHand) <= money) {
		hands = hands + handsToBuy;
	}
	if ((handsToBuy * pricePerHand) > money) {
		location.replace("https://lvoz2.github.io/PressSim/#popup1")
	}
	refresh()
}
function refresh() {
	psipersec = hands * handMultiplier;
	psiValue.innerHTML = psi;
	psiPerSec.innerHTML = psipersec;
}
load()
