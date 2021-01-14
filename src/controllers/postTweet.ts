import twitter from '../twitter';

export default function postTweet(status: string): void {
  twitter
    .post('statuses/update', {
      status,
    })
    .then(() => {
      console.log('tweeted successfully');
    })
    .catch(err => {
      console.log(err);
    });
}
