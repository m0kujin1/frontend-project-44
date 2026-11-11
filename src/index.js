import greetUser from './cli.js';

const roundsCount = 3;

const runGame = (description, playRound) => {
  const name = greetUser();
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { answer, correctAnswer } = playRound();

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;