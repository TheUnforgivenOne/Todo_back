import * as dotenv from 'dotenv';
import initalizeApp from './app';
import connectToMongo from './dataAccess';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

(async () => {
  try {
    await connectToMongo();
    initalizeApp();
  } catch (err) {
    throw err;
  }
})();
