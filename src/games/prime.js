import readlineSync from 'readline-sync';

const getRandomNumber = (min = 2, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, correctAnswer };
};

export default playPrime;