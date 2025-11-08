const choices = document.querySelectorAll(".img");
let msg = document.querySelector(".msg");
let userwinscore = document.querySelector(".userscore");
let compwinscore = document.querySelector(".compscore");
let userscore = 0;
let compscore = 0;

const gencompno = () => {
    let options = ["paper", "rock", "scissors"];
    let compchoice = Math.floor(Math.random() * 3);
    return options[compchoice];
}


const userwin = (userchoice, computer) => {
    if ((userchoice === "paper" && computer === "rock") || (userchoice === "rock" && computer === "scissors") || (userchoice === "scissors" && computer === "paper")) {
        userscore++;
        userwinscore.innerText = userscore;
        msg.innerText = "YOU WIN!"
        msg.style.backgroundColor = "green";
    }
    else if (userchoice === computer) {
        msg.innerText = "DRAW! PLAY AGAIN"
        msg.style.backgroundColor = "#081b31";
        msg.style.color = "white";
    }
    else {
        compscore++;
        compwinscore.innerText = compscore;
        msg.innerText = "YOU LOSE!"
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice,) => {
    console.log(userchoice);
    const computer = gencompno();
    console.log(computer);

    userwin(userchoice, computer);

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

