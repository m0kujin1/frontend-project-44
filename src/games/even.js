import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils/random.js';

const isEven = (num) => num % 2 === 0;

const playEven = () => {
  const number = getRandomNumber(1, 100); 
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase().trim();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { answer, correctAnswer };
};

export default playEven;