import express, { Express, json } from 'express';

import requestsLogger from './middlewares/requestsLogger';
import errorsLogger from './middlewares/errorsLogger';

import dictionaryRouter from './entities/Dictionary/router';
import todosRouter from './entities/Todo/router';
import userRouter from './entities/User/router';
import notFoundHandler from './middlewares/notFoundHandler';

const initalizeApp = () => {
  const app: Express = express();

  // Middlewares
  app.use(json());
  app.use(requestsLogger);

  // Routers
  app.use('/dictionary', dictionaryRouter)
  app.use('/todos', todosRouter);
  app.use(userRouter);
  app.use(notFoundHandler);

  // Errors
  app.use(errorsLogger);

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
};

export default initalizeApp;
