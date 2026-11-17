import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const playProgression = () => {

  const length = getRandomNumber(5, 10);

  const start = getRandomNumber(1, 20);

  const step = getRandomNumber(1, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, correctAnswer: String(correctAnswer) };
};

export default playProgression;