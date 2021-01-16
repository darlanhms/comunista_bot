import { getFile } from '../utils/aws';
import { USED_WORDS_FILE } from '../utils/constants';

/**
 * returns true if word was already tweeted and return false if word wasn't tweeted
 */
export default async function checkTweetedWord(desiredWord: string): Promise<boolean> {
  const fileBuffer = await getFile(USED_WORDS_FILE);

  const words = fileBuffer.toString().split('\r\n');

  if (words && Array.isArray(words) && words.length) {
    const doesWordWasTweeted = words.find(
      word => String(word).toLowerCase() === String(desiredWord).toLowerCase(),
    );

    if (doesWordWasTweeted) {
      return true;
    }
  }

  return false;
}
