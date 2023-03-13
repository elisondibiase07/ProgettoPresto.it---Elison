
fetch('./annunci.json').then((response)=> response.json()).then((data) => {

    let radioWrapper = document.querySelector('#radioWrapper');

function radioCreate(){

let categories = data.map((annuncio) => annuncio.category);
console.log((categories));

let categoriaUnica = Array.from(new Set (categories)) ;

categoriaUnica.forEach((category)=>{

let div = document.createElement('div');
div.classList.add('form-check');
div.innerHTML = `
<input class="form-check-input" type="radio" name="categories" id="${category}">
 <label class="form-check-label" for="${category}">
${category}
</label>
`


radioWrapper.appendChild(div);

})


}


});

