import fs from 'fs';
import { WORDS_LENGHT } from '../utils/constants';

export default function findRandomWord(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile('src/utils/palavras.txt', (err, data) => {
      if (err) return reject(err);

      const stringifiedWords = Buffer.from(data).toString();

      const wordsArray = stringifiedWords.split('\r\n');

      const randomPosition = parseInt(String(Math.random() * WORDS_LENGHT), 10);

      return resolve(String(wordsArray[randomPosition]).toLowerCase());
    });
  });
}
