// =========================
// QUIZMASTER PRO
// =========================


// Navbar Shadow

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 8px 25px rgba(0,0,0,0.15)";

}
else{

header.style.boxShadow =
"0 2px 15px rgba(0,0,0,0.08)";

}

});


// Scroll Reveal Animation

const revealElements =
document.querySelectorAll(
".quiz-card, .feature-card, .stat-card"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

revealElements.forEach(el=>{

observer.observe(el);

});


// Login Button

const loginBtn =
document.querySelector(".login-btn");

if(loginBtn){

loginBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.location.href =
"login.html";

});

}


// CTA Button Animation

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0px)";

});

});


// Quiz Card Hover

const quizCards =
document.querySelectorAll(".quiz-card");

quizCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});


// Welcome Message

window.addEventListener("load",()=>{

console.log(
"QuizMaster Pro Loaded Successfully"
);

});


// Counter Animation

const counters =
document.querySelectorAll(".stat-card h3");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
counter.innerText.replace(/\D/g,'');

let current =
+counter.getAttribute("data-count") || 0;

const increment =
target / 50;

if(current < target){

current += increment;

counter.setAttribute(
"data-count",
current
);

counter.innerText =
Math.ceil(current) +
counter.innerText.replace(/[0-9]/g,'');

setTimeout(updateCounter,30);

}

};

updateCounter();

});

// Quiz Creation Form

const quizForm =
document.getElementById("quizForm");

if(quizForm){

quizForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Quiz Created Successfully!"
);

quizForm.reset();

});

}

// Quiz Submission

const quizAttemptForm =
document.getElementById("quizAttemptForm");

if(quizAttemptForm){

quizAttemptForm.addEventListener("submit",(e)=>{

e.preventDefault();

let score = 0;

const correctAnswers =
document.querySelectorAll(
'input[value="correct"]:checked'
);

score = correctAnswers.length;

localStorage.setItem(
"quizScore",
score
);

window.location.href =
"results.html";

});

}

// Quiz Results

const scoreDisplay =
document.getElementById("scoreDisplay");

if(scoreDisplay){

const score =
localStorage.getItem("quizScore") || 0;

const totalQuestions =
Number(localStorage.getItem("quizTotal")) || 3;

const percentage =
(score / totalQuestions) * 100;

scoreDisplay.innerText =
`${score} / ${totalQuestions}`;

document.getElementById(
"percentageText"
).innerText =
`${percentage}%`;

document.getElementById(
"progressBar"
).style.width =
`${percentage}%`;

const resultStatus =
document.getElementById(
"resultStatus"
);

if(percentage >= 60){

resultStatus.innerText =
"🎉 Congratulations! You Passed.";

}
else{

resultStatus.innerText =
"📚 Keep Learning. Try Again.";

}

}

// Login Form

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Login Successful!"
);

window.location.href =
"index.html";

});

}


// Register Form

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Registration Successful!"
);

registerForm.reset();

});

}

const quizQuestions = [

{
question:"Java is a _____ ?",
options:[
"Programming Language",
"Database",
"Browser",
"Operating System"
],
answer:"Programming Language"
},

{
question:"AWS S3 is used for?",
options:[
"Cloud Storage",
"Database",
"Networking",
"Virtual Machine"
],
answer:"Cloud Storage"
},

{
question:"Which keyword creates an object?",
options:[
"class",
"new",
"void",
"this"
],
answer:"new"
},

{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Markup Language",
"Home Tool Markup Language"
],
answer:"Hyper Text Markup Language"
},

{
question:"CSS is used for?",
options:[
"Styling",
"Database",
"Programming",
"Networking"
],
answer:"Styling"
}

];

// =====================
// Dynamic Quiz System
// =====================

const quizData = {

java:[
{
q:"Java is a _____ ?",
options:["Programming Language","Database","Browser","OS"],
correct:"Programming Language"
},
{
q:"Which keyword creates an object?",
options:["class","new","void","this"],
correct:"new"
},
{
q:"JDBC is used for?",
options:["Networking","Database Connectivity","Cloud","File Handling"],
correct:"Database Connectivity"
}
],

html:[
{
q:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyper Transfer Language",
"High Text Language"
],
correct:"Hyper Text Markup Language"
},
{
q:"Which tag creates a link?",
options:["img","a","p","div"],
correct:"a"
},
{
q:"HTML is used for?",
options:["Structure","Styling","Database","Server"],
correct:"Structure"
}
],

aws:[
{
q:"AWS S3 is used for?",
options:["Storage","Database","VM","Network"],
correct:"Storage"
},
{
q:"AWS EC2 provides?",
options:["Virtual Servers","Storage","Email","DNS"],
correct:"Virtual Servers"
},
{
q:"CloudFront is used for?",
options:["CDN","Database","Storage","Analytics"],
correct:"CDN"
}
],

js:[
{
q:"JavaScript is used for?",
options:["Interactivity","Database","OS","Compiler"],
correct:"Interactivity"
},
{
q:"Which keyword declares variable?",
options:["let","table","form","link"],
correct:"let"
},
{
q:"DOM stands for?",
options:[
"Document Object Model",
"Data Object Model",
"Digital Object Management",
"Document Order Method"
],
correct:"Document Object Model"
}
]

};

const quizContainer =
document.getElementById("quizQuestions");

const quizTitle =
document.getElementById("quizTitle");

if(quizContainer){

const params =
new URLSearchParams(window.location.search);

const quizType =
params.get("quiz") || "java";

const questions =
quizData[quizType] || quizData.java;

quizTitle.innerText =
quizType.toUpperCase() + " Quiz";

let html = "";

questions.forEach((question,index)=>{

html += `

<div class="question-card">

<h3>${index+1}. ${question.q}</h3>

${question.options.map(option=>`<label> <input
type="radio"
name="q${index}"
value="${option}">
${option} </label>`).join("")}

</div>
`;

});

quizContainer.innerHTML = html;

}

const dynamicQuizForm =
document.getElementById("quizAttemptForm");

if(dynamicQuizForm){

dynamicQuizForm.addEventListener("submit",(e)=>{

e.preventDefault();

const params =
new URLSearchParams(window.location.search);

const quizType =
params.get("quiz") || "java";

const questions =
quizData[quizType] || quizData.java;

let score = 0;

questions.forEach((question,index)=>{

const selected =
document.querySelector(
`input[name="q${index}"]:checked`
);

if(selected &&
selected.value === question.correct){

score++;

}

});

localStorage.setItem(
"quizScore",
score
);

localStorage.setItem(
"quizTotal",
questions.length
);

window.location.href =
"results.html";

});

}
