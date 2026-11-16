import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const playCalc = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2);

  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return { answer, correctAnswer: String(correctAnswer) };
};

export default playCalc;