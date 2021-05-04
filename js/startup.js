function createscript1() {
	var script1 = document.createElement('script')
	script1.src = './alertifyjs/alertify.min.js'
	script1.onload = createscript2()
	document.head.append(script1)
}
function createscript2() {
	var script2 = document.createElement('script')
	script2.src = './js/variables.js'
	script2.onload = createscript3()
	document.head.append(script2)
}
function createscript3() {
	var script3 = document.createElement('script')
	script3.src = './js/game.js'
	script3.onload = createscript4()
	document.head.append(script3)
}
function createscript4() {
	var script4 = document.createElement('script')
	script4.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
	document.head.append(script4)
}
createscript1()
