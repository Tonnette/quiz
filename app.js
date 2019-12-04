$(document).ready(function() {

    //timer
    var timeLeft = 75;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
        } else {
            $(".quiz-timer").text(timeLeft + ' seconds remaining');
            timeLeft--;
        }
    }

    function reset() {
        timeLeft = 75;
        timerId = setInterval(countdown, 1000);
    }


    $(".startQuizButton").on("click", function() {
        $(".my-starter-page").hide();
        $(".quiz-has-started").show();
        resetAllViews();
        countdown();


    });

    function resetAllViews() {
        $(".quiz-has-started").show();
        $(".quiz-title").show();
        $(".bigBox").show();
        $(".quiz-timer").show();
        $(".timerEquals").show();
        $(".first-question").show();
        $(".buttons").show();
        $("#first").show();
        $(".hide").hide();
        $("#hide").hide();
        $(".btn-choice btn-choice-round-1").show();
        $(".btn-choice btn-choice-round-2").hide();
        $(".btn-choice btn-choice-round-3").hide();
        $(".btn-choice btn-choice-round-4").hide();
        $(".btn-choice btn-choice-round-5").hide();
        $("#fifth").hide();
        $(".btn-choice-round-1").show();
        $(".quiz-has-started").show();

    }

    var questionAnswerRoundOne = [{
        "question": "Commonly used data types DO NOT inlcude:",
        "choices": ["strings", "booleans", "alerts", "numbers"],
        "answer": 2
    }];
    var questionAnswerRoundTwo = [{
        "question": "What is a communication device?",
        "choices": ["door", "hat", "dest", "phone"],
        "answer": 3
    }];
    var questionAnswerRoundThree = [{
        "question": "What do phones do?",
        "choices": ["make calls", "eat pasta", "drink wine", "vacuum"],
        "answer": 0
    }];
    var questionAnswerRoundFour = [{
        "question": "What do you find at the beach?",
        "choices": ["fix cars", "make pies", "learn code", "sand"],
        "answer": 3
    }];
    var questionAnswerRoundFive = [{
        "question": "Inside which HTML element do we put the JavaScript?",
        "choices": ["<javascript>", "<html>", "<script>", "<js>"],
        "answer": 2
    }];
    score = 0;
    let counter = 0;
    $(".first-question").text(questionAnswerRoundOne[0].question);
    $("#btn1").text(questionAnswerRoundOne[0].choices[0]);
    $("#btn2").text(questionAnswerRoundOne[0].choices[1]);
    $("#btn3").text(questionAnswerRoundOne[0].choices[2]);
    $("#btn4").text(questionAnswerRoundOne[0].choices[3]);

    $(".second-question").text(questionAnswerRoundTwo[0].question);
    $("#btn5").text(questionAnswerRoundTwo[0].choices[0]);
    $("#btn6").text(questionAnswerRoundTwo[0].choices[1]);
    $("#btn7").text(questionAnswerRoundTwo[0].choices[2]);
    $("#btn8").text(questionAnswerRoundTwo[0].choices[3]);

    $(".third-question").text(questionAnswerRoundThree[0].question);
    $("#btn9").text(questionAnswerRoundThree[0].choices[0]);
    $("#btn10").text(questionAnswerRoundThree[0].choices[1]);
    $("#btn11").text(questionAnswerRoundThree[0].choices[2]);
    $("#btn12").text(questionAnswerRoundThree[0].choices[3]);

    $(".forth-question").text(questionAnswerRoundFour[0].question);
    $("#btn13").text(questionAnswerRoundFour[0].choices[0]);
    $("#btn14").text(questionAnswerRoundFour[0].choices[1]);
    $("#btn15").text(questionAnswerRoundFour[0].choices[2]);
    $("#btn16").text(questionAnswerRoundFour[0].choices[3]);

    $(".fifth-question").text(questionAnswerRoundFive[0].question);
    $("#btn17").text(questionAnswerRoundFive[0].choices[0]);
    $("#btn18").text(questionAnswerRoundFive[0].choices[1]);
    $("#btn19").text(questionAnswerRoundFive[0].choices[2]);
    $("#btn20").text(questionAnswerRoundFive[0].choices[3]);





    // User Answers Round-1
    $(".btn-choice-round-1").on("click", function() {
        $("#first").hide();
        $(".first-question").hide();
        $(".btn-choice-round-2").show();
        $(".second-question").show();
        $(".buttons").show();
        $(".quiz-timer").show();
        $(".timerEquals").show();
        $(".quiz-has-started").show();
        $(".quiz-title").show();
        $(".timerEquals").show();
        $("#second").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        // console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundOne[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("questions correct = " + score + "/5");
            // console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
            penalty();
            //timerSeconds--
            //rendertime()
            //need to deduct time
        }
    });

    // User Answers Round-2
    $(".btn-choice-round-2").on("click", function() {
        $("#second").hide();
        $(".second-question").hide();
        $(".btn-choice-round-3").show();
        $(".third-question").show();
        $(".buttons").show();
        $(".quiz-timer").show();
        $(".timerEquals").show();
        $(".quiz-has-started").show();
        $(".quiz-title").show();
        $("#third").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        // console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundTwo[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("questions correct = " + score + "/5");
            ("score = " + score + "/5");
            // console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
            timeLeft -= 10;
        }
    });

    // User Answers Round-3
    $(".btn-choice-round-3").on("click", function() {
        $("#third").hide();
        $(".third-question").hide();
        $(".btn-choice-round-4").show();
        $(".forth-question").show();
        $(".buttons").show();
        $("#forth").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        // console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundThree[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("questions correct = " + score + "/5");
            // console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
            timeLeft -= 10;
        }
    });

    // User Answers Round-4
    $(".btn-choice-round-4").on("click", function() {
        $("#forth").hide();
        $(".forth-question").hide();
        $(".btn-choice-round-5").show();
        $("#fifth").show();
        $(".fifth-question").show();
        $(".buttons").show();
        $("#fifth").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        // console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundFour[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("questions correct = " + score + "/5");
            // console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
            penalty();
        }
    });
    // User Answers Round-5
    $(".btn-choice-round-5").on("click", function() {
        $(".buttons").hide();
        $(".quiz-is-over").show();
        $("#progress").hide();
        $(".quiz-title").text("Quiz is over!");
        $(".quiz-timer").hide();
        $(".timerEquals").hide();

        clearTimeout(timerId);
        // console.log(timeLeft);


        $("#quizFinalScore").text("Your final score is " + parseInt(timeLeft + 1));


        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        // console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundFive[0].answer) {
            $("#progress").text("correct.");
            score++;

            console.log(timeLeft);

            var finalTimeScore = "Your final score is " + parseInt(timeLeft + 1)
            $(".score").text(finalTimeScore);
        }
        var lastUser = JSON.parse(localStorage.getItem("userData"));
    });
    // Submit Button
    $(".userSubmit").on("click", function(event) {
        event.preventDefault();
        $(".quiz-is-over").hide();
        $(".quiz-timer").hide();
        $(".score").hide();
        $(".timerEquals").hide();
        $(".highscores").show();
        $(".quiz-title").text("Quiz");
        // addToHighScores();
        var userInitials = document.querySelector(".myInitials");
        // console.log('new initials: ' + userInitials);
        // console.log(timeLeft);

        var userArray = JSON.parse(localStorage.getItem("userData")) || [];

        var userData = {
            userInials: userInitials.value,
            score: timeLeft
        };

        // console.log(userData);
        // var array = localStorage.getItem("userData");
        // if (array==undefined){
        //     array="[]"
        // }


        // console.log("HHH 0", userArray)
        // 1. Get array from LocalStorage. If null, create emtpy Array
        // 2. Push user to array

        // console.log("Jack 0", userArray)
        console.log(userArray);
        userArray.push(userData);
        console.log(userArray);

        // console.log("Jack 1", userArray)
        // console.log("HHH 1")
        // 3. stringfy array
        // console.log("Jack 2", userArray)

        localStorage.setItem("userData", JSON.stringify(userArray));

        // 4. st array to localstorage

        $(".insertDiv").empty()
        userArray.forEach(function(element) {
            var liTag = $("<li>");
            // console.log(element.userInials);
            liTag.textContent = element.userInials + " scored " + element.score;
            $(".insertDiv").append(liTag.textContent);
            $(".insertDiv").append("<br>");

        });

        // console.log("HHH 2")

        // HighScores Page
        // var textEntered = document.querySelector(".highscores-text");
        // textEntered.textContent = userArray + " " + " - final score: " + userArray.score;

        // function addToHighScores() {
        //     var para = document.createElement("p");
        //     $(".insertDiv").append(para);
        //     para.innerHTML = textEntered.textContent
        //     console.log(para.innerHTML);

        //     $(".highscores-text").text("");
        //     userInitials.textContent = "";
        // }

        // $(".add-to-scores").on("click", function() {
        //     addToHighScores();
        // });

        //clear High Scores
        $(".clear-high-scores").on("click", function() {
            // textEntered.value = "";
            window.localStorage.removeItem("userData");
            window.location.reload();

            // $(".insert").text("High Scores");
        });

        //go back to the start
        $(".startQuizOverButton").on("click", function() {
            $(".highscores").hide();
            $(".my-starter-page").show();
            $(".bigBox").show();
            $(".quiz-title").hide();
            clearTimeout(timerId);
            timeLeft = 75;
            reset();
        });



    });




    function penalty() {
        timeLeft -= 10;
    }

});