import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({ error: `Endpoint ${req.url} not existing` });
};

export default notFoundHandler;
