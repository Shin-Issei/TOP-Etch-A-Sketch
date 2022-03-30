function out(x){ //it gets seriously tiring typing out console.log() everytime....

    return console.log(x);

}

/*
 On MouseOver() >> add class to grid-item object(?) >> It must stay there!!
Remember: if you can do it for one element then doing the same for all is a matter of course!
...the change to the cell must endure even after the mouse has left the cell. 
*/

//What has to happen now is event listeners need to be added to each of the
//for now, just create an element using a button.


const gridContainer = document.querySelector(".grid-container");
const makeGridBTN = document.querySelector("#makeGrid");
const gridClearBTN = document.querySelector("#clearGrid");

makeGridBTN.addEventListener("click", makeGrid)
gridClearBTN.addEventListener("click", clearGrid)


/*
newItem.classList.remove("grid-item"); I might be able to use conditional statements in the Grid() to control
what the clear button does.
*/


//Function blantantly ripped off from: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/

function clearGrid() { //Won't work with arguments for some reason...strange... 
while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
}
makeGrid()
}


function Grid(){

// if (arguments[0]){
// 	out("Hello World!")
// }

function changeNow(){
    newItem.classList.add("grid-item-hover");
}

let newItem = document.createElement("div");
newItem.classList.add("grid-item");
newItem.addEventListener("mouseover", changeNow)
gridContainer.appendChild(newItem);

}


function makeGrid(){
let i = 0;
while (i < 16*16){
    Grid();
    i++;
}
}






