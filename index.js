let readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;



const quizQuestions = [{
  array:['Padfoot','Fluffy','Fang','The grim'],
  question: "What's the name of the dog guarding the Sorcerer’s Stone? ",
  answer: 'Fluffy'
}, {
   array:['Nimbus','Snitch','Bludger','Quaffel'],
  question: "In a Quidditch game, what type of ball is a Beater most likely to hit? ",
  answer: 'Bludger'
}, {
   array:['Stupefy','Wingardium Leviosa','Alohomora','Expelliarmus'],
  question: "What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone? ",
  answer: 'Wingardium Leviosa'
},
{
   array:['Acromantula','Voldemort','Boggart','Basilisk'],
  question: 'What kind of monster is released from the Chamber of Secrets? ',
  answer: 'Basilisk'
}, {
   array:['Rubeus Hagrid','Draco Malfoy','Tom Riddle','Harry Potter'],
  question: "Who is the Heir of Slytherin? ",
  answer: 'Tom Riddle'
},
{
   array:['Phoenix','Hippogriff','Unicorn','Dragon'],
  question: "Sirius Black escapes on what kind of fantastic beast in the Prisoner of Azkaban? ",
  answer: 'Hippogriff'
},
{
   array:['Luna Lovegood','Cho Chang','Fleur Delacour','Hermione Granger'],
  question: "Who was Harry's love interest before Ginny Weasley? ",
  answer: 'Cho Chang'
},
{
   array:['Maggie Smith','Alan Rickman','Judi Dench','Emma Thompson'],
  question: "Which of these award-winning and celebrated British actors has NOT appeared in a Harry Potter movie? ",
  answer: 'Judi Dench'
},
{
   array:['Grubblyplank','Hagrid','Dumbledore','Flitwick'],
  question: "Which Hogwarts teacher had to be re-cast after the actor playing this character died? ",
  answer: 'Dumbledore'
},{
   array:['Great Hall','Room of Requirement','Forbidden Forest','Shrieking Shack'],
  question: "Where does Dumbledore's Army practice? ",
  answer: 'Room of Requirement'
}];




// console.log(quizQuestions.length)

const welcome = () => {
  console.log(chalk.bgMagenta('How Well Do You Know the Harry Potter Movies?'));
  console.log(' ');

  const yourName = readlineSync.question(chalk.blue('Enter your name wizard! '));
  console.log(' ');

  console.log(chalk.blue(`Welcome ${chalk.bold.red(yourName)}, Let's see how well do you know the wizarding world `));
  console.log(' ');

  const letsBegin = readlineSync.question(chalk.blue(`Type ${chalk.bold.green('start')} to begin the quiz `));
  console.log(`      `)
  if (letsBegin === 'start') {
    
    for (let i = 0; i < quizQuestions.length; i++) {
      
      start(quizQuestions[i].array,quizQuestions[i].question, quizQuestions[i].answer);
    }

  }
}


const start = (array,questions, answers) => {
  console.log(array);
  let userInput = readlineSync.question(chalk.red(questions));
  console.log('\n');
  if (userInput.toLowerCase() === answers.toLowerCase()) {
    score++;
    console.log('Correct');
  } else {
    console.log('Wrong');
  }
  console.log(`Current Score : ${score}`);
  console.log(`      `)
}

const highScoreforQuiz = (score) => {
  console.log(chalk.underline(`Your Score is ${chalk.bold(score)}`));
  console.log('')
  console.log('Correct Answers:')
  for (let i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i].answer);
  }
}

welcome();
highScoreforQuiz(score, quizQuestions);
