//Sandwich elements

var father = document.getElementById('sandwich-container');
// element before which ingredients will appear
var lastel = document.querySelector('#lastel');

var animIsWorking = false;

//Add buttons
// ingredientToggle(OBJECT)
document.querySelectorAll('input[data-ingredient]').forEach(el => { el.addEventListener("click", function(){ingredientToggle(el.dataset)})});

// Array of ingredients elements
ingredientsArr = [];

function ingredientToggle({ ingredient, type }={}){


    if(type === "add"){
        if(!animIsWorking){
            animIsWorking = true;
            ingredientsArr.push(ingredient);
            console.log(ingredientsArr);
            animIsWorking = false;
        }
    }
    else{
        let tmp = ingredientsArr.lastIndexOf(`${ingredient}`);
        ingredientsArr = ingredientsArr.filter( (ingr, index) => index !== tmp);
        console.log(ingredientsArr);
    }
}

// Function which add element
function addElement(whatElement){

    if(whatElement===cheeses) {var smallValue = "cheese-small"; var value="cheese"; var counter=cheeseCount}
    if(whatElement===meats)  {var smallValue = "meat-small"; var value="meat"; var counter=meatCount}
    if(whatElement===salads) {var smallValue = "salad-small"; var value="salad"; var counter=saladCount}
    if(whatElement===tomatoes) {var smallValue = "tomato-small"; var value="tomato" ;var counter =tomatoCount}

    if(animIsWorking===false)
    {
        // if there is no slice of ingredient
        if(whatElement.length===0){

            animIsWorking = true;
            // creating first element in array
            whatElement[0] = document.createElement('div');
            whatElement[0].setAttribute('class', smallValue);
            father.insertBefore(whatElement[0], lastel);


            //this function is made for transition effect
            setTimeout(function(){
                whatElement[0].removeAttribute('class');
                whatElement[0].setAttribute('class', value);
                if(whatElement===cheeses){cheeseCount++}
                else if(whatElement===meats){meatCount++}
                else if(whatElement===salads){saladCount++}
                else if(whatElement===tomatoes){tomatoCount++}
                animIsWorking=false;
            }, 500);
        }

    else{
            animIsWorking = true;
            //from the last element in array to +1

            for (i = whatElement.length; i < counter; i++) {

                //adding an element
                whatElement[i] = document.createElement('div');
                whatElement[i].setAttribute('class', smallValue);

                //insert before last element
                father.insertBefore(whatElement[i], lastel);


            }
            // this is 1 greater from last element in array, because of adding next element
            if(whatElement===cheeses){cheeseCount++}
            else if(whatElement===meats){meatCount++}
            else if(whatElement===salads){saladCount++}
            else if(whatElement===tomatoes){tomatoCount++}

            setTimeout(function () {
                //length-1 = last element in array
                whatElement[whatElement.length - 1].removeAttribute('class');
                whatElement[whatElement.length - 1].setAttribute('class', value);
                animIsWorking = false;
            }, 500);
        }



    }

}

function removeElement(whatElement){

    if(whatElement==='cheese') {var smallValue = "cheese-small"; var value="cheese"; var counter=cheeseCount}
    else if(whatElement==='meat')  {var smallValue = "meat-small"; var value="meat"; var counter=meatCount}
    else if(whatElement==='salad') {var smallValue = "salad-small"; var value="salad"; var counter=saladCount}
    else if(whatElement==='tomato') {var smallValue = "tomato-small"; var value="tomato" ;var counter =tomatoCount}

    //if there is any slice of ingredient
    if(whatElement.length !==0){

    // Taking a NodeList of div with value class
    let elementsNodeList = document.querySelectorAll(`div .${value}`);

    //Nodelist -> Array
    let elementsArray = [...elementsNodeList];

    //taking last element of Array
    elementsArray[elementsArray.length-1].setAttribute('class',smallValue);

    setTimeout(function(){
        father.removeChild(elementsArray[elementsArray.length-1]);
    },500);


    //miejsce na element jest teraz o jeden w dol
        if(whatElement===cheeses){cheeseCount--}
        else if(whatElement===meats){meatCount--}
        else if(whatElement===salads){saladCount--}
        else if(whatElement===tomatoes){tomatoCount--}

    //ingredient slices are now 1 less
    whatElement.length = whatElement.length-1;
    }
}


