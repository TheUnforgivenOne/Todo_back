import connectToMongo from './dataAcess';
import initalizeApp from './app';

(async () => {
  try {
    await connectToMongo();

    initalizeApp();
  } catch (err) {
    throw err;
  }
})();
