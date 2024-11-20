let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#resetbtn");
let NewGamebtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


let resetGame = () => {
    turno = true;
    EnebleBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turno)
        {
            box.innerText = "O";
            turno = false; 

        }
        else{
            box.innerText ="X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

let disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true; 
    }
};
let EnebleBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = ""; 
    }
};


  let ShowWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

  }
  let  checkWinner = () => {
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
              ShowWinner(pos1Val);
            }
        }
    }

};
NewGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);