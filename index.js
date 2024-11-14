const subjects = [
    "The curious cat",
    "The sleepy dog",
    "The happy child",
    "The wise old owl",
    "The hungry lion"
];

const verbs = [
    "is running",
    "has eaten",
    "will sleep",
    "can fly",
    "should study"
];


const modifiers = [
    "very quickly",
    "extremely loudly",
    "quite slowly",
    "incredibly carefully",
    "really happily"
];

const quotes = [
    "The only way to do great work is to love what you do.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Believe you can and you're halfway there.",
    "The best way out is always through."
];

const authors = [
    "Steve Jobs",
    "Confucius",
    "Steve Jobs",
    "Theodore Roosevelt",
    "Robert Frost"
];

function randomBlock(element){
    let elementi = Math.floor(Math.random()*5);
    return element[elementi];
}
const message = document.querySelector('#message');
const button = document.querySelector('#start');
const motobutton = document.querySelector('#motivation');
const motopara = document.querySelector('#motopara');
const motoparaa = document.querySelector('#motoparaa');
button.addEventListener("click",()=>{
    message.innerHTML = ` ${randomBlock(subjects)} ${randomBlock(verbs)} ${randomBlock(modifiers)}`;
})

let clickCount = 0;

motobutton.addEventListener('click', (event)=>{
    clickCount++;
    if(clickCount < 5){
        motopara.innerHTML = quotes[clickCount];
        motoparaa.innerHTML = authors[clickCount];
    }
    else{
        clickCount = clickCount % 5;
    }
})

