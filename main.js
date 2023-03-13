let navbar = document.querySelector('#navbar');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY ;

    if(scrolled > 0 ){

        navbar.style.height = '80px';

    } else{
  
      navbar.style.height= '120px';
        
    }
});

let confirm = true;

function createInterval(n , el , time){

    let counter = 0 ;
    let interval = setInterval( ()=> {
    
    if(counter < n){
        counter++
        el.innerHTML = counter;
    } else{

        console.log('Adesso mi fermo');
        clearInterval(interval) ;
    }
    
    }, time);

    setTimeout(()=> {
        confirm = true ;

    }, 000);

}




let observer = new IntersectionObserver( (entries)=>{

    entries.forEach((entry) => {

        if(entry.isIntersecting && confirm){
            createInterval(30 , number1 , 40);
            createInterval(50 , number2 , 60);
            confirm = false;
        }
        
    });


} );

observer.observe(number1);




// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   
  });





  let swiperwrapperSecond = document.querySelector('.swiper-wrapperSecond');


let reviews = [
    {user : `Elison `, description : `Bellissimo ` , rank : 5},
    {user : `Debora `, description : `Non male ` , rank : 3},
    {user : `Serena `, description : `Pessimo ` , rank : 1},
]


reviews.forEach((recensione)=> {
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'cust-slide');
    div.innerHTML= `
    <div class="card-review">
    <p class="text-center">${recensione.description}</p>
        <p class="text-center">${recensione.user}</p>
    <div class=" div-icon d-flex justify-content-center star">
        
    </div>
</div>
    
    ` ;
    swiperwrapperSecond.appendChild(div);

}) ;





let stars = document.querySelectorAll('.star');

stars.forEach((star , index)=> {

for(let i = 1 ; i <= reviews[index].rank ; i++){

let icon = document.createElement('i') ;
icon.classList.add('fa-solid`, `fa-star');
star.appendChild(icon);

}

let difference = 5 - reviews[index].rank ;

for(let i = 1 ; i <= difference ; i++){

    let icon = document.createElement('i') ;

    icon.classList.add('fa-regular`, `fa-star');
    star.appendChild(icon);
    
    }

});



// Swiper2

const swiper2 = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });