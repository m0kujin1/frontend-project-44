import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEven = () => {
  const number = Math.floor(Math.random() * 100) + 1; // 1–100
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase().trim();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { answer, correctAnswer };
};

export default playEven;