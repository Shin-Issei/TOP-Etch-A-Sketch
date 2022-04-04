function out(x) {
  //it gets seriously tiring typing out console.log() everytime....
  return console.log(x);
}

const gridContainer = document.querySelector(".grid-container");
const makeGridBTN = document.querySelector("#makeGrid");
const gridClearBTN = document.querySelector("#clearGrid");

makeGridBTN.addEventListener("click", () => {
  let i = 0;
  while (i < 16*16) {
    Grid();
    i++;
  }
});
gridClearBTN.addEventListener("click", clearGrid);

//Function blantantly ripped off from: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function clearGrid() {
  //Won't work with arguments for some reason...strange...
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  makeGrid(64,64); // Make grid is going to have to take an argument in order to get the proper size.
}

function Grid() {
  function changeNow() {
    newItem.classList.add("grid-item-hover");
  }

  const newItem = document.createElement("div");
  newItem.classList.add("grid-item");
  newItem.addEventListener("mouseover", changeNow);
  gridContainer.appendChild(newItem);
}

function makeGrid() {
  let i = 0;
  while (i < arguments[0] * arguments[1]) {
    Grid();
    i++;
  }
}

/* Grid Testing Ground
  1. Create more divs in the same space. 
  2. 

*/