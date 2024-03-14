let container = document.getElementById('container');

let api = `http://www.themealdb.com/api/json/v1/1/search.php?`;

let inputField = document.getElementById('recipie');
inputField.addEventListener('input',function(){
    throttling(fetchData, 1000);
})

async function fetchData(){
    try{
        let res = await fetch(`${api}s=${inputField.value}`);
        let data = await res.json();
        console.log(data,'fsf');
        appendcard(data.meals);
    }
    catch(err){

    }
}

function throttling(fun,delay){
    let flag = false;//timer is not running

        if(flag==true){
            //if timer is running i will simply return or do nothing
            return;
        }
        fun()
        
        flag =true;//timer is starting
        setTimeout(function(){
            flag =false;
            //timer is end
        },delay)

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
    let p = document.createElement("p");
    let h3 = document.createElement("h3");

    card.className = "card";
    img.className = "poster";
    h3.className = "title";
    p.className = "type";

    img.src= item.strMealThumb;
    h3.innerText = item.strMeal;
    p.innerText = item.strArea;

    card.append(img,h3,p);
    return card;
}

// let throttling1 = throttling(fetchData,1000);
