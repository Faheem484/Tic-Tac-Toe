let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X OR player O

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach ( (box) => {
    box.addEventListener ("click" , () => {
        console.log("Box Clicked");
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;

        }
        box.disabled = true;

        checkWinner();
    } );
} );

const showWinner = (winner) => {
    msg.innerText = `Congratulations you are Winner ${winner}`;
    msgContainer.classList.remove("hide")

}

const disableBtn = () => {
    for (let box of boxes){
        box.disabled= true;
    }
}

const enableBtn = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val){
            if (pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                disableBtn();

            }

        }
    }
}

newGamebtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);
