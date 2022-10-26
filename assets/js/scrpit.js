
var record = {
    ties: 0,
    wins: 0,
    loses: 0,
};

function win() {
    alert("You win!");
    record.wins++;
};

function lose() {
    alert("I win!");
    record.loses++;
};

function play() {
    var choice = prompt("Choose R, P, or S").toUpperCase();
    var options = ["R", "P", "S"];
    var rando = options[Math.floor(Math.random() * options.length)];
    
    if (!options.includes(choice)) {
        confirm("Please only pick from R, P, or S. Try again?");
        return play();
    } else {
        alert("I choose " + rando + ".");
        // TIED
        if (choice == rando) {
            alert("We tied!");
            record.ties++;
        } 
        // CHOOSE R
        else if (choice == "R") {
            if (rando == "P") {
                lose();
            } else {
                win();
            }
        }
        // CHOOSE P
        else if (choice == "P") {
            if (rando == "S") {
                lose();
            } else {
                win();
            }
        }
        // CHOOSE S
        else {
            if (rando == "R") {
                lose();
            } else {
                win();
            }
        }
    };
   
    alert("Ties: " + record.ties + "\nWins: " + record.wins + "\nLoses: " + record.loses);

    if (confirm("Want to try again?")) {
        return play();
    } else {
        return document.getElementById("done").innerHTML = "Thanks for playing! Refresh the page to start over.";
    };
};

play();


