import twitter from '../twitter';

export default function postTweet(status: string): void {
  twitter
    .post('statuses/update', {
      status,
    })
    .then(() => {
      console.log('Tweeted successfully: ', status);
    })
    .catch(err => {
      console.error('Error when tweeting word: ', err.toString());
    });
}
