function load() {
	initiateVariables()
}
function buyHands(handsToBuy) {
	if ((handsToBuy * pricePerHand) >= money) {
		hands = hands + handsToBuy;
	}
	if ((handsToBuy * pricePerHand) < money) {
		alert("You do not have enough money to buy that many hands");
	}
}
load()
