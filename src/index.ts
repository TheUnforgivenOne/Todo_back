import * as dotenv from 'dotenv';
import express, { Express, json } from 'express';
import connectToMongo from './dataAccess';

import requestsLogger from './middlewares/requestsLogger';
import errorsLogger from './middlewares/errorsLogger';

import todosRouter from './entities/Todo/router';
import notFoundHandler from './middlewares/notFoundHandler';

// Inject dotenv configs
dotenv.config({ path: '.env.local' });
dotenv.config();

const app: Express = express();

// Middlewares
app.use(json());
app.use(requestsLogger);

// Routers
app.use(todosRouter);
app.use(notFoundHandler);

// Errors
app.use(errorsLogger);

(async () => {
  try {
    await connectToMongo();

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  } catch (err) {
    throw err;
  }
})();
