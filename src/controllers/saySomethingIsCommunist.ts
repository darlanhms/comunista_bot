import findRandomWord from './findRandomWord';
import postTweet from './postTweet';

export default async function saySomethingIsCommunist(): Promise<void> {
  const randomWord = await findRandomWord();

  postTweet(`${randomWord} é comunista`);
}
