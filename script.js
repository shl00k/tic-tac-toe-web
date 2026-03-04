let boxes = document.querySelectorAll(".markBox");
let reset = document.querySelector("#refresh");
let osTurn = true;
let smbl = document.querySelector("#smbl")
let msg = document.querySelector("#msg")
let body = document.querySelector("body");
let isDraw = true;
let count = 0;

// let o = document.createElement("span");
// let x = document.createElement("span");
// o.setAttribute("src", "./assets/o.svg");
// x.setAttribute("src", "./assets/x.svg");
// o.innerText = "O";
// x.innerText = "X";

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box CLicked");
        if (osTurn) {
            box.innerText = "O";
            smbl.innerText = "X"
            body.style.backgroundColor = "#FF7070"
            box.style.color = "#FF7070"
            osTurn = false;
        } else {
            box.innerText = "X";
            smbl.innerText = "O";
            body.style.backgroundColor = "#7AAACE"
            box.style.color = "#7AAACE"
            osTurn = true;
        }
        count++;
        checkWinner();
        box.disabled = true;
    })
})

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("Winner");
                msg.innerHTML = "'s a Winner";
                smbl.innerText = val1;
                body.style.backgroundColor = "#6CA651";
                boxes.forEach((box) => {
                    box.disabled = true;
                })

                for (let i = 0; i < 9; i++) {
                    if (pattern[0] != i && pattern[1] != i && pattern[2] != i) {
                        boxes[i].style.color = "#BFC9D1";
                    }
                    else{
                        boxes[i].style.color = "#6CA651";
                    }
                }

                isDraw = false;
                break;
            }
        }

        if (count === 9 && isDraw) {
            smbl.innerText = "";
            msg.innerText = "Game is Draw";
            for (let i = 0; i < 9; i++) {
                boxes[i].style.color = "#BFC9D1";
            }
            body.style.backgroundColor = "#BFC9D1";
        }


    }
}

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        smbl.innerText = "O";
        msg.innerText = "'s Turn";
        box.style.color = "#262626"
        body.style.backgroundColor = "#7AAACE";
        osTurn = true;
        count = 0;
        isDraw = true;
    })
})