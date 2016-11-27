var globalVariable = 'This is a global variable'

function globalFunction() {
	var localVariable = 'This is a local variable'

	console.log('Visit global/local variable')
	console.log(globalVariable)
	console.log(localVariable)

	globalVariable = 'This is changed variable'
	console.log(globalVariable)

	function localFuction() {
		var innerLocalVariable = 'This is inner local variable' 

		console.log('Visit global/local/innerLocal variable')
		console.log(globalVariable)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}

	localFuction ()
}

globalFunction() 	