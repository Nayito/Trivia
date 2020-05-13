(function () {
    const myQuestions = [{
            question: "Which classic game did Super Mario creator, Shigeru Miyamoto originally design?",
            answers: {
                a: "Pong",
                b: "Donkey Kong",
                c: "Galaxy Game",
                d: "Pac Man"
            },
            correctAnswer: "b"
        },
        {
            question: "What was Mario originally known as?",
            answers: {
                a: "Jumpman",
                b: "The Italian",
                c: "The Pipe Cleaner",
                d: "The Rescuer"
            },
            correctAnswer: "a"
        },
        {
            question: "What level is in every version of Super Mario Kart?",
            answers: {
                a: "Coco Mountains",
                b: "Dinosaur Island",
                c: "Luigi’s Speedway",
                d: "Rainbow Road"
            },
            correctAnswer: "d"
        },
        {
            question: "What was Bowser’s original name?",
            answers: {
                a: "The Koopa King",
                b: "Koopa Troopa",
                c: "King Troopa",
                d: "Lead Koopa"
            },
            correctAnswer: "c"
        },
        {
            question: "What was Mario’s original job?",
            answers: {
                a: "A doctor",
                b: "A chef",
                c: "A pipe cleaner",
                d: "A carpenter"
            },
            correctAnswer: "d"
        },
        {
            question: "Why do Mario and Luigi have mustaches?",
            answers: {
                a: "Expressions were hard to design at that time ",
                b: "They’re Italian",
                c: "The developers wanted to create a strong trademark",
                d: "The developer’s father had a mustache"
            },
            correctAnswer: "a"
        },
        {
            question: "Besides the Super Mario games, what game did Mario make an appearance in?",
            answers: {
                a: "Donkey Kong",
                b: "Donkey Kong Jr. ",
                c: "Sonic the Hedgehog",
                d: "Space Invaders"
            },
            correctAnswer: "b"
        },
        {
            question: "What animal was Bowser originally?",
            answers: {
                a: "A tiger",
                b: "A boar",
                c: "An ox",
                d: "A badger"
            },
            correctAnswer: "c"
        },
        {
            question: "What game did Wario first appear in?",
            answers: {
                a: "Super Mario World",
                b: "Super Mario World 2: Yoshi’s Island",
                c: "Super Mario 64",
                d: "Game Boy’s Super Mario Land 2"
            },
            correctAnswer: "d"
        },
        {
            question: "Which game was the Warp Whistle borrowed from?",
            answers: {
                a: "King’s Quest",
                b: "Prince of Persia",
                c: "The Legend of Zelda",
                d: "Final Fantasy"
            },
            correctAnswer: "c"
        },
        {
            question: "What was Princess Peach’s original name?",
            answers: {
                a: "Princess Toad",
                b: "Princess Daisy",
                c: "Princess Toadstool",
                d: "The Pink Princess"
            },
            correctAnswer: "c"
        },
        {
            question: "What does the P-Wing stand for in the games?",
            answers: {
                a: "Pair of Wings",
                b: "Pipe Wings",
                c: "Princess Peach Wings",
                d: "Paratroopa Wing"
            },
            correctAnswer: "d"
        },
        {
            question: "What are the mushroom shaped bad guys called?",
            answers: {
                a: "Goomba",
                b: "Paratroopa",
                c: "Koopa Troopa",
                d: "Shy Guy"
            },
            correctAnswer: "a"
        },
        {
            question: "Why was Princess Peach captured in the first Super Mario game?",
            answers: {
                a: "Bowser was in love",
                b: "She could undo the carnage done to the Mushroom Kingdom",
                c: "She has magical powers Bowser wanted",
                d: "She wouldn’t obey Bowser"
            },
            correctAnswer: "b"
        },
        {
            question: "What was the fastest time a person beat Super Mario Bros?",
            answers: {
                a: "3 minutes and 35.46 seconds",
                b: "4 minutes and 24.56 seconds",
                c: "4 minutes and 57.69 seconds",
                d: "5 minutes and 12.35 seconds"
            },
            correctAnswer: "c"
        },
        {
            question: "Which six players have always been available to play in Mario Kart?",
            answers: {
                a: "Mario, Luigi, Bowser, Koopa Troopa, Boo and Yoshi",
                b: "Mario, Luigi, Bowser, Princess Peach, Donkey Kong and Yoshi",
                c: "Mario, Luigi, Bowser, Princess Peach, Toad and Yosh",
                d: "Mario. Luigi, Goomba, Koopa Troopa, Donkey Kong and Yoshi"
            },
            correctAnswer: "c"
        },
        {
            question: "What were all the bricks supposed to be in Super Mario Bros?",
            answers: {
                a: "The sins of the citizens of Mushroom Kingdom",
                b: "The trapped citizens of Mushroom Kingdom",
                c: "The amount of steps needed to save Mushroom Kingdom",
                d: "The amount of days Mushroom Kingdom has been taken by Bowser"
            },
            correctAnswer: "b"
        },
        {
            question: "Who was Mario modeled after?",
            answers: {
                a: "Popeye",
                b: "Jackie Gleason",
                c: "Chef Boyardee",
                d: "Charlie Chaplin"
            },
            correctAnswer: "a"
        },
        {
            question: "What does Mario break bricks with?",
            answers: {
                a: "His head",
                b: "His fists",
                c: "His nose",
                d: "Both fists"
            },
            correctAnswer: "b"
        },
        {
            question: "Which character is not a Koopaling?",
            answers: {
                a: "Lemmy",
                b: "Roy",
                c: "Iggy",
                d: "Sid"
            },
            correctAnswer: "d"
        },
        {
            question: "What’s the name of Luigi’s doppelganger?",
            answers: {
                a: "Wally",
                b: "Waluigi",
                c: "Wuigi",
                d: "Wallyuigi"
            },
            correctAnswer: "b"
        },
        {
            question: "How many worlds are there in Super Mario Bros 3?",
            answers: {
                a: "6",
                b: "7",
                c: "8",
                d: "9"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the name of the main Super Mario theme Song?",
            answers: {
                a: "Star Theme",
                b: "Ground Theme ",
                c: "Mushroom Theme",
                d: "Mario Theme"
            },
            correctAnswer: "b"
        },
        {
            question: "How many copies did the first Super Mario Brother sell?",
            answers: {
                a: "36.53 million copies",
                b: "38.37 million copies",
                c: "39.34 million copies",
                d: "40.24 million copies"
            },
            correctAnswer: "c"
        },
        {
            question: "Why was Super Mario Bros 2 such a departure from the other games?",
            answers: {
                a: "The writers lost a bet to the development team",
                b: "The developer was upset about the original branding",
                c: "The writers had a very short deadline",
                d: "It was originally another game"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of these Mario Party games was released on the Wii?",
            answers: {
                a: "Mario Party 5",
                b: "Mario Party 6",
                c: "Mario Party 9",
                d: "Mario Party 10"
            },
            correctAnswer: "c"
        },
        {
            question: "Which game introduced the Cloud Flower?",
            answers: {
                a: "Super Mario Bros 3",
                b: "Super Mario Galaxy",
                c: "Mario and Luigi: Superstar Saga",
                d: "Super Mario Galaxy 2"
            },
            correctAnswer: "d"
        },
        {
            question: "Which Mario and Luigi game allows players to play as Mario, Luigi, and Bowser throughout much of the game?",
            answers: {
                a: "Mario and Luigi: Bowser’s Inside Story",
                b: "Mario and Luigi: Paper Jam",
                c: "Mario and Luigi: Superstar Saga",
                d: "Mario and Luigi: Dream Team"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these characters was NOT one of Count Bleck’s minions from Super Paper Mario?",
            answers: {
                a: "Nastasia",
                b: "Francis",
                c: "Mr. L",
                d: "O’Chunks"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the first Mario game?",
            answers: {
                a: "Mario Bros",
                b: "Super Mario Bros.",
                c: "Donkey Kong",
                d: "Mario’s Adventure"
            },
            correctAnswer: "c"
        },
        {
            question: "When was Super Mario Bros. released?",
            answers: {
                a: "1985",
                b: "1975",
                c: "1980",
                d: "1990"
            },
            correctAnswer: "a"
        },
        {
            question: "Which game is oldest?",
            answers: {
                a: "Super Mario Galaxy",
                b: "Super Mario Sunshine",
                c: "Luigi’s Mansion",
                d: "New Super Mario Bros"
            },
            correctAnswer: "c"
        },
        {
            question: "How many Mario Karts are there? (Not including arcade.)",
            answers: {
                a: "8",
                b: "5",
                c: "7",
                d: "6"
            },
            correctAnswer: "c"
        },
        {
            question: "How many power stars are in Super Mario 64?",
            answers: {
                a: "150",
                b: "100",
                c: "75",
                d: "120"
            },
            correctAnswer: "d"
        },
        {
            question: "There are rumors about a certain character you can be in Super Mario 64. This character has  not yet been proved real. Who is this character?",
            answers: {
                a: "Waluigi",
                b: "Wario",
                c: "Yoshi",
                d: "Luigi"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is most likely to say this? “I have chortles!”",
            answers: {
                a: "Fawful",
                b: "Midbus",
                c: "Wario",
                d: "Goomboss"
            },
            correctAnswer: "a"
        },
        {
            question: "Fill in the blank. When Miyamoto first created Mario, Mario was a ___. Now Mario is a plumber.",
            answers: {
                a: "Doctor.",
                b: "Pizza Maker",
                c: "Carpenter",
                d: "Technician"
            },
            correctAnswer: "c"
        },
        {
            question: "Is Super Mario Sunshine, when the beam of light appears, what do you do to get to Noki bay?",
            answers: {
                a: "Stand in the beam and press secret button combo",
                b: "Ground pound under the beam",
                c: "Stand in the beam, and look at the sun",
                d: "Spray water in the beam to uncover a portal."
            },
            correctAnswer: "c"
        },
        {
            question: "What is the secret button combo in New Super Mario Bros. DS that lets you access the secret challenge mode?",
            answers: {
                a: "Start, LRLRABAB",
                b: "Start, LRLRXXYY ",
                c: "Start, LLRRXYXY",
                d: "Start, XXYAABLR"
            },
            correctAnswer: "b"
        },
        {
            question: "What is unique about Mario’s role in the game Donkey Kong Junior?",
            answers: {
                a: "He doesn’t have a mustache",
                b: "He doesn’t have any clothes on",
                c: "He’s got really long hair",
                d: "He’s the baddie"
            },
            correctAnswer: "d"
        },
        {
            question: "What species is Bowser?",
            answers: {
                a: "Keeja",
                b: "Koopa",
                c: "Kaava",
                d: "Kuula"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these games came first?",
            answers: {
                a: "Super Mario World",
                b: "Super Mario Bros. ",
                c: "Super Mario Land",
                d: "Mario Bros."
            },
            correctAnswer: "d"
        },
        {
            question: "Which of these sentences is true about Mario and Luigi?",
            answers: {
                a: "Mario is taller and Luigi wears red",
                b: "Mario is shorter and Luigi wears red",
                c: "Mario is taller and Luigi wears green",
                d: "Mario is shorter and Luigi wears green"
            },
            correctAnswer: "d"
        },
        {
            question: "Mario went 3D in Super Mario 64, but in what year?",
            answers: {
                a: "1994",
                b: "1995",
                c: "1996",
                d: "1997"
            },
            correctAnswer: "c"
        },
        {
            question: "Mario’s hat is a character in the new game super Mario Odyssey. What’s it called?",
            answers: {
                a: "Hatty",
                b: "Cappy",
                c: "Dave",
                d: "Lisa"
            },
            correctAnswer: "b"
        },
        {
            question: "How many Mario games have been sold?",
            answers: {
                a: "Over 100 million",
                b: "Over 300 million",
                c: "Over 500 million",
                d: "Over 900 million"
            },
            correctAnswer: "c"
        },
        {
            question: "Wario is Mario’s nemesis but what colour are his dungarees?",
            answers: {
                a: "Purple",
                b: "Orange",
                c: "Yellow",
                d: "Blue"
            },
            correctAnswer: "a"
        },
        {
            question: "Which other gaming icon accompanies Mario in his games based around the Olympics?",
            answers: {
                a: "Pac-Man",
                b: "Sonic the Hedgehog",
                c: "Link",
                d: "Solid Snake"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these sports in there NOT a Mario game based around?",
            answers: {
                a: "Tennis",
                b: "Baseball",
                c: "Golf",
                d: "Snooker"
            },
            correctAnswer: "d"
        },
        {
            question: "Mario makes a tiny cameo in two zelda games - but in what form?",
            answers: {
                a: "A tattoo",
                b: "A sculpture",
                c: "A portrait",
                d: "An engraving"
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();