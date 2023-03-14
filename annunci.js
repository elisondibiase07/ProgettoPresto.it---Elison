
fetch('./annunci.json').then((response)=> response.json()).then((data) => {

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
        <p class="h3 text-center">${words(annuncio.name)}</p>
        <p class="h4 text-center">${annuncio.category}</p>
        <p class="lead text-center">${annuncio.price} €</p>
        <img src="${annuncio.img}" alt="immagine piatti">
        
                
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

        } else{
            showCards(data);
        }
    };

       

    let radioButton = document.querySelectorAll('form-check-input');

        radioButton.forEach((button)=>{
        button.addEventListener('click', ( )=>{

            filterCategory(button.id);

        })
    });

});