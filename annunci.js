
fetch('./annunci.json').then((response)=> response.json()).then((data) => {

    data.sort((a,b) => a.price - b.price);


    let radioWrapper = document.querySelector('#radioWrapper');
    let wrapper = document.querySelector('#wrapper-cards');

  function radioCreate(){

     let categories = data.map((annuncio) => annuncio.category);
    

    let categoriaUnica = [] ;

    categories.forEach((category)=> {

        if( !categoriaUnica.includes(category)){

            categoriaUnica.push(category);
        }
    });
        let categoriaUnic = categoriaUnica.sort(); 

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
        })
    
    console.log(categoriaUnica);





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



    function filterCategory(categoria){
        // qui devo ottenere un nuovo array che soddisfi delle condizioni 

        if(categoria != 'All'){
            let filter = data.filter((annuncio) => annuncio.category == categoria) ;
            showCards(filter);
            console.log(categoria);

        } else{
            showCards(data);
        }
    }

       

    let radioButton = document.querySelectorAll('.form-check-input');

        radioButton.forEach((button)=>{
        button.addEventListener('click', ()=>{

            filterCategory(button.id);

        })
    });


    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue') ;

    function setPrice(){
        let price = data.map((annuncio)=> annuncio.price);
        price.sort((a,b)=> a -b);
        let maxPrice = Math.ceil(price.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.value = maxPrice;
        priceValue.innerHTML = maxPrice;
    }

    setPrice();

    function filterPrice(){

        let filter = data.filter((annuncio)=> +annuncio.price <= priceInput.value);
        showCards(filter);
    }


   priceInput.addEventListener('input',() => {
    priceValue.innerHTML = priceInput.value;
    filterPrice();
   });


   let wordInput = document.querySelector('#wordInput');

   function filterWord(parola){
    let filter = data.filter((annuncio)=> annuncio.name.toLowerCase().includes(parola.toLowerCase()));
    showCards(filter);
   }

   wordInput.addEventListener('input',() => {
    filterWord(wordInput.value);
   })










});