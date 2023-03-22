// NAVBAR

let navbar = document.querySelector('#navbar');


window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY ;

    if(scrolled > 0 ){

        navbar.style.height = '80px';

    } else{
  
      navbar.style.height= '120px';
        
    }
});

let plus = document.querySelector('.plus');
let circle = document.querySelector('.box-circle');


let chefs = [
    { name : 'Antonino Cannavacciuolo' , description : 'Chef stellato 2010' , url: './media/cannavacciuolo.jpg' },

    { name : 'Carlo Cracco' , description : 'Chef stellato 2012' , url: './media/cracco_portrait.jpg' },

    { name : 'Alessandro Borghese' , description : 'Chef stellato 2008' , url: './media/alessandro borghese.jpg'},

    { name : 'Bruno Barbieri' , description : 'Chef stellato 2006' , url: './media/brunobarbieri.jpg'},
    
];


chefs.forEach((cuoco)=> {

let div = document.createElement ('div');
div.classList.add('.moved');

div.style.backgroundImage = `url(${cuoco.url})`;
circle.appendChild(div);


});



let movedDivs = document.querySelectorAll('.moved');

let check = false;

plus.addEventListener('click', ()=>{
 
    if(check == false){
        plus.style.transform = 'rotate(45deg)';
    movedDivs.forEach((moved, i) => {
        let angle = (360 * i) / movedDivs.length;
        moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;

    });
    
    check = true;
    }else{
        check = false ;
        plus.style.transform = '';
        movedDivs.forEach((moved, i) => {
           
            moved.style.transform = '';
    
    });

}
});