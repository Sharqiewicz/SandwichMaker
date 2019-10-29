var father = document.getElementById('sandwich-container');
// element before which ingredients will appear
var lastel = document.querySelector('#lastel');

var animIsWorking = false;

//Add buttons
// ingredientToggle(OBJECT)
document.querySelectorAll('input[data-ingredient]').forEach(el => { el.addEventListener("click", function(){ingredientToggle(el.dataset)})});

// Array of ingredients elements
var ingredientsArr = [];

function ingredientToggle({ ingredient, type }={}){


    if(type === "add"){
        if(!animIsWorking){
            animIsWorking = true;

            let tmp = document.createElement('div');
            tmp.setAttribute('class', `${ingredient}`);
            father.insertBefore(tmp, lastel);

            ingredientsArr.push(tmp);

            animIsWorking = false;
        }
    }
    else{
        var bindex;
        ingredientsArr.forEach((el,index) => { el.className !== ingredient ? true :  bindex = index })
        father.removeChild(ingredientsArr[bindex]);
        ingredientsArr = ingredientsArr.filter((el,index) => index !== bindex);
    }
}