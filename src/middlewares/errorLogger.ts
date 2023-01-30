import { ErrorRequestHandler } from 'express';

const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message });
  next(err);
};

export default errorLogger;
