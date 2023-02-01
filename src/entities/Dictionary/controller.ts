import { Request, Response } from 'express';
import DictionaryService from './service';
import catchError from '../../decorators/catchError';

class DictionaryController {
  @catchError
  async read(req: Request, res: Response) {
    const key = req.params?.dictionaryKey;

    const dictionary = await DictionaryService.getDictionary(key);

    res.status(200).json({ [key ?? 'dictionary']: dictionary });
  }
}

export default new DictionaryController();
