/* CHANGE BACKGROUND HEADER */

function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 50) header.classList.add('active-header'); else header.classList.remove('active-header')
  }
  window.addEventListener('scroll', scrollHeader)

/* CAROUSEL */
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  stagePadding: 50,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})