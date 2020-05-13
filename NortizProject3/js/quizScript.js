(function () {
    const myQuestions = [{
            question: "What is the name of the character you play as throughout the series?",
            answers: {
                a: "Link",
                b: "Zelda",
                c: "Sheik",
                d: "Lalo"
            },
            correctAnswer: "a"
        },
        {
            question: "In Ocarina of Time, What is the first Gem you get to open the Temple of Time?",
            answers: {
                a: "Zora's Sapphire",
                b: "Kokiri's Emerald",
                c: "Goron's Ruby",
                d: "Majora's Diamond"
            },
            correctAnswer: "b"
        },
        {
            question: "In total, how many games does Legend of Zelda have?",
            answers: {
                a: "19",
                b: "30",
                c: "12",
                d: "24"
            },
            correctAnswer: "a"
        },
        {
            question: "In Ocarina of Time, Who is the Sage of Light?",
            answers: {
                a: "Zelda",
                b: "Rauru ",
                c: "Sheik",
                d: "Link"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the name of the King of Hyrule that assists Link in The Wind Waker?",
            answers: {
                a: "Daltus Gustaf Hyrule",
                b: "Harkinian Hyrule",
                c: "Nohansen Daltus Hyrule",
                d: "Daphnes Nohansen Hyrule"
            },
            correctAnswer: "d"
        },
        {
            question: "In the original Zelda for NES, where is Level 6 located during the Second Quest?",
            answers: {
                a: "In the Graveyard when you play the recorder",
                b: "Under the empty fairy's fountain when you play the recorder",
                c: "In the middle of a lake you reach by raft",
                d: "In the desert behind a wall you must bomb"
            },
            correctAnswer: "a"
        },
        {
            question: "From the Nes to Skyward Sword, in how many Zelda series games does Link fight Ganon/Ganondorf (not including remakes, rereleases, and the CD-i games).",
            answer: {
                a: "6",
                b: "7",
                c: "8",
                d: "9"
            },
            correctAnswer: "c"
        },
        {
            question: "Who is the current producer of The Legend of Zelda series?",
            answers: {
                a: "Koji Kondo",
                b: "Eiji Aonuma",
                c: "Shigeru Miyamoto",
                d: "Satoru Iwata"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is Princess Zelda named after?",
            answers: {
                a: "Zelda Williams",
                b: "Zelda Fitzgerald",
                c: "Zelda Spellman",
                d: "Zelda Wynn Valdes"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the name of Link’s hat and guide in The Minish Cap?",
            answers: {
                a: "Lenzo",
                b: "Ezlo",
                c: "Zola",
                d: "Ozlo"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is NOT an enemy found in Link’s Awakening?",
            answers: {
                a: "Goomba",
                b: "Armos",
                c: "Moblin",
                d: "Poe"
            },
            correctAnswer: "d"
        },
        {
            question: "In how many games does a character named Fado appear?",
            answers: {
                a: "0",
                b: "1",
                c: "2",
                d: "3"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the main villain in Skyward Sword?",
            answers: {
                a: "Phi",
                b: "Ghirahim",
                c: "Vaati",
                d: "Ganon"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following is NOT an island that appears in Phantom Hourglass?",
            answer: {
                a: "Goron Island",
                b: "Isle of Gust",
                c: "Star Island",
                d: "Spirit Island"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is NOT true of Tingle?",
            answers: {
                a: "He is 35 Years old",
                b: "He is left handed",
                c: "He had been under Uncle Rupee’s Tingle Curse",
                d: "He has twin younger brothers"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the maximum number of rupees Link can hold in the first Zelda game for NES?",
            answer: {
                a: "999",
                b: "500",
                c: "255",
                d: "122"
            },
            correctAnswer: "c"
        },
        {
            question: "The Legend of Zelda is notable for being the first video that...",
            answers: {
                a: "...allowed players to save",
                b: "...sold over a million copies on the NES",
                c: "...was scored 40/40 by Famitsu Magazine",
                d: "All of the above"
            },
            correctAnswer: "a"
        },
        {
            question: "In A Link to the Past, which of the following items is Blue?",
            answers: {
                a: "The Cane of Somaria",
                b: "The Cane of Bynra",
                c: "The Pendant of Wisdom",
                d: "The Hookshot"
            },
            correctAnswer: "b"
        },
        {
            question: "In A Link to the Past, which of the following places will the flute NOT take Link?",
            answer: {
                a: "Death Mountain",
                b: "Link’s House",
                c: "The Lost Woods ",
                d: "The Pyramid of Power"
            },
            correctAnswer: "c"
        },
        {
            question: "What is found in the secret grotto behind the tree at the entrance to Kakariko Village in Ocarina of Time?",
            answer: {
                a: "500 Rupees",
                b: "A Gold Skulltula",
                c: "Two ReDeads",
                d: "A Piece of Heart"
            },
            correctAnswer: "c"
        },
        {
            question: "According to the signs in front of it, what is the name of the Well in Kakariko Village in Ocarina of Time?",
            answers: {
                a: "The Well of Many Hands",
                b: "The Well of Shadows and Darkness",
                c: "The Well of Truth",
                d: "The Well of Three Features"
            },
            correctAnswer: "d"
        },
        {
            question: "In Majora’s Mask, what is the name of the leader of the Gerudo Pirates?",
            answers: {
                a: "Nabooru",
                b: "Aberu",
                c: "Kotake",
                d: "Aveil"
            },
            correctAnswer: "d"
        },
        {
            question: "In the 3DS remake of Ocarina of Time, what can be seen on the wall of one of the rooms of the Gerudo Fortress behind two crates?",
            answers: {
                a: "A picture of Majora’s Mask",
                b: "Artwork for Skyward Sword",
                c: "A painting of a Piranha Plant",
                d: "The old Gerudo Symbol"
            },
            correctAnswer: "b"
        },
        {
            question: "In A Link to the Past, how much does a blue potion cost at the witch’s shop?",
            answers: {
                a: "60 Rupees",
                b: "80 Rupees",
                c: "120 Rupees",
                d: "160 Rupees"
            },
            correctAnswer: "d"
        },
        {
            question: "What happens when you title your character “ZELDA” in Link’s Awakening?",
            answers: {
                a: "You start with all items and heart containers",
                b: "Different music will play",
                c: "The enemies will be twice as hard",
                d: "Link will have infinite rupees"
            },
            correctAnswer: "b"
        },
        {
            question: "What games is the first to allow the player to control a character other than Link?",
            answers: {
                a: "A Link to the Past",
                b: "Majora’s Mask",
                c: "The Wind Waker",
                d: "Spirit Tracks"
            },
            correctAnswer: "b"
        },
        {
            question: "In Twilight Princess, what can be seen on the back of the black cloak that Princess Zelda wears when she first meets Link?",
            answers: {
                a: "The Sheikah Symbol",
                b: "The Gerudo Symbol",
                c: "The Triforce/Royal Crest Symbol",
                d: "The Twili Symbol"
            },
            correctAnswer: "a"
        },
        {
            question: "In what year was Wind Waker first released?",
            answers: {
                a: "2001",
                b: "2002",
                c: "2003",
                d: "2004"
            },
            correctAnswer: "b"
        },
        {
            question: "In which of the following games does the hookshot NOT appear?",
            answers: {
                a: "A Link to the Past",
                b: "Link’s Awakening",
                c: "Majora’s Mask",
                d: "Four Swords Adventure"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the name of the pirate that tests Link when he travels on Tetra’s pirate ship in The Wind Waker?",
            answers: {
                a: "Gonzo",
                b: "Niko",
                c: "Mako",
                d: "Zuko"
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these songs first appeared in A Link to the Past?",
            answers: {
                a: "Zelda’s Lullaby",
                b: "Saria’s Song/ Lost Woods Theme",
                c: "Zelda Main Theme",
                d: "Song of Storms"
            },
            correctAnswer: "a"
        },
        {
            question: "In Twilight Princess, Ganondorf kills which Sage after his attempted execution at the Mirror Chamber in the Arbiter’s Grounds?",
            answer: {
                a: "Sage of Light",
                b: "Sage of Shadow",
                c: "Sage of Water",
                d: "Sage of Forest"
            },
            correctAnswer: "c"
        },
        {
            question: "In Twilight Princess, saving and turning off the game in the Canon Room underneath Kakariko Village before warping with the Canon to Lake Hylia created a glitch that...",
            answers: {
                a: "...skips Shad’s dialogue and confuses the player",
                b: "...prevents Link from leaving the room and finishing the game.",
                c: "...makes Midna warp the Canon to Faron Woods instead.",
                d: "There is no glitch."
            },
            correctAnswer: "b"
        },
        {
            question: "What does the Deku Butler give Link if he manages to follow him through the Deku shrine in Majora’s Mask?",
            answers: {
                a: "Magic beans",
                b: "The Mask of Scents",
                c: "An empty bottle",
                d: "A piece of heart"
            },
            correctAnswer: "b"
        },
        {
            question: "What are the four names of the Poe Sisters in Ocarina of Time’s Forest Temple?",
            answers: {
                a: "Sara, Emily, Jo, and Erin",
                b: "Marge, Joan, Beth, and Aliison",
                c: "May, Sarah, Amy, and Joe",
                d: "Meg, Joelle, Beth, and Amy"
            },
            correctAnswer: "d"
        },
        {
            question: "On April Fool’s Day 2008, what website released a trailer for a Zelda movie that turned out to be an elaborate hoax?",
            answer: {
                a: "Nintendo.com",
                b: "GameTrailers.com",
                c: "IGN.com",
                d: "IMDb.com"
            },
            correctAnswer: "c"
        },
        {
            question: "In Twilight Princess, where does Link find the Golden Dayflies?",
            answers: {
                a: "Gerudo Desert Messa",
                b: "Hyrule Field south of Hyrule Castle Town",
                c: "Kakariko Village and Graveyard",
                d: "Zora’s Domain and Zora’s"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the name of the leader of the Bomber’s in Majora’s Mask?",
            answers: {
                a: "Jim",
                b: "Ivan",
                c: "Jun-Roberto",
                d: "Kafei"
            },
            correctAnswer: "a"
        },
        {
            question: "In which games does Kaepora Gaebora NOT appear?",
            answers: {
                a: "Link Awakening",
                b: "Ocarina of Time",
                c: "Majora’s Mask",
                d: "Four Swords Adventure"
            },
            correctAnswer: "a"
        },
        {
            question: "In Spirit Tracks, how do Linebeck and Jolene know each other?",
            answer: {
                a: "They are brother and sister",
                b: "Jolene as a pirate has always had an eye for Linebeck's precious ship",
                c: "Linebeck saved Jolene’s life, but then stole her treasure",
                d: "They went to school together, where LineBeck cheated off Jolene’s homework"
            },
            correctAnswer: "c"
        },
        {
            question: "By linking Oracle of Ages and Oracle of Seasons together and encountering Ganon, whose body do you find out Ganon uses as a vessel?",
            answers: {
                a: "Zelda’s",
                b: "Farore’s",
                c: "Link’s",
                d: "Twinrova’s"
            },
            correctAnswer: "d"
        },
        {
            question: "In Spirit Tracks, a man in Adoba Village asks Link to bring him 10 of what using his train?",
            answers: {
                a: "Rabbits",
                b: "Snowballs",
                c: "Coconuts",
                d: "Cuccos"
            },
            correctAnswer: "d"
        },
        {
            question: "In The Legend of Zelda for NES, how can you damage a Darknut?",
            answers: {
                a: "Attack them when they aren’t moving",
                b: "Attack them from behind",
                c: "Attack them from their side",
                d: "Attack them from behind or their side"
            },
            correctAnswer: "d"
        },
        {
            question: "In Four Swords Adventures, where is the White Maiden held captive?",
            answer: {
                a: "In Four Swords Adventures, where is the White Maiden held captive?",
                b: "The Tower of Winds",
                c: "Hyrule Castle",
                d: "The Temple of Darkness"
            },
            correctAnswer: "c"
        },
        {
            question: "Link appears as a playable character in the GameCube version of SoulCalibur II. Which of the following can Link NOT wield in that game?",
            answers: {
                a: "The Mirror Shield",
                b: "The Cane of Byrna ",
                c: "The Great Fairy’s Sword",
                d: "A Deku Stick"
            },
            correctAnswer: "d"
        },
        {
            question: "If you add the number of swords Link can wield in Link’s Awakening to the number he wields in A Link to the Past, what do you get?",
            answer: {
                a: "3",
                b: "4",
                c: "5",
                d: "6"
            },
            correctAnswer: "c"
        },
        {
            question: "In A Link to the Past: Four Swords, how many rupees must the players collect per stage in the Second Epic to earn Gold Keys?",
            answers: {
                a: "1000",
                b: "3000",
                c: "5000",
                d: "10000"
            },
            correctAnswer: "b"
        },
        {
            question: "n Super Smash Bros. Brawl, what is the name of Link’s Final Smash?",
            answer: {
                a: "Triforce of Courage",
                b: "Master Sword Attack",
                c: "Triforce Slash",
                d: "Hylian Blitz"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is NOT a member of the Locomo race in Spirit Tracks?",
            answers: {
                a: "Byrne",
                b: "Cole",
                c: "Gage",
                d: "Anjean"
            },
            correctAnswer: "b"
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