let toggle = document.querySelector(".nav-toggle")
let navigation = document.querySelector('.navbar')

	toggle.onclick = function(){
		navigation.classList.toggle('active')
		toggle.classList.toggle('active')
	}

	function closeNav(){
		navigation.classList.remove('active')
		toggle.classList.remove('active')
	}

	window.addEventListener('scroll', function(){
		let img = document.querySelector('.imgBx')
		let text = document.querySelector('.nameBx')
		let navBack = document.querySelector('.navBack')

		img.classList.toggle('animate', window.scrollY > 90)
		text.classList.toggle('animate', window.scrollY > 180)
		navBack.classList.toggle('active', window.scrollY > 90)
	})

	