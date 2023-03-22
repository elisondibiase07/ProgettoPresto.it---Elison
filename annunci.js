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


fetch('./annunci.json').then((response)=> response.json()).then((data) => {

    data.sort((a,b) => a.price - b.price);


    let radioWrapper = document.querySelector('#radioWrapper');
    let wrapper = document.querySelector('#wrapper-cards');

  function radioCreate(){

     let categories = data.map((annuncio) => annuncio.category);
    

    // let categoriaUnica = [] ;

    // categories.forEach((category)=> {

    //     if( !categoriaUnica.includes(category)){

    //         categoriaUnica.push(category);
    //     }
    // });
    
        let categoriaUnica = Array.from(new Set(categories)); 

        categoriaUnica.forEach((category)=>{
    
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="categories" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
            ` ;
    
    
            radioWrapper.appendChild(div);
        });
    
    // console.log(categoriaUnica);

}

    radioCreate();

    // per troncare le parole troppo lunghe 

    function words(string){
        if(string.length > 20){
            return string.split(' ')[0] + '...' ;
        }else {
            return string;
        }
    }



    function showCards(array){
        wrapper.innerHTML= '';
        array.forEach((annuncio )=>{
        let div = document.createElement('div');
        div.classList.add('card-annunci');
        div.innerHTML = `
        <img src = " ${annuncio.img}" alt ="immagine piatto" class = img-fluid img-card">
        <p class="h3 text-center">${words(annuncio.name)}</p>
        <p class="h4 text-center">${annuncio.category}</p>
        <p class="lead text-center">${annuncio.price} €</p>
        
                
        `;
        
        wrapper.appendChild(div)
        
    });
    
}

    showCards(data);


    let radioButtons = document.querySelectorAll('.form-check-input');

    function filterCategory(array){
        // qui devo ottenere un nuovo array che soddisfi delle condizioni 

        let categoria = Array.from( radioButtons).find( (bottone) => bottone.checked).id ;

        // let arrayNodeList = Array.from(radioButtons);
        // let button = arrayNodeList.find((bottone)=> bottone.checked);
        // let categoria = button.id;

        if(categoria != 'All'){
            let filtered = array.filter((annuncio) => annuncio.category == categoria) ;
            return filtered;

        } else{
            return array;
        }
    }

       
        radioButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{

            setPrice(filterCategory(data));

            globalFilter();
            

        })
    });


    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue') ;

    function setPrice(array){
        let prices = array.map((annuncio)=> annuncio.price);
        prices.sort((a, b)=> a - b);
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;
    }

    setPrice(filterCategory(data));


    function filterByPrice(array){
        let filtered = array.filter( (annuncio)=> +annuncio.price <= priceInput.value );
        return filtered;
    }

    priceInput.addEventListener( 'input' , ()=>{
        priceValue.innerHTML = priceInput.value;
        globalFilter();
    } );


    let wordInput = document.querySelector('#wordInput');
    function filterByWord(array){
        let filtered = array.filter( (annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()) );
        return filtered;
    }

    wordInput.addEventListener('input', ()=>{
        globalFilter();
    })

   
    function globalFilter(){
        let filteredCategory = filterCategory(data); 
        let filteredByPrice = filterByPrice(filteredCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);
    }


});