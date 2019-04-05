// ADDING AND REMOVING CHEESE ELEMENT//

let cheeseAdder = document.getElementById('cheeseAdder');
let father = document.getElementById('sandwich-container');

//Creating a cheeese element//
let cheese = document.createElement('div');
cheese.setAttribute('class', 'cheese-small');

// Function which add cheese
function addCheese(){
        father.appendChild(cheese);

        //this function is made for transition effect
        setTimeout(function(){
            cheese.removeAttribute('class');
            cheese.setAttribute('class', 'cheese');
        }, 500);

}
cheeseAdder.onclick = addCheese;

let cheeseRemover = document.getElementById('cheeseRemover');

function removeCheese(){
    cheese.setAttribute('class','cheese-small');
    setTimeout(function(){
        father.removeChild(cheese);
    },500);
}

cheeseRemover.onclick = removeCheese;



