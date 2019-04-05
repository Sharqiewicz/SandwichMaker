// ADDING AND REMOVING CHEESE ELEMENT//

let cheeseAdder = document.getElementById('cheeseAdder');
let father = document.getElementById('sandwich-container');

// number of cheeses
let cheeseCount = 1;
let cheeses = [];


// Function which add cheese
function addCheese(){

    // if there is no cheese
    if(cheeses.length===0){

        // creating first element in array
        cheeses[0] = document.createElement('div');
        cheeses[0].setAttribute('class', 'cheese-small');
        father.appendChild(cheeses[0]);


        //this function is made for transition effect
        setTimeout(function(){
            cheeses[0].removeAttribute('class');
            cheeses[0].setAttribute('class', 'cheese');
            cheeseCount++;
        }, 500);
    }
    else{

        //taking first cheese element
        let cheese1 = document.querySelector('div .cheese')


        //from the last element in array to +1
        for(i=cheeses.length;i<cheeseCount;i++){

            //adding an element
             cheeses[i] = document.createElement('div');
             cheeses[i].setAttribute('class', 'cheese-small');

             //before last cheese slice
            father.insertBefore(cheeses[i], cheese1);


        }
        // this is 1 greater from last element in array, because of adding next element
        cheeseCount++;

        setTimeout(function(){
            //length-1 = last element in array
            cheeses[cheeses.length-1].removeAttribute('class');
            cheeses[cheeses.length-1].setAttribute('class', 'cheese');
        }, 500);

    }

}

//click on button call this function
cheeseAdder.onclick = addCheese;

// remove button
let cheeseRemover = document.getElementById('cheeseRemover');


function removeCheese(){

    //if there is any slice of cheese
    if(father.hasChildNodes()){
    // Taking a NodeList of div with cheeses class
    let cheeseNodeList = document.querySelectorAll('div .cheese')

    //Nodelist -> Array
    let cheeseArray = [...cheeseNodeList];

    //taking first element of Array
    cheeseArray[0].setAttribute('class','cheese-small');

    setTimeout(function(){
        father.removeChild(cheeseArray[0]);
    },500);

    //
        //miejsce na element jest teraz o jeden w dol
    cheeseCount--;

    //cheeses are now 1 less
    cheeses.length = cheeses.length-1;
    }
}

//click on button call this function
cheeseRemover.onclick = removeCheese;



