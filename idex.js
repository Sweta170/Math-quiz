//create a math question 
//math question will have a random generated question
//question type multiplication with random number range 1-10
//answer will be the product of the random range and the random number
//user willl have to answer question
//on submit answer will be compared with random generated answer
//if answer will be correct than score will be incremented
//if answer will be wrong than score will be decremented


const questionEl = document.getElementById("question");

const questionFormEl = document.getElementById("questionForm");

const scoreEl = document.getElementById("score");


let storedAnswer;
let score = 0;

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
};


const generateQuestion = () =>{
    const randomNumber1 = randomNumber(1,10);
    const randomNumber2 = randomNumber(1,10);
    const question = `Q. what is ${randomNumber1} multiply by ${randomNumber2} ?`;
    const answer = randomNumber1 * randomNumber2;
    return {question,answer};
};

const showQuestion = () => {
    const {question,answer} = generateQuestion();
    questionEl.innerText = question;
    storedAnswer = answer;
};

showQuestion();

const checkAnswer = (event) =>{

    event.preventDefault();

    const formData =new FormData(questionFormEl);

    const userAnswer= +formData.get("answer");

    if(userAnswer === storedAnswer){
        score += 1;

    }else{
        score -= 1;
    }
    scoreEl.innerText = score;
    event.target.reset();
    // alert(`Correct Answer! Your Score is ${score}.`);
    setTimeout(()=>{
        showQuestion();},1500
        );
    // showQuestion();

    console.log("answer",userAnswer);

    
    //show the next question after a short delay
    
};
//add an event listener to our submit button that will call our function when clicked



    