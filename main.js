let navbar = document.querySelector('#navbar');
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY ;

    if(scrolled > 0){
    navbar.style.height = '80px';

    } else{
  
      navbar.style.height= '120px';
        
    }
});

let confirm = true;

function createInterval(n , el , time){

    let counter = 0
    let interval = setInterval( ()=> {
    
    if(counter < n){
        counter++
        el.innerHTML = counter;
    } else{

        clearInterval(interval)
       
    }
    
    }, time);

    // setTimeout(()=> {
    //     confirm = true ;

    // }, 8000);

}




let observer = new IntersectionObserver( (entries)=>{

    entries.forEach((entry) => {

        if(entry.isIntersecting && confirm){
            createInterval(1000 , number1 , 100);
            createInterval(100 , number2 , 1000);
            // confirm = false;
        }
        
    });


} );

observer.observe(number1);