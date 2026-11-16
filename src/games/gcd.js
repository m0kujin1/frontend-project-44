import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const playGcd = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, correctAnswer: String(correctAnswer) };
};

export default playGcd;