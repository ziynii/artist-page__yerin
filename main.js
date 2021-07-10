'use strict'

// navbar item click scrolling
const navbarMenu = document.querySelector('.navbar__menu');
const navbarItem = document.querySelectorAll('.navbar__menu > li')
navbarMenu.addEventListener('click', (e) => {
	const target = e.target;
	const link = target.dataset.link;
	if (link == null) {
		return;
	}

	const scrollTo = document.querySelector(link);
	scrollTo.scrollIntoView({behavior: 'smooth'});

	for (let i = 0; i < navbarItem.length; i++) {
		navbarItem[i].classList.remove('active');
		target.classList.add('active')
	}
})

// album tab menu
const albumTargetLink = document.querySelectorAll('.album__button a');
const albumTabContent = document.querySelectorAll('.album__tab-wrap > li');

for (let i = 0; i < albumTargetLink.length; i++) {
	albumTargetLink[i].addEventListener('click', (e) => {
		e.preventDefault();
		let albumOrgTarget = e.target.getAttribute('href');
		let albumTabTarget = albumOrgTarget.replace('#', '');

		for (let j = 0; j < albumTabContent.length; j++) {
			albumTabContent[j].classList.remove('album-open');
		}
		document.getElementById(albumTabTarget).classList.add('album-open');

		for (let x = 0; x < albumTargetLink.length; x++) {
			albumTargetLink[x].classList.remove('album-active');
			e.target.classList.add('album-active')
		}
	});
}
document.getElementById('album-tab1').style.opacity = 1