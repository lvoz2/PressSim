function createscript1() {
	var script1 = document.createElement('script')
	script1.src = './alertifyjs/alertify.min.js'
	document.head.append(script1)
	setTimeout(createscript2, 100)
}
function createscript2() {
	var script2 = document.createElement('script')
	script2.src = './js/variables.js'
	document.head.append(script2)
	setTimeout(createscript3, 100)
}
function createscript3() {
	var script3 = document.createElement('script')
	script3.src = './js/game.js'
	document.head.append(script3)
}
createscript1()
