/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return console.log(saving);
  } catch (error) {
    return console.log(error);
  }
})();
