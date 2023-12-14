console.log("Hello, World!");

const sketch = document.querySelector("#sketch");

let gridDim = 16;
createSketch(gridDim);

const newSketch = document.querySelector(".newSketch");
newSketch.addEventListener("click", () => {
  let inputGridDim = Number(
    prompt("Please input the number of squares per side for the new sketch:")
  );
  if (isNaN(inputGridDim) || inputGridDim < 10 || inputGridDim > 100) {
    alert("Please input a number between 10 and 100");
  } else {
    gridDim = inputGridDim;
    removeAllChildren(sketch);
    createSketch(gridDim);
    // console.log(inputGridDim);
    // console.log(typeof inputGridDim);
  }
});

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

function changeGridColor(grid) {
  grid.style.backgroundColor = "lightgreen";
}

function createSketch(gridDim) {
  const sketchGrids = document.createElement("div");
  sketchGrids.classList.add("sketchGrids");
  for (let i = 0; i < gridDim; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let j = 0; j < gridDim; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.addEventListener("mouseover", () => changeGridColor(grid));
      /**
       * When using addEventListener, you need to pass a function reference as the 2nd argument.
       *
       * for below code:
       * grid.addEventListener("mouseover", changeGridColor(grid));
       *
       * You are actually calling changeGridColor(grid) immediately and passing its return value
       * to the addEventListener method, not the function itself.
       * This is because the parentheses () after changeGridColor(grid) invoke the function immediately.
       * To fix this, you should pass a function reference, not the result of calling the function.
       * You can do this by using an anonymous function or an arrow function as follows:
       * 1.
       * grid.addEventListener("mouseover", function() {changeGridColor(grid);});
       * 2. Using an arrow function as shown in above code
       * In both cases, you are passing a function reference that will be called
       * when the "mouseover" event occurs. This way, the changeGridColor function is not executed immediately;
       * it's only executed when the event occurs.
       */
      gridRow.appendChild(grid);
    }
    sketchGrids.appendChild(gridRow);
  }
  sketch.appendChild(sketchGrids);
}
