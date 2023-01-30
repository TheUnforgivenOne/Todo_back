import { Request, Response, NextFunction } from 'express';

type CatchErrorType = (
  target: any,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) => void;

// catchError decorator handles errors inside RequestHandlers methods
const catchError: CatchErrorType = (target, propertyKey, descriptor) => {
  const method = descriptor.value;

  descriptor.value = function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    method.call(target, req, res, next).catch(next);
  };
};

export default catchError;
