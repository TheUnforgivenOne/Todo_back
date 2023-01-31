import { ErrorRequestHandler } from 'express';

const errorsLogger: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message });
  next(err);
};

export default errorsLogger;
