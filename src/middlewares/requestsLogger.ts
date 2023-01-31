import { RequestHandler } from 'express';

const requestsLogger: RequestHandler = (req, res, next) => {
  const date = new Date();

  console.log(`${date.toUTCString()} | ${req.method} | ${req.url}`);

  next();
};

export default requestsLogger;
