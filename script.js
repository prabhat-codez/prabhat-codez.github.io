const descriptions = document.querySelector('.typewriter')

let typewriter = new Typewriter(descriptions, {
	loop: true
})

typewriter.typeString('A Lawyer.')
		  .pauseFor(200)
		  .deleteAll()
		  .typeString('An Anti-Colonial Nationalist')
		  .start()