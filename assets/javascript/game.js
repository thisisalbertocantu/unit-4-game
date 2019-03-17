

$(document).ready(function () {

    // Selects a random number
    var randomNumber = Math.floor(Math.random() * 101 + 19);

    // Putting the random number in the html id we specified
    $('.random-number').text(randomNumber);



    var numberone = Math.floor(Math.random() * 11 + 1)
    var numbertwo = Math.floor(Math.random() * 11 + 1)
    var numberthree = Math.floor(Math.random() * 11 + 1)
    var numberfour = Math.floor(Math.random() * 11 + 1)

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var finalscore = 0;
    var wins = 0;
    var losses = 0;

    //  Declaring  the variables 
    $('#wins-counter').text("Wins: " + wins);
    $('#losses-counter').text("Losses: " + losses);

    function reinitialize() {

        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber)
        $('.random-number').text(randomNumber);

        numberone = Math.floor(Math.random() * 11 + 1);
        numbertwo = Math.floor(Math.random() * 11 + 1);
        numberthree = Math.floor(Math.random() * 11 + 1);
        numberfour = Math.floor(Math.random() * 11 + 1);

        finalscore = 0;
        $('#final-score').text(finalscore);

    }

    //adds the wins to the Score

    function winner() {
        alert("You won!");
        wins++;
        $('#wins-counter').text("Wins: " + wins);
        reinitialize();
    }
    
    //addes the losses to the userTotal
    function loser() {
        alert("You lost!");
        losses++;
        $('#losses-counter').text("Losses: " + losses);
        reinitialize()
    }

    //sets up click for jewels
    $('#diamond').on('click', function () {
        finalscore = finalscore + numberone;
        console.log("New userTotal = " + finalscore);
        $('#final-score').text(finalscore);
        //sets win/lose conditions
        if (finalscore == randomNumber) {
            winner();
        }
        else if (finalscore > randomNumber) {
            loser();
        }
    })

    $('#turquoise').on('click', function () {
        finalscore = finalscore + numbertwo;
        console.log("New userTotal= " + finalscore);
        $('#final-score').text(finalscore);
        //sets win/lose conditions
        if (finalscore == randomNumber) {
            winner();
        }
        else if (finalscore > randomNumber) {
            loser();
        }
    })

    $('#ruby').on('click', function () {
        finalscore = finalscore + numberthree;
        console.log("New userTotal= " + finalscore);
        $('#final-score').text(finalscore);
        //sets win/lose conditions
        if (finalscore == randomNumber) {
            winner();
        }
        else if (finalscore > randomNumber) {
            loser();
        }
    })

    $('#sapphire').on('click', function () {
        finalscore = finalscore + numberfour;
        console.log("New userTotal= " + finalscore);
        $('#final-score').text(finalscore);
        //sets win/lose conditions
        if (finalscore == randomNumber) {
            winner();
        }
        else if (finalscore > randomNumber) {
            loser();
        }
    })

});