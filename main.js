'use strict';

// navbar item click scrolling
const navbarMenu = document.querySelector('.navbar__menu');
const navbarItem = document.querySelectorAll('.navbar__menu > li');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
	navbarMenu.classList.remove('navbar-open');
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });

  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.remove('active');
    target.classList.add('active');
  }
});

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('navbar-open');
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
      e.target.classList.add('album-active');
    }
  });
}
document.getElementById('album-tab1').classList.add('album-open');


// video category filter
const videoBtnContainer = document.querySelector('.video__categories');
const videoContentContainer = document.querySelector('.video__items');
const videoItems = document.querySelectorAll('.video__item');
videoBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const videoSelec = document.querySelector('.video__btn.video__selected');
  videoSelec.classList.remove('video__selected');
	const videoTarget = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	videoTarget.classList.add('video__selected');

	videoContentContainer.classList.add('video__ani-out');
	setTimeout(() => {
		videoItems.forEach((item) => {
			if (filter === '*' || filter === item.dataset.type) {
				item.classList.remove('invisible')
			} else {
				item.classList.add('invisible');
			}
		});
		videoContentContainer.classList.remove('video__ani-out')
	}, 200);
});
