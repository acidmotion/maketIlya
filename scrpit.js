const buttonBlock = document.querySelector('.footerMenu_arrow');
    buttonBlock.addEventListener('click', function()  
    {
  const section = document.querySelector('.cards');
  section.classList.toggle('cardsHeight') 
    buttonBlock.classList.toggle('rotate')
    }
    
  );


  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletSize:20,
    },
  });

  var swiper = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletSize:20,
    },
  });

  let popup = document.getElementById('mypopup'),
      popupToggle = document.getElementById('myBtn'),
      popupToggleTabMob = document.getElementById('myBtnTabMob'),
      popupToggleTabMobDown = document.getElementById('myBtnDowm'),
      popupToggleTabMobDownSmall = document.getElementById('myBtnDowmSmall'),
      popupClose = document.getElementById('close'),
      movePopupOverlay = document.getElementById('movePopupOverlay');

   
    
  popupToggle.addEventListener('click', (event) => {
    popup.style.display="block"   
    movePopupOverlay.classList.remove('overlay--hidden')
    movePopupOverlay.classList.add('overlay--visible')
  })
  
  popupToggleTabMob.onclick = function () {
    popup.style.display="block"
    movePopupOverlay.classList.remove('overlay--hidden')
    movePopupOverlay.classList.add('overlay--visible')
  };

  popupToggleTabMobDown.onclick = function () {
    popup.style.display="block"
    movePopupOverlay.classList.remove('overlay--hidden')
    movePopupOverlay.classList.add('overlay--visible')
  };

  popupToggleTabMobDownSmall.onclick = function () {
    popup.style.display="block"
    movePopupOverlay.classList.remove('overlay--hidden')
    movePopupOverlay.classList.add('overlay--visible')
  };

  popupClose.onclick = function (){
    popup.style.display="none"
    movePopupOverlay.classList.remove('overlay--visible')
    movePopupOverlay.classList.add('overlay--hidden')
  }
  window.onclick = function (e) {
    if (e.target == movePopupOverlay) {  
      popup.style.display="none" 
      console.log(123)    
      movePopupOverlay.classList.remove('overlay--visible')
      movePopupOverlay.classList.add('overlay--hidden')
    }
  };

  let movePopup = document.getElementById('movePopup'),
  movePopupToggle = document.getElementById('movePopupBurger'),
  movePopupClose = document.getElementById('movePopupX'),
  movePopupToggleMob = document.getElementById('movePopupBurgerMob'),
  movePopupOverlayMob = document.getElementById('movePopupOverlayMob');


  movePopupToggle.onclick = function () {
    movePopupOverlayMob.classList.remove('overlayMove--hidden')
    movePopupOverlayMob.classList.add('overlayMove--visible')
    movePopup.style.display="block"
    movePopupToggle.style.display="none"
    movePopupToggleMob.style.display="grid"
    document.body.style.overflow = 'hidden';
    
    
  };
  movePopupClose.onclick = function (){
    movePopup.style.display="none"
    movePopupToggle.style.display="grid"
    movePopupToggleMob.style.display="none"
    movePopupOverlayMob.classList.remove('overlayMove--visible')
    movePopupOverlayMob.classList.add('overlayMove--hidden')
    document.body.style.overflow = '';
    
  }
  
/*

  window.onclick = function (e) {
    if (e.target == movePopupOverlayMob) {  
      movePopup.style.display="none"
      movePopupToggleMob.style.display="none"
      movePopupToggle.style.display="grid"    
      movePopupOverlayMob.classList.remove('overlayMove--visible')
      movePopupOverlayMob.classList.add('overlayMove--hidden')
      
    }
  };

*/

/*
const blocksToRemove = document.querySelectorAll('.move-menu, .header-container__burger-menu_move, .overlayMove');


function removeBlocks() {
  if (window.innerWidth > 1279) {
    blocksToRemove.forEach(block => {
      block.remove();
    });
  }
}

window.addEventListener('resize', removeBlocks);

removeBlocks();
*/
  