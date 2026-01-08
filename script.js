let write = document.getElementById("pencil")
let rainbow = document.getElementById("colors");
let eraser = document.getElementById("erase");
let restart = document.getElementById("reset");
let sizer = document.getElementById("sizer");
let activeTool = "";

function makeGrid(rows, cols) {
    let grid = document.querySelector(".draw");
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;


    for (let i = 0; i < rows * cols; i++) {
        let box = document.createElement("div");
        box.classList.add("addGrid");
        grid.appendChild(box);
    }
}
makeGrid(16, 16);


function chooseSize(size) {
    size = prompt("What size would you like? (16-100)");
    let answer = parseInt(size);
   if (answer > 100 || answer < 16) {
     alert ("Out of range! Make sure its between 16-100");
   } else if (!Number.isInteger(answer)) {
        alert("Invalid. Make sure you enter a number! (10-100)");
   } else {
    let draw = document.querySelector(".draw");
    draw.innerHTML = "";
    makeGrid(answer, answer);
   }
   drawing();
}

function drawing() {
    let boxes = document.querySelectorAll(".addGrid");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            if (activeTool === "pencil") {
                box.style.backgroundColor = "darkGrey";
            } else if (activeTool === "rainbow") {
                box.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 255)}, 
                    ${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)})`;
            } else if (activeTool === "erase") {
                box.style.backgroundColor = "white";
            }
        });
    });
    }


sizer.addEventListener("click", chooseSize);

write.addEventListener("click", function() {
    activeTool = "pencil";
    drawing();
});

rainbow.addEventListener("click",  function () {
  activeTool = "rainbow";
  drawing();
});

eraser.addEventListener("click",  function () {
  activeTool = "erase";
  drawing();
});

restart.addEventListener("click", function() {
   let draw = document.querySelector(".draw");
   draw.innerHTML = "";
   makeGrid(16,16);
   drawing();
});


