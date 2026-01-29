
alert("well come our Rock pepar scissor game..")

const choices =document.querySelectorAll(".choice");

let result = document.getElementById("result");

let user_score_para = document.getElementById("user_score");
let computer_score_para = document.getElementById("computer_score");
    
let user_score = 0;
let computer_score = 0;

console.log(user_score_para,computer_score_para);



const  gen_Computer_Choice = () => {
    const computer_option = ["rock", "pepar", "scissor"];
    const randomIndex = Math.floor(Math.random() * computer_option.length);
    return computer_option[randomIndex];
 }

const play_game = (user_choice) =>{
    console.log("User Choice =", user_choice);

    const computer_choices = gen_Computer_Choice ();
    console.log("computer choice = " , computer_choices)

    // const score = score_update ();
    // console.log(score);

    
    if (user_choice === computer_choices){
    document.getElementById("result").innerText = "The game was draw. Play again 🤨🫡..";
    
    }

    else if (user_choice === "rock"){
        if (computer_choices === "scissor"){
            
            user_score++;
            document.getElementById("user_score_para").innerText = user_score;
            document.getElementById("result").innerText = " You win the match 🎉🎊";
            }

        else{
            computer_score++;
            document.getElementById("computer_score_para").innerHTML = computer_score;
            document.getElementById("result").innerText ="You lose the  match 😟😔";
            
        }
    }

    else if (user_choice === "pepar"){
        if (computer_choices === "rock"){
            
            user_score++;
            document.getElementById("user_score_para").innerText = user_score;
            document.getElementById("result").innerText = " You win the match 🎉🎊";
        }
        else{
            computer_score++;
            document.getElementById("computer_score_para").innerHTML = computer_score;
            document.getElementById("result").innerText ="You lose the match 😟😔";
        }
    }

    else if (user_choice === "scissor"){
        if (computer_choices === "pepar"){
            user_score++;
            document.getElementById("user_score_para").innerText = user_score;
            document.getElementById("result").innerText = " You win the match 🎉🎊";
        }
    
        else{
            computer_score++;
            document.getElementById("computer_score_para").innerHTML = computer_score;
            document.getElementById("result").innerText ="You lose the match 😟😔";
        }

    }


}



choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const user_choice  = choice.getAttribute("id");
        play_game(user_choice);
        
    });
});

console.log(user_score);


// const score_update = () =>{
//     if (result === "You win the match 🎉🎊"){
//         user_score++
//         document.getElementById("user_score_para").innerText = "user_score";
//     }
//     else if (result === "You lose the match 😟😔"){
//         computer_score++
//         document.getElementById("computer_score_para").innerHTML = "computer_score";
//     }
     
//}

// const check_winer  = () =>{
//     if (user_choice === computer_choices){
//     // document.getElementById("result").innerText = 
//     console.log("the match is draw..");
//     }

//     else if (user_choice === "rock"){
//         if (computer_choices === "scissor"){
//             // document.getElementById("result").innerText = 
//             console.log(" You win the match");
//             }

//         else{
//             // document.getElementById("result").innerText =
//             console.log("computer win the match");
//         }
//     }

//     else if (user_choice === "pepar"){
//         if (computer_choices === "rock"){
//             // document.getElementById("result").innerText = 
//             console.log(" You win the match");
//         }
//         else{
//             // document.getElementById("result").innerText =
//             console.log("computer win the match");
//         }
//     }

//     else if (user_choice === "scissor"){
//         if (computer_choices === "rock"){
//             // document.getElementById("result").innerText = 
//             console.log(" You win the match");
//         }
    
//         else{
//         // document.getElementById("result").innerText =
//         console.log("computer win the match");
//         }
//     }
// }






// const computer_choices = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// const computerChoice = getComputerChoice();

// if (computerChoice === choiceid){
//     console.log("the match is drow")
// }
// if else ( )












// let a =document.querySelector("#rock");

// let b= document.querySelector("#pepar");

// let c = document.querySelector("#scissor")

// console.log(a,b,c)