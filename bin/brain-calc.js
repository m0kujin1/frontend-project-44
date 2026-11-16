#!/usr/bin/env node

import runGame from '../src/index.js';
import playCalc from '../src/games/calc.js';

const description = 'What is the result of the expression?';

runGame(description, playCalc);