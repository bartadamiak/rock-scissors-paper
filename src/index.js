//// rules \\\\

const rulesBtn = document.querySelector(".rules-btn");
const rulesClose = document.querySelector(".rules-close");
const rules = document.querySelector(".rules");
const footer = document.querySelector(".footer")

rulesBtn.addEventListener("click", function () {
    rules.classList.remove("hide")
})

rulesClose.addEventListener("click", function () {
    rules.classList.add("hide")
})


//// game \\\\

const icons = document.querySelector(".icons");
const icons2 = document.querySelector(".icons2");

const your = document.querySelector(".your-choice");
const computer = document.querySelector(".computer-choice");
const computerChoice = computer.querySelector(".circle");

const black = document.querySelector(".black")

const reset = document.querySelector(".reset")


const scoreContainer = document.querySelector(".score-box-score");
let score = 0;






const circles = document.querySelectorAll(".circle");





circles.forEach(element => {
    element.addEventListener("click", function () {


        your.firstChild.remove();
        computer.innerHTML = "";




        let blackCircle = document.createElement('div')
        computer.appendChild(blackCircle);
        blackCircle.classList.add('black');

       

        icons.classList.add("hide")
        icons2.classList.remove("hide");

        let choice = element.cloneNode(true);
        your.appendChild(choice);

        rulesBtn.classList.add("hide");
        footer.classList.add("hide")

        setTimeout(function () {

            computer.innerHTML = "";


            let randomItem = circles[Math.floor(Math.random() * circles.length)];
            let choice2 = randomItem.cloneNode(true)
            computer.appendChild(choice2)


            /////// create a text \\\\\\



            if (element.classList.contains("paper") && computer.querySelector(".circle").classList.contains("rock")) {
                score++;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You win";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("paper") && computer.querySelector(".circle").classList.contains("scissors") && score != 0) {
                score--;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You lose";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("paper") && computer.querySelector(".circle").classList.contains("paper")) {
                
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You draw";
                reset.appendChild(winOrLose)
            };

            if (element.classList.contains("rock") && computer.querySelector(".circle").classList.contains("scissors")) {
                score++;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You win";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("rock") && computer.querySelector(".circle").classList.contains("paper") && score != 0) {
                score--;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You lose";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("rock") && computer.querySelector(".circle").classList.contains("rock")) {
                
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You draw";
                reset.appendChild(winOrLose)
            };


            if (element.classList.contains("scissors") && computer.querySelector(".circle").classList.contains("paper")) {
                score++;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You win";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("scissors") && computer.querySelector(".circle").classList.contains("rock") && score != 0) {
                score--;
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You lose";
                reset.appendChild(winOrLose)
            }
            else if (element.classList.contains("scissors") && computer.querySelector(".circle").classList.contains("scissors")) {
                
                let winOrLose = document.createElement('div');
                winOrLose.classList.add("win-or-lose");
                winOrLose.innerText = "You draw";
                reset.appendChild(winOrLose)
            };



            scoreContainer.innerText = score




            



            let resetBtn = document.createElement('div');
            resetBtn.innerText = "Play again";
            resetBtn.classList.add('reset-btn');

            
           
            reset.appendChild(resetBtn);

           


            resetBtn.addEventListener("click", function () {
                icons2.classList.add("hide");
                icons.classList.remove("hide");
                reset.innerHTML = "";
                rulesBtn.classList.remove("hide");
                footer.classList.remove("hide")
            })

        }, 600);





    })



});


