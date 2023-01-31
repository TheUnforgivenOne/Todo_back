import express, { Express, json } from 'express';

import requestsLogger from './middlewares/requestsLogger';
import errorsLogger from './middlewares/errorsLogger';

import todosRouter from './entities/Todo/router';
import notFoundHandler from './middlewares/notFoundHandler';

const initalizeApp = () => {
  const app: Express = express();

  // Middlewares
  app.use(json());
  app.use(requestsLogger);

  // Routers
  app.use(todosRouter);
  app.use(notFoundHandler);

  // Errors
  app.use(errorsLogger);

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
};

export default initalizeApp;
