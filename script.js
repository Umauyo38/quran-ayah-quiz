// ==========================================
// QUR'AN AYAH QUIZ
// Surah 45 - Al-Jathiyah
// to Surah 114 - An-Nas
// ==========================================

// ---------- SURAH DATA ----------

const surahs = [
    { number: 45, arabic: "الجاثية", name: "Al-Jāthiyah", ayahs: 37 },
    { number: 46, arabic: "الأحقاف", name: "Al-Ahqāf", ayahs: 35 },
    { number: 47, arabic: "محمد", name: "Muhammad", ayahs: 38 },
    { number: 48, arabic: "الفتح", name: "Al-Fath", ayahs: 29 },
    { number: 49, arabic: "الحجرات", name: "Al-Hujurāt", ayahs: 18 },
    { number: 50, arabic: "ق", name: "Qāf", ayahs: 45 },
    { number: 51, arabic: "الذاريات", name: "Adh-Dhāriyāt", ayahs: 60 },
    { number: 52, arabic: "الطور", name: "At-Tūr", ayahs: 49 },
    { number: 53, arabic: "النجم", name: "An-Najm", ayahs: 62 },
    { number: 54, arabic: "القمر", name: "Al-Qamar", ayahs: 55 },
    { number: 55, arabic: "الرحمن", name: "Ar-Rahmān", ayahs: 78 },
    { number: 56, arabic: "الواقعة", name: "Al-Wāqi‘ah", ayahs: 96 },
    { number: 57, arabic: "الحديد", name: "Al-Hadīd", ayahs: 29 },
    { number: 58, arabic: "المجادلة", name: "Al-Mujādilah", ayahs: 22 },
    { number: 59, arabic: "الحشر", name: "Al-Hashr", ayahs: 24 },
    { number: 60, arabic: "الممتحنة", name: "Al-Mumtahanah", ayahs: 13 },
    { number: 61, arabic: "الصف", name: "As-Saff", ayahs: 14 },
    { number: 62, arabic: "الجمعة", name: "Al-Jumu‘ah", ayahs: 11 },
    { number: 63, arabic: "المنافقون", name: "Al-Munāfiqūn", ayahs: 11 },
    { number: 64, arabic: "التغابن", name: "At-Taghābun", ayahs: 18 },
    { number: 65, arabic: "الطلاق", name: "At-Talāq", ayahs: 12 },
    { number: 66, arabic: "التحريم", name: "At-Tahrīm", ayahs: 12 },
    { number: 67, arabic: "الملك", name: "Al-Mulk", ayahs: 30 },
    { number: 68, arabic: "القلم", name: "Al-Qalam", ayahs: 52 },
    { number: 69, arabic: "الحاقة", name: "Al-Hāqqah", ayahs: 52 },
    { number: 70, arabic: "المعارج", name: "Al-Ma‘ārij", ayahs: 44 },
    { number: 71, arabic: "نوح", name: "Nūh", ayahs: 28 },
    { number: 72, arabic: "الجن", name: "Al-Jinn", ayahs: 28 },
    { number: 73, arabic: "المزمل", name: "Al-Muzzammil", ayahs: 20 },
    { number: 74, arabic: "المدثر", name: "Al-Muddaththir", ayahs: 56 },
    { number: 75, arabic: "القيامة", name: "Al-Qiyāmah", ayahs: 40 },
    { number: 76, arabic: "الإنسان", name: "Al-Insān", ayahs: 31 },
    { number: 77, arabic: "المرسلات", name: "Al-Mursalāt", ayahs: 50 },
    { number: 78, arabic: "النبأ", name: "An-Naba", ayahs: 40 },
    { number: 79, arabic: "النازعات", name: "An-Nāzi‘āt", ayahs: 46 },
    { number: 80, arabic: "عبس", name: "‘Abasa", ayahs: 42 },
    { number: 81, arabic: "التكوير", name: "At-Takwīr", ayahs: 29 },
    { number: 82, arabic: "الانفطار", name: "Al-Infitār", ayahs: 19 },
    { number: 83, arabic: "المطففين", name: "Al-Mutaffifīn", ayahs: 36 },
    { number: 84, arabic: "الانشقاق", name: "Al-Inshiqāq", ayahs: 25 },
    { number: 85, arabic: "البروج", name: "Al-Burūj", ayahs: 22 },
    { number: 86, arabic: "الطارق", name: "At-Tāriq", ayahs: 17 },
    { number: 87, arabic: "الأعلى", name: "Al-A‘lā", ayahs: 19 },
    { number: 88, arabic: "الغاشية", name: "Al-Ghāshiyah", ayahs: 26 },
    { number: 89, arabic: "الفجر", name: "Al-Fajr", ayahs: 30 },
    { number: 90, arabic: "البلد", name: "Al-Balad", ayahs: 20 },
    { number: 91, arabic: "الشمس", name: "Ash-Shams", ayahs: 15 },
    { number: 92, arabic: "الليل", name: "Al-Layl", ayahs: 21 },
    { number: 93, arabic: "الضحى", name: "Ad-Duhā", ayahs: 11 },
    { number: 94, arabic: "الشرح", name: "Ash-Sharh", ayahs: 8 },
    { number: 95, arabic: "التين", name: "At-Tīn", ayahs: 8 },
    { number: 96, arabic: "العلق", name: "Al-‘Alaq", ayahs: 19 },
    { number: 97, arabic: "القدر", name: "Al-Qadr", ayahs: 5 },
    { number: 98, arabic: "البينة", name: "Al-Bayyinah", ayahs: 8 },
    { number: 99, arabic: "الزلزلة", name: "Az-Zalzalah", ayahs: 8 },
    { number: 100, arabic: "العاديات", name: "Al-‘Ādiyāt", ayahs: 11 },
    { number: 101, arabic: "القارعة", name: "Al-Qāri‘ah", ayahs: 11 },
    { number: 102, arabic: "التكاثر", name: "At-Takāthur", ayahs: 8 },
    { number: 103, arabic: "العصر", name: "Al-‘Asr", ayahs: 3 },
    { number: 104, arabic: "الهمزة", name: "Al-Humazah", ayahs: 9 },
    { number: 105, arabic: "الفيل", name: "Al-Fīl", ayahs: 5 },
    { number: 106, arabic: "قريش", name: "Quraysh", ayahs: 4 },
    { number: 107, arabic: "الماعون", name: "Al-Mā‘ūn", ayahs: 7 },
    { number: 108, arabic: "الكوثر", name: "Al-Kawthar", ayahs: 3 },
    { number: 109, arabic: "الكافرون", name: "Al-Kāfirūn", ayahs: 6 },
    { number: 110, arabic: "النصر", name: "An-Nasr", ayahs: 3 },
    { number: 111, arabic: "المسد", name: "Al-Masad", ayahs: 5 },
    { number: 112, arabic: "الإخلاص", name: "Al-Ikhlās", ayahs: 4 },
    { number: 113, arabic: "الفلق", name: "Al-Falaq", ayahs: 5 },
    { number: 114, arabic: "الناس", name: "An-Nās", ayahs: 6 }
];


// ---------- GAME VARIABLES ----------

let questions = [];
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

let questionCount = 10;
let difficulty = "easy";

let timerValue = 15;
let timerInterval = null;
let answered = false;


// ---------- SCREEN ELEMENTS ----------

const welcomeScreen = document.getElementById("welcome-screen");
const settingsScreen = document.getElementById("settings-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const beginBtn = document.getElementById("begin-btn");
const nextBtn = document.getElementById("next-btn");

const playAgainBtn = document.getElementById("play-again-btn");
const changeSettingsBtn = document.getElementById("change-settings-btn");

const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");

const progressBar = document.getElementById("progress-bar");
const timerElement = document.getElementById("timer");

const surahNumber = document.getElementById("surah-number");
const surahArabic = document.getElementById("surah-arabic");
const surahName = document.getElementById("surah-name");

const answerButtons = document.querySelectorAll(".answer-btn");

const feedback = document.getElementById("feedback");


// ---------- SCREEN FUNCTION ----------

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


// ---------- START BUTTON ----------

startBtn.addEventListener("click", function() {
    showScreen(settingsScreen);
});


// ---------- QUESTION COUNT ----------

document.querySelectorAll(".question-count").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".question-count").forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        questionCount = Number(button.dataset.count);
    });

});


// ---------- DIFFICULTY ----------

document.querySelectorAll(".difficulty").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".difficulty").forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        difficulty = button.dataset.level;
    });

});


// Select default settings

document.querySelector('.question-count[data-count="10"]')
    .classList.add("selected");

document.querySelector('.difficulty[data-level="easy"]')
    .classList.add("selected");


// ---------- BEGIN QUIZ ----------

beginBtn.addEventListener("click", function() {

    startQuiz();

});


// ---------- START QUIZ ----------

function startQuiz() {

    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    currentQuestion = 0;

    questions = createQuestions();

    showScreen(quizScreen);

    loadQuestion();

}


// ---------- CREATE QUESTIONS ----------

function createQuestions() {

    let pool = [...surahs];

    // Shuffle all Surahs

    pool.sort(function() {
        return Math.random() - 0.5;
    });


    // Difficulty selection

    if (difficulty === "easy") {

        pool.sort(function(a, b) {
            return a.ayahs - b.ayahs;
        });

        pool = pool.slice(0, 40);

        pool.sort(function() {
            return Math.random() - 0.5;
        });

    }

    else if (difficulty === "medium") {

        pool.sort(function() {
            return Math.abs(a.ayahs - 30) - Math.abs(b.ayahs - 30);
        });

        pool = pool.slice(0, 50);

        pool.sort(function() {
            return Math.random() - 0.5;
        });

    }

    // Hard uses all Surahs


    // Make sure requested number does not exceed available Surahs

    return pool.slice(0, Math.min(questionCount, pool.length));

}


// ---------- LOAD QUESTION ----------

function loadQuestion() {

    clearInterval(timerInterval);

    answered = false;

    feedback.textContent = "";
    feedback.className = "feedback";

    nextBtn.style.display = "none";

    answerButtons.forEach(function(button) {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });


    const question = questions[currentQuestion];


    // Question information

    surahNumber.textContent = "Surah " + question.number;

    surahArabic.textContent = question.arabic;

    surahName.textContent = question.name;


    questionNumber.textContent =
        "Question " + (currentQuestion + 1) +
        " / " + questions.length;


    scoreElement.textContent =
        "Score: " + score;


    // Progress

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressBar.style.width = progress + "%";


    // Create three options

    const options = createOptions(question.ayahs);


    answerButtons.forEach(function(button, index) {

        button.textContent = options[index];

        button.dataset.answer = options[index];

    });


    startTimer();

}


// ---------- CREATE ANSWERS ----------

function createOptions(correctAnswer) {

    let options = [correctAnswer];

    let possibleNumbers = [];


    // Generate possible wrong answers

    for (let i = 1; i <= 100; i++) {

        if (i !== correctAnswer) {
            possibleNumbers.push(i);
        }

    }


    // Shuffle possible answers

    possibleNumbers.sort(function() {
        return Math.random() - 0.5;
    });


    // Add two wrong answers

    options.push(possibleNumbers[0]);
    options.push(possibleNumbers[1]);


    // Shuffle all three answers

    options.sort(function() {
        return Math.random() - 0.5;
    });


    return options;

}


// ---------- ANSWER CLICK ----------

answerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (answered) {
            return;
        }

        checkAnswer(Number(button.dataset.answer), button);

    });

});


// ---------- CHECK ANSWER ----------

function checkAnswer(selectedAnswer, selectedButton) {

    answered = true;

    clearInterval(timerInterval);


    const question = questions[currentQuestion];

    answerButtons.forEach(function(button) {

        button.disabled = true;

        if (Number(button.dataset.answer) === question.ayahs) {
            button.classList.add("correct");
        }

    });


    if (selectedAnswer === question.ayahs) {

        score++;

        correctAnswers++;

        selectedButton.classList.add("correct");

        feedback.textContent = "✅ Correct! Masha Allah!";
        feedback.className = "feedback correct";

    }

    else {

        incorrectAnswers++;

        selectedButton.classList.add("wrong");

        feedback.textContent =
            "❌ Incorrect! Correct answer: " +
            question.ayahs + " Ayahs";

        feedback.className = "feedback wrong";

    }


    scoreElement.textContent =
        "Score: " + score;


    nextBtn.style.display = "block";


    // Full progress after answering

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = progress + "%";

}


// ---------- TIMER ----------

function startTimer() {

    timerValue = 15;

    timerElement.textContent = timerValue;


    timerInterval = setInterval(function() {

        timerValue--;

        timerElement.textContent = timerValue;


        if (timerValue <= 0) {

            clearInterval(timerInterval);

            timeUp();

        }

    }, 1000);

}


// ---------- TIME UP ----------

function timeUp() {

    if (answered) {
        return;
    }

    answered = true;

    incorrectAnswers++;


    const question = questions[currentQuestion];


    answerButtons.forEach(function(button) {

        button.disabled = true;

        if (Number(button.dataset.answer) === question.ayahs) {
            button.classList.add("correct");
        }

    });


    feedback.textContent =
        "⏰ Time's up! Correct answer: " +
        question.ayahs + " Ayahs";

    feedback.className = "feedback wrong";


    nextBtn.style.display = "block";

}


// ---------- NEXT QUESTION ----------

nextBtn.addEventListener("click", function() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showResults();

    }

    else {

        loadQuestion();

    }

});


// ---------- SHOW RESULTS ----------

function showResults() {

    clearInterval(timerInterval);

    showScreen(resultScreen);


    const total = questions.length;

    const percentage = Math.round(
        (correctAnswers / total) * 100
    );


    document.getElementById("total-result").textContent =
        total;

    document.getElementById("correct-result").textContent =
        correctAnswers;

    document.getElementById("incorrect-result").textContent =
        incorrectAnswers;

    document.getElementById("final-score").textContent =
        score + " / " + total;

    document.getElementById("percentage").textContent =
        percentage + "%";


    let message = "";


    if (percentage === 100) {

        message =
            "🌟 Masha Allah! Excellent! May Allah increase you in beneficial knowledge.";

    }

    else if (percentage >= 80) {

        message =
            "🌟 Masha Allah! Very good result. Keep learning the Qur'an.";

    }

    else if (percentage >= 60) {

        message =
            "👏 Good effort! Keep studying and improving your Qur'an knowledge.";

    }

    else {

        message =
            "📖 Keep learning! Every step you take in learning the Qur'an is valuable.";

    }


    document.getElementById("result-message").textContent =
        message;

}


// ---------- PLAY AGAIN ----------

playAgainBtn.addEventListener("click", function() {

    startQuiz();

});


// ---------- CHANGE SETTINGS ----------

changeSettingsBtn.addEventListener("click", function() {

    showScreen(settingsScreen);

});


// ==========================================
// END OF SCRIPT
// ==========================================