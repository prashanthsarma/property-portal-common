import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const logger = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`${req.route.path} - ${req.method}`)
    console.log(`Body: ${JSON.stringify(req.body)}`)
    
    const [oldWrite, oldEnd] = [res.write, res.end];
    const chunks: Buffer[] = [];

    (res.write as unknown) = function (chunk: ArrayBuffer | SharedArrayBuffer) {
      chunks.push(Buffer.from(chunk));
      (oldWrite as Function).apply(res, arguments);
    };

    (res.end as unknown) = function (chunk: ArrayBuffer | SharedArrayBuffer) {
      if (chunk) {
        chunks.push(Buffer.from(chunk));
      }
      const body = Buffer.concat(chunks).toString('utf8');
      console.log(new Date(), `  ↪ [${res.statusCode}]: ${body}`);
      (oldEnd as Function).apply(res, arguments);
    };
  }
  if (next) {
    next();
  }
};
