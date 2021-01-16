import cron from 'node-cron';
import saySomethingIsCommunist from '../controllers/saySomethingIsCommunist';

/**
 * Dizer que algo é comunista toda hora no minuto 0
 */
cron.schedule('0 * * * *', () => {
  saySomethingIsCommunist();
});
