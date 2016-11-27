function learn(something) {
	console.log(something) 
}

function we (callback, something) {
	something += ' haha'
	callback(something)
}

we(learn, 'nodejs')

we(function (something) {
	console.log(something)
}, 'jade')