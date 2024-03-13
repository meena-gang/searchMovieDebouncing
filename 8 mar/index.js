let container = document.getElementById('container');

let api = `http://www.omdbapi.com/?apikey=40a6c430&`;

let inputField = document.getElementById('movie');

inputField.addEventListener('input',function(){
    deBounce(fetchData, 1000);
})
let timer;

function deBounce(func, delay){
    if(timer){
        clearTimeout(timer);
    }
   timer = setTimeout(() => {
    func();
   }, delay);
}

async function fetchData(){    
    try{

         let res = await fetch(`${api}s=${inputField.value}`);
         let data = await res.json();
         console.log('in a key press',data);
         appendcard(data.Search);

    }
    catch(err){
        console.log(err);
    }
}

function appendcard(data){

    container.innerHTML ="";

    data.forEach(item =>{
        let card = createCard(item);
        container.append(card)
    })

}

function createCard(item){

    let card = document.createElement("div");
    let img = document.createElement("img");
    // let h1 = document.createElement("h1");
    let h3 = document.createElement("h3");

    card.className = "card";
    img.className = "poster";
    h3.className = "title";
    // h1.className = "type";

    img.src= item.Poster;
    h3.innerText = item.Title;
    // h1.innerText = item.Type;

    card.append(img,h3);
    return card;
}