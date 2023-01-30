import express, { RequestHandler } from 'express';

const requestLogger: RequestHandler = (req, res, next) => {
  const date = new Date();

  console.log(`${date.toUTCString()} | ${req.method} | ${req.url}`);

  next();
};

export default requestLogger;
