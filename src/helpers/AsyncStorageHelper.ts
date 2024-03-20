// AsyncStorageHelper.ts

import AsyncStorage from '@react-native-async-storage/async-storage';

let highScore = 0;

AsyncStorage.getItem('highScore').then(value => {
  if (value !== null) {
    highScore = parseInt(value, 10);
  }
});

const updateHighScore = (newScore: number): void => {
  if (newScore > highScore) {
    highScore = newScore;
    AsyncStorage.setItem('highScore', newScore.toString());
  }
};

export {highScore, updateHighScore};
