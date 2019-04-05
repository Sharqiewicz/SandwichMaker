// ADDING AND REMOVING CHEESE ELEMENT//

let cheeseAdder = document.getElementById('cheeseAdder');
let father = document.getElementById('sandwich-container');


let lastel = document.querySelector('#lastel');

// number of cheeses
let cheeseCount = 1;
let cheeses = [];

let animIsWorking = false;

// Function which add cheese
function addCheese(){

    if(animIsWorking===false)
    {
    // if there is no cheese
    if(cheeses.length===0){

        animIsWorking = true;
        // creating first element in array
        cheeses[0] = document.createElement('div');
        cheeses[0].setAttribute('class', 'cheese-small');
        father.insertBefore(cheeses[0], lastel);


        //this function is made for transition effect
        setTimeout(function(){
            cheeses[0].removeAttribute('class');
            cheeses[0].setAttribute('class', 'cheese');
            cheeseCount++;
            animIsWorking=false;
        }, 500);
    }
    else{

        animIsWorking = true;
        //from the last element in array to +1
        for(i=cheeses.length;i<cheeseCount;i++){

            //adding an element
             cheeses[i] = document.createElement('div');
             cheeses[i].setAttribute('class', 'cheese-small');

             //before last cheese slice
            father.insertBefore(cheeses[i], lastel);


        }
        // this is 1 greater from last element in array, because of adding next element
        cheeseCount++;

        setTimeout(function(){
            //length-1 = last element in array
            cheeses[cheeses.length-1].removeAttribute('class');
            cheeses[cheeses.length-1].setAttribute('class', 'cheese');
            animIsWorking=false;
        }, 500);

    }
    }
    else console.log("wait a while");

}

//click on button call this function
cheeseAdder.onclick = addCheese;

// remove button
let cheeseRemover = document.getElementById('cheeseRemover');


function removeCheese(){

    //if there is any slice of cheese
    if(cheeses.length !==0){
    // Taking a NodeList of div with cheeses class
    let cheeseNodeList = document.querySelectorAll('div .cheese');

    //Nodelist -> Array
    let cheeseArray = [...cheeseNodeList];

    //taking last element of Array
    cheeseArray[cheeseArray.length-1].setAttribute('class','cheese-small');

    setTimeout(function(){
        father.removeChild(cheeseArray[cheeseArray.length-1]);
    },500);


    //miejsce na element jest teraz o jeden w dol
    cheeseCount--;

    //cheeses are now 1 less
    cheeses.length = cheeses.length-1;
    }
}

//click on button call this function
cheeseRemover.onclick = removeCheese;




// ADDING AND REMOVING MEAT ELEMENT//

let meatAdder = document.getElementById('meatAdder');

// number of meats
let meatCount = 1;
let meats = [];


// Function which add meat
function addMeat(){

    if(animIsWorking===false) {
        // if there is no meat
        if (meats.length === 0) {

            animIsWorking=true;
            // creating first element in array
            meats[0] = document.createElement('div');
            meats[0].setAttribute('class', 'meat-small');
            father.insertBefore(meats[0], lastel);


            //this function is made for transition effect
            setTimeout(function () {
                meats[0].removeAttribute('class');
                meats[0].setAttribute('class', 'meat');
                meatCount++;
                animIsWorking=false;
            }, 500);
        } else {

            animIsWorking=true;
            //from the last element in array to +1
            for (i = meats.length; i < meatCount; i++) {

                //adding an element
                meats[i] = document.createElement('div');
                meats[i].setAttribute('class', 'meat-small');

                //before last meat slice
                father.insertBefore(meats[i], lastel);


            }
            // this is 1 greater from last element in array, because of adding next element
            meatCount++;

            setTimeout(function () {
                //length-1 = last element in array
                meats[meats.length - 1].removeAttribute('class');
                meats[meats.length - 1].setAttribute('class', 'meat');
                animIsWorking=false;
            }, 500);

        }
    }
    else console.log("wait a while");
}

//click on button call this function
meatAdder.onclick = addMeat;



// remove button
let meatRemover = document.getElementById('meatRemover');


function removeMeat(){

    //if there is any slice of meat
    if(meats.length !==0){
        // Taking a NodeList of div with meat class
        let meatNodeList = document.querySelectorAll('div .meat');

        //Nodelist -> Array
        let meatArray = [...meatNodeList];

        //taking last element of Array
        meatArray[meatArray.length-1].setAttribute('class','meat-small');

        setTimeout(function(){
            father.removeChild(meatArray[meatArray.length-1]);
        },500);

        //miejsce na element jest teraz o jeden w dol
        meatCount--;

        //meats are now 1 less
        meats.length = meats.length-1;
    }
}

//click on button call this function
meatRemover.onclick = removeMeat;


// ADDING AND REMOVING SALAD ELEMENT//

let saladAdder = document.getElementById('saladAdder');

// number of meats
let saladCount = 1;
let salads = [];


// Function which add meat
function addSalad(){

    if(animIsWorking===false){
    // if there is no meat
    if(salads.length===0){

        animIsWorking=true;
        // creating first element in array
        salads[0] = document.createElement('div');
        salads[0].setAttribute('class', 'salad-small');
        father.insertBefore(salads[0], lastel);


        //this function is made for transition effect
        setTimeout(function(){
            salads[0].removeAttribute('class');
            salads[0].setAttribute('class', 'salad');
            saladCount++;
            animIsWorking=false;
        }, 500);
    }
    else{

        animIsWorking=true;
        //from the last element in array to +1
        for(i=salads.length;i<saladCount;i++){

            //adding an element
            salads[i] = document.createElement('div');
            salads[i].setAttribute('class', 'salad-small');

            //before last meat slice
            father.insertBefore(salads[i], lastel);


        }
        // this is 1 greater from last element in array, because of adding next element
        saladCount++;

        setTimeout(function(){
            //length-1 = last element in array
            salads[salads.length-1].removeAttribute('class');
            salads[salads.length-1].setAttribute('class', 'salad');
            animIsWorking=false;
        }, 500);

    }
    }else console.log("wait a while");
}

//click on button call this function
saladAdder.onclick = addSalad;


// remove button
let saladRemover = document.getElementById('saladRemover');


function removeSalad(){

    //if there is any slice of meat
    if(salads.length !==0){
        // Taking a NodeList of div with meat class
        let saladNodeList = document.querySelectorAll('div .salad');

        //Nodelist -> Array
        let saladArray = [...saladNodeList];

        //taking last element of Array
        saladArray[saladArray.length-1].setAttribute('class','salad-small');

        setTimeout(function(){
            father.removeChild(saladArray[saladArray.length-1]);
        },500);

        //miejsce na element jest teraz o jeden w dol
        saladCount--;

        //meats are now 1 less
        salads.length = salads.length-1;
    }
}

//click on button call this function
saladRemover.onclick = removeSalad;



// ADDING AND REMOVING TOMATO ELEMENT//

let tomatoAdder = document.getElementById('tomatoAdder');

// number of meats
let tomatoCount = 1;
let tomatoes = [];


// Function which add meat
function addTomato(){

    if(animIsWorking===false) {
        // if there is no meat
        if (tomatoes.length === 0) {

            animIsWorking=true;
            // creating first element in array
            tomatoes[0] = document.createElement('div');
            tomatoes[0].setAttribute('class', 'tomato-small');
            father.insertBefore(tomatoes[0], lastel);


            //this function is made for transition effect
            setTimeout(function () {
                tomatoes[0].removeAttribute('class');
                tomatoes[0].setAttribute('class', 'tomato');
                tomatoCount++;
                animIsWorking=false;
            }, 500);
        } else {

            animIsWorking=true;
            //from the last element in array to +1
            for (i = tomatoes.length; i < tomatoCount; i++) {

                //adding an element
                tomatoes[i] = document.createElement('div');
                tomatoes[i].setAttribute('class', 'tomato-small');

                //before last meat slice
                father.insertBefore(tomatoes[i], lastel);


            }
            // this is 1 greater from last element in array, because of adding next element
            tomatoCount++;

            setTimeout(function () {
                //length-1 = last element in array
                tomatoes[tomatoes.length - 1].removeAttribute('class');
                tomatoes[tomatoes.length - 1].setAttribute('class', 'tomato');
                animIsWorking=false;
            }, 500);

        }
    }else console.log("wait a while");
}

//click on button call this function
tomatoAdder.onclick = addTomato;


// remove button
let tomatoRemover = document.getElementById('tomatoRemover');


function removeTomato(){

    //if there is any slice of meat
    if(tomatoes.length !==0){
        // Taking a NodeList of div with meat class
        let tomatoNodeList = document.querySelectorAll('div .tomato');

        //Nodelist -> Array
        let tomatoArray = [...tomatoNodeList];

        //taking last element of Array
        tomatoArray[tomatoArray.length-1].setAttribute('class','tomato-small');

        setTimeout(function(){
            father.removeChild(tomatoArray[tomatoArray.length-1]);
        },500);

        //miejsce na element jest teraz o jeden w dol
        tomatoCount--;

        //meats are now 1 less
        tomatoes.length = tomatoes.length-1;
    }
}

//click on button call this function
tomatoRemover.onclick = removeTomato;

