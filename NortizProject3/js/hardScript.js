(function () {
    const myQuestions = [{
            question: "What drop do you get from Havel the Rock if you kill him?",
            answers: {
                a: "Havel’s Armor",
                b: "Havel’s Ring",
                c: "Titanite Shard",
                d: "Gold Pine Resin"
            },
            correctAnswer: "b"
        },
        {
            question: "What is Solaire looking for throughout the game?",
            answers: {
                a: "His Family",
                b: "Time off",
                c: "His own personal sun ",
                d: "His Father"
            },
            correctAnswer: "c"
        },
        {
            question: "What sorcerer is trapped in the cage hanging in Sen’s Fortress?",
            answers: {
                a: "Big Hat Logan",
                b: "Oswald of Carim",
                c: "Griggs of Vinheim",
                d: "Siegmeyer of Catarina"
            },
            correctAnswer: "a"
        },
        {
            question: "What’s the name of the thief who tries to get you to look over the ledge in The Tombs of Giants, claiming there’s plenty of loot down there?",
            answers: {
                a: "Patches the Hyena",
                b: "Rickert of Vinheim",
                c: "Andre of Astora",
                d: "Knight Lautrec"
            },
            correctAnswer: "a"
        },
        {
            question: "If you are in human form while near the bonfire in Blighttown, what NPC invades your world, weilding a Butcher’s Knife?",
            answers: {
                a: "Knight Kirk",
                b: "Maneater Mildred",
                c: "Laurentius of the Great Swamp",
                d: "Dusk of Oolacile"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the boss’s name in The Painted World of Ariamis?",
            answers: {
                a: "Stray Demon",
                b: "Capra",
                c: "Gwyn",
                d: "Priscilla the Crossbreed "
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the NPC the you can summon in the Catacombs to help fight Pinwheel?",
            answers: {
                a: "Knight Kirk",
                b: "Paladin Leeroy",
                c: "Lautrec",
                d: "Solaire"
            },
            correctAnswer: "b"
        },
        {
            question: "Who appears at Firelink after you ring the two Bells of Awakening?",
            answers: {
                a: "Crestfallen Warrior",
                b: "Sieglinde of Catarina",
                c: "Andre of Astora",
                d: "Kingseeker Frampt"
            },
            correctAnswer: "d"
        },
        {
            question: "Who is the only boss in the game that is also a summonable character in a different boss battle?",
            answers: {
                a: "Orestein & Smough",
                b: "Gaping Dragon",
                c: "Great Wolf Sif",
                d: "Taurus Demon"
            },
            correctAnswer: "c"
        },
        {
            question: "What two boss battles can you summon Witch Beatrice for help with?",
            answers: {
                a: "Taurus and Capra",
                b: "Quelaag and Ceaseless Discharge",
                c: "Gaping Dragon and Belltower Gargoyles",
                d: "Moonlight Butterfly and Four Kings"
            },
            correctAnswer: "d"
        },
        {
            question: "What item do you need to damage ghosts with normal weapons?",
            answers: {
                a: "Blooming Purple Moss",
                b: "Homeward Bone",
                c: "Transient Curse",
                d: "Estus Flask"
            },
            correctAnswer: "c"
        },
        {
            question: "What ring breaks if you ever remove it?",
            answers: {
                a: "Havel’s Ring",
                b: "Old Witch’s Ring",
                c: "Tiny Being’s Ring",
                d: "Ring of Favor and Protection"
            },
            correctAnswer: "d"
        },
        {
            question: "Which NPC served as a faithful knight to a goddess known for Fateful Beauty?",
            answers: {
                a: "Oscar",
                b: "Creighton",
                c: "Solaire",
                d: "Lautrec"
            },
            correctAnswer: "d"
        },
        {
            question: "Raime is known as the ...",
            answers: {
                a: "Guy with anger issues",
                b: "Big guy with big weapons",
                c: "Fume Knight",
                d: "Hot Headed Knight"
            },
            correctAnswer: "c"
        },
        {
            question: "How many Skeleton Lords were there?",
            answers: {
                a: "1",
                b: "4",
                c: "3",
                d: "2"
            },
            correctAnswer: "c"
        },
        {
            question: "Sir Alonne will commit ___ , if you kill him without suffering damage.",
            answers: {
                a: "Himself to prison",
                b: "Himself to your cause",
                c: "Seppuku",
                d: "Sudoku"
            },
            correctAnswer: "c"
        },
        {
            question: "Aldia is the ___  of the ___ ____.",
            answers: {
                a: "King, First Meme",
                b: "Scholar, Magic School",
                c: "Leader, Old Farts",
                d: "Scholar, First Sin"
            },
            correctAnswer: "d"
        },
        {
            question: "The ___ was the first boss you faces in Dark Souls.",
            answers: {
                a: "Curse-Rotted Greatwood",
                b: "Asylum Demon",
                c: "Prowling Demon",
                d: "Big Butt Monster"
            },
            correctAnswer: "b"
        },
        {
            question: "Seath the Scaleless betrayed his fellow dragon because...",
            answers: {
                a: "The had what he didn’t, Immortality",
                b: "They bullied him when he was a wee dragonling",
                c: "He was bored",
                d: "They had way too much swag"
            },
            correctAnswer: "a"
        },
        {
            question: "The Lady of the Darkling was...",
            answers: {
                a: "A Boss",
                b: "Romance Option",
                c: "An Enemy",
                d: "A Firekeeper"
            },
            correctAnswer: "d"
        },
        {
            question: "What was the name of Xanthous King?",
            answers: {
                a: "Lloyd",
                b: "Jeremiah",
                c: "Alexandre",
                d: "Ricard"
            },
            correctAnswer: "b"
        },
        {
            question: "The Black Eye Orb was used to invade Lautrec, but it was also supposed to be used to invade… ",
            answers: {
                a: "Eygon of Carim",
                b: "Solaire",
                c: "Trusty Patches",
                d: "Shiva of the East"
            },
            correctAnswer: "d"
        },
        {
            question: "In Dark Souls (1), how many Throwing Knives were there?",
            answers: {
                a: "Just one",
                b: "There were two",
                c: "There weren’t any",
                d: "There were three"
            },
            correctAnswer: "b"
        },
        {
            question: "Transient Curses were used to...",
            answers: {
                a: "Troll other players into believing you were using some other consumable",
                b: "Allow oneself to become a ghost and evade damage",
                c: "Curse yourself, Though the effect is temporary",
                d: "Inflict a curse upon other players"
            },
            correctAnswer: "c"
        },
        {
            question: "If you did a No Death Run in Dark Souls II or a No Bonfire Run you would get...",
            answers: {
                a: "Invincibility and the ability to one-shot other players",
                b: "Fame and Glory everlasting",
                c: "Absolutely nothing",
                d: "Two rings that would make you right, and left hand weapons invisible"
            },
            correctAnswer: "d"
        },
        {
            question: "In Dark Souls II the Lifegem that restored the most amount of health was the...",
            answers: {
                a: "Altered Lifegem",
                b: "Old radiant Lifegem ",
                c: "Superb Lifegen",
                d: "Glowing Lifegem"
            },
            correctAnswer: "b"
        },
        {
            question: "To join the Dragon remnants Covenant, you would have to give ___ to Magerold of Lanafir.",
            answers: {
                a: "A Boss Soul",
                b: "A severed hand",
                c: "Your body",
                d: "A Petrified Dragon egg"
            },
            correctAnswer: "d"
        },
        {
            question: "The Champion’s Tablet allowed you to see the top ___ of the Covenant of Champions",
            answers: {
                a: "10",
                b: "100",
                c: "1000",
                d: "20"
            },
            correctAnswer: "b"
        },
        {
            question: "To reach Rank 3 in most of the covenants in Dark Souls II you would have to offer this amount of covenant offering",
            answers: {
                a: "60",
                b: "80",
                c: "30",
                d: "9"
            },
            correctAnswer: "c"
        },
        {
            question: "What was the name of the woman who gave you the banner that you use after Vordt to gain access to the Undead Settlement?",
            answers: {
                a: "Alyssa",
                b: "Alex",
                c: "Deadmeat",
                d: "Emma"
            },
            correctAnswer: "d"
        },
        {
            question: "In Dark Souls III Karla is known as a…",
            answers: {
                a: "Pyromancer",
                b: "Girl in a Ditch",
                c: "Witch",
                d: "Snitch"
            },
            correctAnswer: "c"
        },
        {
            question: "The NPC that sends you into the DLC of Dark Souls III is named...",
            answers: {
                a: "Gale",
                b: "Ghale",
                c: "Gael",
                d: "Gaal"
            },
            correctAnswer: "c"
        },
        {
            question: "In Dark Souls(1) we meet a cleric upon first entering lordran and firelink shrine, his name ?",
            answers: {
                a: "Pertrus of Thorolund",
                b: "Solaire of Astora",
                c: "Undead Merchant",
                d: "Forgotten King Alonne"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the use of a cracked red eye orb?",
            answers: {
                a: "Banish Phantoms",
                b: "Destroy the Four Kings",
                c: "Traverse the abyss",
                d: "Invade another player’s game"
            },
            correctAnswer: "d"
        },
        {
            question: "In Anor Londo we meet a friendly giant. What is his use?",
            answers: {
                a: "Smithing",
                b: "Opens a new path",
                c: "Creates rupees",
                d: "Nothing"
            },
            correctAnswer: "a"
        },
        {
            question: "When we return to the undead asylum, what is our reason for doing so?",
            answers: {
                a: "To kill the other boss in the area",
                b: "To retrieve a ring which aids in out travel",
                c: "Puts our good friend who aided in our escape out of his misery",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "In Sen’s fortress a weapon is found within a mimic. What classification is the weapon of?",
            answers: {
                a: "Spear ",
                b: "Sword",
                c: "Dagger",
                d: "Hammer"
            },
            correctAnswer: "a"
        },
        {
            question: "The blacksmith Andre is present in Dark Souls(1) as well as which other game in the series?",
            answers: {
                a: "3",
                b: "2",
                c: "BloodBorne",
                d: "Demon Souls"
            },
            correctAnswer: "a"
        },
        {
            question: "Dark Souls(1) had two bells of Awakening to enter Sen’s fortress. The first is at the top of the undead settlement, where is the second?",
            answers: {
                a: "Anor Londo",
                b: "The Depths",
                c: "Blighttown",
                d: "This is a trick question, there is no second one"
            },
            correctAnswer: "c"
        },
        {
            question: "What form of weapon is wielded by nearly every enemy in Seath’s place of dwelling?",
            answers: {
                a: "GreatScythes",
                b: "Axes",
                c: "Crystals",
                d: "None"
            },
            correctAnswer: "c"
        },
        {
            question: "Which enemy respawns exclusive to only the kiln of the first flame?",
            answers: {
                a: "Black Knights",
                b: "Silver Knights",
                c: "White Knights",
                d: "Trick question, they do not respawn"
            },
            correctAnswer: "d"
        },
        {
            question: "Who encourages the player not to link the fire?",
            answers: {
                a: "Darkstalker Kaathe",
                b: "Darkstalker Maathe",
                c: "Darkstalker Saathe",
                d: "Darkstalker Daathe"
            },
            correctAnswer: "a"
        },
        {
            question: "Who’s ruling the world in the first stage of the game?",
            answers: {
                a: "Animals",
                b: "Witches",
                c: "Humans",
                d: "Dragons"
            },
            correctAnswer: "d"
        },
        {
            question: "What is Manus searching for?",
            answers: {
                a: "A woman",
                b: "A crystal ball",
                c: "A sword",
                d: "A pendant"
            },
            correctAnswer: "d"
        },
        {
            question: "What are the checkpoints in this game called?",
            answers: {
                a: "Sacred Places",
                b: "Underground Dens",
                c: "Battle Stops",
                d: "Bonfires"
            },
            correctAnswer: "d"
        },
        {
            question: "What happens when a player dies in human form?",
            answers: {
                a: "It comes back with only half of health points",
                b: "The game starts over",
                c: "It comes back in a hollow form",
                d: "It comes back in a human form, but is too weak to fight"
            },
            correctAnswer: "c"
        },
        {
            question: "Who sacrifices himself to prolong the Age of Fire?",
            answers: {
                a: "Twyn",
                b: "Lwyn",
                c: "Dwyn",
                d: "Gwyn"
            },
            correctAnswer: "d"
        },
        {
            question: "Where is the player character located?",
            answers: {
                a: "In a locked tower",
                b: "In a dungeon",
                c: "In an undead asylum",
                d: "On a ship far away from the coast"
            },
            correctAnswer: "c"
        },
        {
            question: "What is Manus spreading?",
            answers: {
                a: "Terror",
                b: "Fire",
                c: "Plague",
                d: "Darkness"
            },
            correctAnswer: "d"
        },
        {
            question: "What do you do in this game?",
            answers: {
                a: "You explore",
                b: "You try out the machines from the past",
                c: "You go into the future",
                d: "You fight the pirates"
            },
            correctAnswer: "a"
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