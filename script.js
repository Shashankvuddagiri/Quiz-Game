// Quiz data structure with difficulty levels
const quizData = {
    geography: {
        easy: [
            {
                question: "Which country has the largest population in South America?",
                options: ["Brazil", "Argentina", "Colombia", "Peru"],
                correct: 0,
                hint: "This country is also the largest in South America by area."
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correct: 2,
                hint: "This city is known for its advanced technology and is the most populous metropolitan area in the world."
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Gobi", "Antarctic", "Arabian"],
                correct: 2
            },
            {
                question: "Which is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "France", "United States", "United Kingdom"],
                correct: 1
            },
            {
                question: "What is the deepest ocean trench in the world?",
                options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"],
                correct: 0
            },
            {
                question: "Which country has the most natural lakes?",
                options: ["Canada", "Russia", "United States", "Finland"],
                correct: 0
            },
            {
                question: "What is the name of the world's largest island?",
                options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
                correct: 1
            },
            {
                question: "Which mountain range separates Europe from Asia?",
                options: ["Alps", "Himalayas", "Ural Mountains", "Caucasus Mountains"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the name of the world's largest living coral reef system?",
                options: ["Great Barrier Reef", "Belize Barrier Reef", "New Caledonia Barrier Reef", "Red Sea Coral Reef"],
                correct: 0
            },
            {
                question: "Which country has the most UNESCO World Heritage Sites?",
                options: ["China", "Italy", "Spain", "France"],
                correct: 1
            },
            {
                question: "What is the name of the world's largest salt flat?",
                options: ["Salar de Uyuni", "Bonneville Salt Flats", "Etosha Pan", "Makgadikgadi Pan"],
                correct: 0
            },
            {
                question: "Which country has the world's highest waterfall?",
                options: ["Brazil", "Venezuela", "South Africa", "Norway"],
                correct: 1
            },
            {
                question: "What is the name of the world's largest hot desert?",
                options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
                correct: 0
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Ag", "Fe", "Au", "Cu"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "What is the main component of the Sun?",
                options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
                correct: 1
            },
            {
                question: "Which of these is NOT a primary color?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: 3
            }
        ],
        medium: [
            {
                question: "What is the name of the force that keeps planets in orbit around the Sun?",
                options: ["Magnetic Force", "Gravitational Force", "Nuclear Force", "Electromagnetic Force"],
                correct: 1
            },
            {
                question: "Which element has the highest melting point?",
                options: ["Tungsten", "Titanium", "Platinum", "Iron"],
                correct: 0
            },
            {
                question: "What is the name of the process by which plants convert light energy into chemical energy?",
                options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
                correct: 1
            },
            {
                question: "What is the name of the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correct: 3
            },
            {
                question: "Which of these is NOT a type of electromagnetic radiation?",
                options: ["X-rays", "Radio waves", "Sound waves", "Gamma rays"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the name of the theoretical particle that gives mass to other particles?",
                options: ["Higgs Boson", "Neutrino", "Quark", "Lepton"],
                correct: 0
            },
            {
                question: "Which of these is NOT a fundamental force of nature?",
                options: ["Strong Nuclear Force", "Weak Nuclear Force", "Centrifugal Force", "Gravitational Force"],
                correct: 2
            },
            {
                question: "What is the name of the process by which a star converts hydrogen into helium?",
                options: ["Nuclear Fusion", "Nuclear Fission", "Radioactive Decay", "Chemical Reaction"],
                correct: 0
            },
            {
                question: "What is the name of the theory that describes the behavior of matter at the atomic and subatomic levels?",
                options: ["Relativity Theory", "Quantum Theory", "String Theory", "Chaos Theory"],
                correct: 1
            },
            {
                question: "Which of these elements is NOT a noble gas?",
                options: ["Helium", "Neon", "Chlorine", "Argon"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                correct: 2
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Greeks", "Romans", "Egyptians", "Mayans"],
                correct: 2
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Dorothy Hodgkin"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Which ancient wonder of the world was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis", "Mausoleum at Halicarnassus"],
                correct: 1
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Golda Meir"],
                correct: 0
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Byzantine Empire"],
                correct: 1
            },
            {
                question: "Who was the last Queen of France?",
                options: ["Marie Antoinette", "Catherine de' Medici", "Anne of Austria", "Eleanor of Aquitaine"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which ancient civilization built the city of Machu Picchu?",
                options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
                correct: 2
            },
            {
                question: "Who was the last Tsar of Russia?",
                options: ["Nicholas II", "Alexander III", "Peter the Great", "Catherine the Great"],
                correct: 0
            },
            {
                question: "Which treaty ended the Thirty Years' War?",
                options: ["Treaty of Versailles", "Peace of Westphalia", "Treaty of Paris", "Treaty of Utrecht"],
                correct: 1
            },
            {
                question: "Who was the first European to reach India by sea?",
                options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
                correct: 1
            },
            {
                question: "Which dynasty ruled China for the longest time?",
                options: ["Ming", "Qing", "Han", "Tang"],
                correct: 2
            }
        ]
    },
    sports: {
        easy: [
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["Brazil", "Germany", "France", "Argentina"],
                correct: 2
            },
            {
                question: "How many players are there in a standard soccer team?",
                options: ["9", "10", "11", "12"],
                correct: 2
            },
            {
                question: "Which sport is played at Wimbledon?",
                options: ["Tennis", "Cricket", "Golf", "Rugby"],
                correct: 0
            },
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
                correct: 1
            },
            {
                question: "How many players are there in a standard basketball team?",
                options: ["4", "5", "6", "7"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Who holds the record for most Olympic gold medals?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
                correct: 1
            },
            {
                question: "In which year did the first modern Olympic Games take place?",
                options: ["1896", "1900", "1904", "1908"],
                correct: 0
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Italy", "Brazil", "Argentina"],
                correct: 2
            },
            {
                question: "Who is known as 'The Greatest' in boxing?",
                options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
                correct: 1
            },
            {
                question: "Which country won the first Cricket World Cup?",
                options: ["Australia", "England", "West Indies", "India"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Who is the only player to have won the FIFA World Cup as both a player and a coach?",
                options: ["Franz Beckenbauer", "Mário Zagallo", "Didier Deschamps", "Zinedine Zidane"],
                correct: 1
            },
            {
                question: "Which athlete holds the world record for the men's 100-meter dash?",
                options: ["Usain Bolt", "Tyson Gay", "Asafa Powell", "Justin Gatlin"],
                correct: 0
            },
            {
                question: "In which year was the first Tour de France held?",
                options: ["1899", "1903", "1907", "1911"],
                correct: 1
            },
            {
                question: "Who is the only player to have won the Ballon d'Or five times?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
                correct: 1
            },
            {
                question: "Which country has won the most Olympic gold medals in history?",
                options: ["China", "Russia", "United States", "Great Britain"],
                correct: 2
            }
        ]
    },
    music: {
        easy: [
            {
                question: "Which instrument has 88 keys?",
                options: ["Guitar", "Violin", "Piano", "Drums"],
                correct: 2
            },
            {
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
                correct: 1
            },
            {
                question: "How many strings does a standard guitar have?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "Which band sang 'Bohemian Rhapsody'?",
                options: ["The Beatles", "Queen", "Led Zeppelin", "The Rolling Stones"],
                correct: 1
            },
            {
                question: "What is the name of the highest female singing voice?",
                options: ["Alto", "Tenor", "Soprano", "Bass"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "Which composer wrote 'The Four Seasons'?",
                options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
                correct: 2
            },
            {
                question: "What is the name of the first music video played on MTV?",
                options: ["Thriller", "Video Killed the Radio Star", "Billie Jean", "Like a Prayer"],
                correct: 1
            },
            {
                question: "Which instrument is known as the 'king of instruments'?",
                options: ["Violin", "Piano", "Organ", "Guitar"],
                correct: 2
            },
            {
                question: "Who composed the 'Moonlight Sonata'?",
                options: ["Mozart", "Beethoven", "Chopin", "Bach"],
                correct: 1
            },
            {
                question: "Which band's album 'Dark Side of the Moon' spent the most weeks on the Billboard charts?",
                options: ["The Beatles", "Pink Floyd", "Led Zeppelin", "The Rolling Stones"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the first opera ever written?",
                options: ["Orfeo", "Dafne", "Euridice", "L'Orfeo"],
                correct: 1
            },
            {
                question: "Which composer wrote the most symphonies?",
                options: ["Mozart", "Beethoven", "Haydn", "Bach"],
                correct: 2
            },
            {
                question: "What is the name of the first electronic musical instrument?",
                options: ["Theremin", "Synthesizer", "Ondes Martenot", "Trautonium"],
                correct: 0
            },
            {
                question: "Which composer was known as the 'Waltz King'?",
                options: ["Johann Strauss II", "Franz Schubert", "Frédéric Chopin", "Pyotr Tchaikovsky"],
                correct: 0
            },
            {
                question: "What is the name of the first rock and roll song to reach number one on the Billboard charts?",
                options: ["Rock Around the Clock", "Heartbreak Hotel", "Hound Dog", "Blue Suede Shoes"],
                correct: 0
            }
        ]
    },
    movies: {
        easy: [
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                correct: 2
            },
            {
                question: "Which movie won the first Academy Award for Best Picture?",
                options: ["Gone with the Wind", "Wings", "The Jazz Singer", "Sunrise"],
                correct: 1
            },
            {
                question: "Who directed 'Titanic'?",
                options: ["Steven Spielberg", "James Cameron", "George Lucas", "Christopher Nolan"],
                correct: 1
            },
            {
                question: "Which movie features the character Darth Vader?",
                options: ["Star Trek", "Star Wars", "Star Gate", "Star Dust"],
                correct: 1
            },
            {
                question: "Who played Jack in 'Titanic'?",
                options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Which movie was the first to be released in color?",
                options: ["The Wizard of Oz", "Gone with the Wind", "Becky Sharp", "Snow White"],
                correct: 2
            },
            {
                question: "Who directed 'The Godfather'?",
                options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Alfred Hitchcock"],
                correct: 1
            },
            {
                question: "Which movie won the most Academy Awards?",
                options: ["Titanic", "La La Land", "Ben-Hur", "The Lord of the Rings"],
                correct: 2
            },
            {
                question: "Who played the Joker in 'The Dark Knight'?",
                options: ["Jack Nicholson", "Joaquin Phoenix", "Heath Ledger", "Jared Leto"],
                correct: 2
            },
            {
                question: "Which movie was the first to be released in 3D?",
                options: ["Avatar", "House of Wax", "The Power of Love", "Bwana Devil"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What was the first feature-length animated movie?",
                options: ["Snow White", "Steamboat Willie", "Gertie the Dinosaur", "Fantasia"],
                correct: 0
            },
            {
                question: "Which movie was the first to be released in IMAX?",
                options: ["Tiger Child", "Rolling Stones at the Max", "The Dream Is Alive", "To Fly!"],
                correct: 0
            },
            {
                question: "Who was the first actor to win an Academy Award for a silent film?",
                options: ["Charlie Chaplin", "Emil Jannings", "Buster Keaton", "Harold Lloyd"],
                correct: 1
            },
            {
                question: "Which movie was the first to be released in 70mm?",
                options: ["Oklahoma!", "Around the World in 80 Days", "South Pacific", "Ben-Hur"],
                correct: 0
            },
            {
                question: "Who was the first female director to win an Academy Award?",
                options: ["Kathryn Bigelow", "Jane Campion", "Sofia Coppola", "Lina Wertmüller"],
                correct: 0
            }
        ]
    },
    "pop-culture": {
        easy: [
            {
                question: "Which social media platform was launched first?",
                options: ["Facebook", "Twitter", "Instagram", "TikTok"],
                correct: 0
            },
            {
                question: "Who is known as the 'Queen of Pop'?",
                options: ["Beyoncé", "Madonna", "Lady Gaga", "Taylor Swift"],
                correct: 1
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2020?",
                options: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"],
                correct: 1
            },
            {
                question: "What is the name of the most-followed person on Instagram?",
                options: ["Cristiano Ronaldo", "Kylie Jenner", "Selena Gomez", "Ariana Grande"],
                correct: 0
            },
            {
                question: "Which TV show has won the most Emmy Awards?",
                options: ["Friends", "Game of Thrones", "Saturday Night Live", "The Simpsons"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What was the first video to reach 1 billion views on YouTube?",
                options: ["Gangnam Style", "Baby", "Despacito", "See You Again"],
                correct: 1
            },
            {
                question: "Which social media platform introduced the 'Stories' feature first?",
                options: ["Facebook", "Instagram", "Snapchat", "Twitter"],
                correct: 2
            },
            {
                question: "Who was the first artist to have a music video played on MTV?",
                options: ["Michael Jackson", "The Buggles", "Madonna", "Duran Duran"],
                correct: 1
            },
            {
                question: "Which meme format became the most used in 2023?",
                options: ["Distracted Boyfriend", "Woman Yelling at Cat", "Drake Hotline Bling", "Pointing Spider-Man"],
                correct: 2
            },
            {
                question: "What was the first video game to be played in space?",
                options: ["Tetris", "Pong", "Space Invaders", "Asteroids"],
                correct: 0
            }
        ],
        hard: [
            {
                question: "Which social media platform was originally called 'TheFacebook'?",
                options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
                correct: 0
            },
            {
                question: "What was the first YouTube video ever uploaded?",
                options: ["Me at the zoo", "Baby", "Charlie bit my finger", "Evolution of Dance"],
                correct: 0
            },
            {
                question: "Which TV show holds the record for most-watched series finale?",
                options: ["Friends", "M*A*S*H", "Breaking Bad", "Game of Thrones"],
                correct: 1
            },
            {
                question: "What was the first emoji ever created?",
                options: ["Smile", "Heart", "Thumbs up", "Peace sign"],
                correct: 0
            },
            {
                question: "Which social media platform was the first to introduce the 'like' button?",
                options: ["Facebook", "Twitter", "Instagram", "MySpace"],
                correct: 3
            }
        ]
    },
    coding: {
        easy: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyper Transfer Markup Language",
                    "Hyper Text Modern Language"
                ],
                correct: 0
            },
            {
                question: "Which of these is NOT a JavaScript framework?",
                options: ["React", "Angular", "Django", "Vue"],
                correct: 2
            },
            {
                question: "What is the correct way to declare a variable in JavaScript?",
                options: ["variable x = 5;", "v x = 5;", "let x = 5;", "x = 5;"],
                correct: 2
            },
            {
                question: "Which of these is a CSS framework?",
                options: ["jQuery", "Bootstrap", "Node.js", "Express"],
                correct: 1
            },
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Cascading Style Sheets",
                    "Creative Style Sheets",
                    "Colorful Style Sheets"
                ],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Which of these is NOT a valid HTTP method?",
                options: ["GET", "POST", "SEND", "DELETE"],
                correct: 2
            },
            {
                question: "What is the purpose of the 'use strict' directive in JavaScript?",
                options: [
                    "To enable strict mode",
                    "To disable strict mode",
                    "To enable debugging",
                    "To disable debugging"
                ],
                correct: 0
            },
            {
                question: "Which of these is NOT a valid CSS selector?",
                options: [".class", "#id", "@element", "*"],
                correct: 2
            },
            {
                question: "What is the correct way to create a function in JavaScript?",
                options: [
                    "function:myFunction()",
                    "function myFunction()",
                    "function = myFunction()",
                    "function => myFunction()"
                ],
                correct: 1
            },
            {
                question: "Which of these is NOT a valid data type in JavaScript?",
                options: ["String", "Boolean", "Character", "Number"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is the time complexity of binary search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 1
            },
            {
                question: "Which of these is NOT a valid design pattern?",
                options: ["Singleton", "Observer", "Controller", "Factory"],
                correct: 2
            },
            {
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                options: [
                    "To refer to the current object",
                    "To create a new object",
                    "To delete an object",
                    "To modify an object"
                ],
                correct: 0
            },
            {
                question: "Which of these is NOT a valid HTTP status code?",
                options: ["200", "404", "500", "999"],
                correct: 3
            },
            {
                question: "What is the purpose of the 'async/await' syntax in JavaScript?",
                options: [
                    "To handle asynchronous operations",
                    "To create synchronous operations",
                    "To handle errors",
                    "To create loops"
                ],
                correct: 0
            }
        ]
    }
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.querySelector('.progress-bar');
const timeElement = document.getElementById('time');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const wrongAnswers = document.getElementById('wrong-answers');
const hintBtn = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');

// Quiz state
let currentCategory = '';
let currentDifficulty = '';
let currentQuestion = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let selectedOption = null;
let hintUsed = false;

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
hintBtn.addEventListener('click', showHint);

// Category selection
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category;
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        checkStartButton();
    });
});

// Difficulty selection
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentDifficulty = btn.dataset.difficulty;
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        checkStartButton();
    });
});

function checkStartButton() {
    startBtn.disabled = !(currentCategory && currentDifficulty);
}

// Functions
function startQuiz() {
    if (!currentCategory || !currentDifficulty) return;
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = quizData[currentCategory][currentDifficulty][currentQuestion];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    hintText.textContent = '';
    hintText.classList.remove('show');
    hintBtn.disabled = false;
    hintUsed = false;
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    updateProgress();
    resetTimer();
}

function showHint() {
    if (hintUsed) return;
    
    const question = quizData[currentCategory][currentDifficulty][currentQuestion];
    hintText.textContent = question.hint;
    hintText.classList.add('show');
    hintBtn.disabled = true;
    hintUsed = true;
    
    // Add a small time penalty for using a hint
    timeLeft = Math.max(5, timeLeft - 5);
    timeElement.textContent = timeLeft;
}

function selectOption(index) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    const options = optionsContainer.children;
    const correct = quizData[currentCategory][currentDifficulty][currentQuestion].correct;
    
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add(i === correct ? 'correct' : 'wrong');
        options[i].disabled = true;
    }
    
    if (index === correct) {
        score++;
    }
    
    clearInterval(timer);
    nextBtn.disabled = false;
    hintBtn.disabled = true;
}

function nextQuestion() {
    selectedOption = null;
    nextBtn.disabled = true;
    currentQuestion++;
    
    if (currentQuestion < quizData[currentCategory][currentDifficulty].length) {
        loadQuestion();
        startTimer();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    finalScore.textContent = score;
    correctAnswers.textContent = score;
    wrongAnswers.textContent = quizData[currentCategory][currentDifficulty].length - score;
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
    currentCategory = '';
    currentDifficulty = '';
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
    startBtn.disabled = true;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData[currentCategory][currentDifficulty].length) * 100;
    progressBar.style.width = `${progress}%`;
}

function startTimer() {
    timeLeft = 30;
    timeElement.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(-1); // Time's up, no correct answer
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeElement.textContent = timeLeft;
}

// Initialize
startBtn.disabled = true; 