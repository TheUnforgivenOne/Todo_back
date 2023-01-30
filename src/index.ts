import * as dotenv from 'dotenv';
import express, { Express } from 'express';
import connectToMogo from './dataAccess';

import requestLogger from './middlewares/requestLogger';
import errorLogger from './middlewares/errorLogger';

import todosRouter from './entities/Todo/router';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(requestLogger);

// Routers
app.use(todosRouter);

// Errors
app.use(errorLogger);

(async () => {
  try {
    await connectToMogo();

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    throw err;
  }
})();
