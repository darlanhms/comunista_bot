import checkTweetedWord from './checkTweetedWord';
import findRandomWord from './findRandomWord';
import postTweet from './postTweet';
import saveNewUsedWord from './saveUsedWord';

export default async function saySomethingIsCommunist(): Promise<void> {
  const randomWord = await findRandomWord();

  const wasWordTweeted = await checkTweetedWord(randomWord);

  if (wasWordTweeted) {
    saySomethingIsCommunist();
    return;
  }

  await saveNewUsedWord(randomWord.toUpperCase());

  postTweet(`${randomWord} é comunista`);
}
