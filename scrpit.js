const buttonBlock = document.querySelector('.footerMenu_arrow');
    buttonBlock.addEventListener('click', function()  
    {
  const section = document.querySelector('.windows');
  section.classList.toggle('windowsHeight') 
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
  