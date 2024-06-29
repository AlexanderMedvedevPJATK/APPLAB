const pricingSwitch = document.getElementsByClassName('switch'),
	  pricingText = document.querySelectorAll('.switch-text'),
	  price = document.querySelectorAll('.price');

function toggle(){
	let itemClass = this.parentNode.className

	for(i = 0; i < pricingSwitch.length; i++){
		pricingSwitch[i].className = 'switch'
	}
	if(itemClass === 'switch'){
		this.parentNode.className = 'switch active';
		price.forEach((e) => {
			e.classList.toggle('visible');
		})
	}
}

pricingText.forEach((el) => {
	el.addEventListener('click', toggle)
})
