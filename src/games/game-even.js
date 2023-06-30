import { makeRandomNumber } from '../utils.js';
import makeGame from '../index.js';

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = () => {
  const questionNumber = makeRandomNumber(0, 100);
  const rigthAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionNumber, rigthAnswer];
};

const gameEven = () => {
  makeGame(greetings, evenNumber);
};

export default gameEven;