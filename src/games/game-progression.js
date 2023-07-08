import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const greetings = 'What number is missing in the progression?';

const generationQuestion = (first, length, step, miss) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    arr.push(first + i * step);
  }
  arr[miss] = '..';

  return arr.join(' ');
};

const generationAnswer = (number, step, miss) => {
  let answer = number;

  for (let i = 0; i < miss; i += 1) {
    answer += step;
  }

  return String(answer);
};

const generationProgression = () => {
  const arrLength = 10;
  const missPosinion = generateRandomNumber(0, 9);
  const stepProgression = generateRandomNumber(1, 10);
  const firstNumber = generateRandomNumber(0, 100);
  const question = generationQuestion(firstNumber, arrLength, stepProgression, missPosinion);
  const correctAnswer = generationAnswer(firstNumber, stepProgression, missPosinion);

  return [question, correctAnswer];
};

const gameProgression = () => {
  startGame(greetings, generationProgression);
};

export default gameProgression;
