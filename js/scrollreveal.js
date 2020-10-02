const Sr = ScrollReveal()


var nodeArray = [
	document.querySelector('.masthead-subheading'),
	document.querySelector('.masthead-heading'),
	document.querySelector('.services'),
	document.querySelector('.portfolio'),
	document.querySelector('.about'),
	document.querySelector('.Amazing'),
	document.querySelector('.teamPerson')

]

Sr.reveal(nodeArray,{
	delay: 100,
	scale: 1.95,
	duration: 1500,
	reset: true
})

Sr.reveal('.logo',{
	delay: 100,
	distance: '100px',
	duration: 1500,
	reset: true
})

Sr.reveal('.firstPortfolio',{
	delay: 100,
	distance: '-200px',
	duration: 1500,
	reset: true
})

Sr.reveal('.secondPortfolio',{
	distance: '200px',
	duration: 1500,
	reset: true
})

Sr.reveal('.firstAbout',{
	origin: 'left',
	distance: '300px',
	duration: 1500,
	reset: true
})

Sr.reveal('.secondAbout',{
	origin: 'rigth',
	distance: '300px',
	duration: 1500,
	reset: true
})

Sr.reveal('.thirdAbout',{
	origin: 'left',
	distance: '300px',
	duration: 1500,
	reset: true
})

Sr.reveal('.fourthAbout',{
	origin: 'rigth',
	distance: '300px',
	duration: 1500,
	reset: true
})

Sr.reveal('.fifthAbout',{
	origin: 'bottom',
	distance: '100px',
	duration: 1500,
	reset: true
})








