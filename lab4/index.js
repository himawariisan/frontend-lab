let mottoEl = document.getElementById('motto');
mottoEl.style.color = 'darkred';
mottoEl.style.fontWeight = '840';
let mottoText = mottoEl.innerHTML.trim();
mottoEl.innerHTML = '';

let pos = 0;

function typeMotto() {
    if (pos < mottoText.length) {
        mottoEl.innerHTML += mottoText.charAt(pos);
        pos++;
        setTimeout(typeMotto, 50);
    }
}
typeMotto();


// пункт 4 (загадки)
let riddles = [
    {
        question: "Andrew: I grow when you share me, but I vanish when you keep me to myself. What am I?",
        answers: ["knowledge"]
    },
    {
        question: "Mykola: I take what I’m given, do some magic and give you back something you expect. There’s many different versions of me and we originated from math. What am I?",
        answers: ["function", "a function"]
    },
    {
        question: "Roksolana: I live in every program, nobody wants me, and I am always being hunted. What am I?",
        answers: ["bug", "a bug"]
    },
    {
        question: "Ivan: I am hard to earn, easy to lose, and no deal works without me. What am I?",
        answers: ["trust"]
    }
];

let photos = document.querySelectorAll('.founder-photo');
let riddleOpen = false;

photos.forEach(function(photo, index) {

    photo.addEventListener('mouseover', function() {
        if (riddleOpen) {
            return;
        }
        riddleOpen = true;

        let riddle = riddles[index];
        let userAnswer = prompt(riddle.question);

        if (userAnswer !== null) {   // null - користувач натиснув cancel
            let cleaned = userAnswer.trim().toLowerCase();
            if (riddle.answers.includes(cleaned)) {
                alert("Correct! Well done!");
            } else {
                alert("Wrong answer. Try again!");
            }
        }
    });

    photo.addEventListener('mouseout', function() {
        riddleOpen = false;
    });
});


// пункт 5 - нічний режим (21:00 - 06:00) 
let hour = new Date().getHours();

if (hour >= 21 || hour < 6) {
    let allElements = document.querySelectorAll('*');

    allElements.forEach(function(el) {
        let bg = getComputedStyle(el).backgroundColor;

        if (bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') {
            return;
        }

        let parts = bg.match(/[\d.]+/g);
        let r = Math.round(parts[0] * 0.6);   // 0.6 = 100% - 40%
        let g = Math.round(parts[1] * 0.6);
        let b = Math.round(parts[2] * 0.6);
        let a = parts.length > 3 ? parts[3] : 1;   // зберігаємо прозорість

        el.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    });
}
