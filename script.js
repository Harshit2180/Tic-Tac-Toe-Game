const AllBoxes = document.querySelectorAll(".boxes");
const message = document.querySelector(".resulttext");
const ResetBtn = document.querySelector(".resetbutton");
const TurnTracker = document.querySelector(".initialTurn");
const WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

const EnableButtons = () => {
    for (let box of AllBoxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const ResetGame = () => {
    turnO = true;
    EnableButtons();
    message.classList.add("hide");
    TurnTracker.innerText = "O's Turn";
    count = 0;
}

const DisableButtons = () => {
    for (let box of AllBoxes) {
        box.disabled = true;
    }
}

const ShowWinner = (winner) => {
    message.innerText = `${winner} is the Winner!`;
    message.classList.remove("hide");
    DisableButtons();
}

const CheckWinner = () => {
    for (let pattern of WinPatterns) {
        let Pos1 = AllBoxes[pattern[0]].innerText;
        let Pos2 = AllBoxes[pattern[1]].innerText;
        let Pos3 = AllBoxes[pattern[2]].innerText;

        if (Pos1 != "" && Pos2 != "" && Pos3 != "") {
            if (Pos1 === Pos2 && Pos2 === Pos3) {
                ShowWinner(Pos1);
                return;
            }
        }
    }

    if (count === 9) {
        message.innerText = "Game Draw";
        message.classList.remove("hide");
        DisableButtons();
    }
}

let turnO = true;
let count = 0;
AllBoxes.forEach((box) => {
    // console.log(AllBoxes);
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            TurnTracker.innerText = "X's Turn";
            turnO = false;
            // count++;
        }
        else {
            box.innerText = "X"
            TurnTracker.innerText = "O's Turn";
            turnO = true;
            // count++;
        }
        count++;
        box.disabled = true;
        // console.log(count);
        CheckWinner();
    })
})

ResetBtn.addEventListener("click", ResetGame);