import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = () => {
  const questionNumber = generateRandomNumber(0, 100);
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

const gameEven = () => {
  startGame(greetings, evenNumber);
};

export default gameEven;
