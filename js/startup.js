function createscript1() {
	var script1 = document.createElement('script')
	script1.src = './external/alertifyjs/alertify.min.js'
	script1.onload = function(){createscript2()}
	document.head.append(script1)
}
function createscript2() {
	var script2 = document.createElement('script')
	script2.src = './js/variables.js'
	script2.onload = function(){createscript3()}
	document.head.append(script2)
}
function createscript3() {
	var script3 = document.createElement('script')
	script3.src = './js/game.js'
	script3.onload = function(){createscript4()}
	document.head.append(script3)
}
function createscript4() {
	var script4 = document.createElement('script')
	script4.src = './external/jquery/jquery-3.6.0.min.js'
	document.head.append(script4)
}
createscript1()
