function Pet(words) {
	this.words = words 
	this.speak = function (say) {
		console.log(this.words)
	}
}

function Dog(words) {
	
	Pet.apply(this, [words + ' from apply'])
	// Pet.call(this, words + ' from call')
}

var dog = new Dog('Wang')

dog.speak()

