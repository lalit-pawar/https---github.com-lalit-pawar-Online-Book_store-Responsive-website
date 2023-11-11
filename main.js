window.onscroll  = () => {

    if(window.scrollY > 80){

        document.querySelector('.header .header2 ').classList.add('active');
    }
    else{

        document.querySelector('.header .header2 ').classList.remove('active');
    }
}

searchform =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() => {

    searchform.classList.toggle('active')
}



let loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick =() => {

      loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick =() => {

    loginform.classList.remove('active');
}









window.onload  = () => {


    searchform.classList.remove('active')

    if(window.scrollY > 80){

        document.querySelector('..header .header2 ').classList.add('active');
    }
    else{

        document.querySelector('..header .header2 ').classList.remove('active');
    }
}

 /****************  Home Slider ******************/

var swiper = new Swiper(".plant-slider", {
    loop: true,
    centerSlides:true,
    autoplay:{
        delay:650,
        disableOnIntercation: false,
      },
    breakpoints :{
      0:{
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

   /**************** Featured Slider ******************/


   var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centerSlides:true,
    autoplay:{
        delay:950,
        disableOnIntercation: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints :{
      0:{
        slidesPerView: 1,
        
      },
      450:{
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });


  /*************  Arrivals Slider ***********/

  
  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centerSlides:true,
    autoplay:{
        delay:500,
        disableOnIntercation: false,
      },
    breakpoints :{
      0:{
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });



  /************* Reviews Slider ***********/

  
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop: true,
    centerSlides:true,
    autoplay:{
        delay:500,
        disableOnIntercation: false,
      },
    breakpoints :{
      0:{
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
      1200: {
        slidesPerView: 4,
        
      },
    },
  });