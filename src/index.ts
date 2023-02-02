import Repository from './Repository';
import initalizeApp from './app';

(async () => {
  try {
    await Repository.connectToMongo();

    initalizeApp();
  } catch (err) {
    throw err;
  }
})();
