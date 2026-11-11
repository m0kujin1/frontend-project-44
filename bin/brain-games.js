#!/usr/bin/env node

import runGame from '../src/index.js';
import playEven from '../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(description, playEven);