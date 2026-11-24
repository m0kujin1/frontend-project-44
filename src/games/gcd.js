import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils/random.js';

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
  
  const answer = readlineSync.question('Your answer: ').trim();

  return { answer, correctAnswer: String(correctAnswer) };
};

export default playGcd;