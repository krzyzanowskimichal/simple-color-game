let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.querySelector(".colorDisplay");
const message = document.querySelector(".message");
const h1 = document.querySelector("h1");
const reset = document.querySelector(".reset");
const modeButtons = document.querySelectorAll(".mode")

for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected")
        this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;

        rest()
    })

}

function rest(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    message.textContent = "";

    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";     
            squares[i].style.backgroundColor = colors[i]
        }
        else {
            squares[i].style.display = "none";
        }
    }
}


colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i] 

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        reset.textContent = "Play Again";
    }
    else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
    }
    })
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    const arr = []
        for(let i = 0; i < num; i++){
            arr.push(randomColor())
        }

    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
};

reset.addEventListener("click", function(){
    rest()
});

// easy.addEventListener("click", function(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     message.textContent = "";

//     for(let i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//             else{
//             squares[i].style.display = "none";
//         }
//     }
// });

// hard.addEventListener("click", function(){
//     hard.classList.add("selected");
//     easy.classList.remove("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     message.textContent = ""


//     for(let i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
        
//     };

// })