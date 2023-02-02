import { DictionaryModel } from '../../dataAccess/index';

class DictionaryService {
  async getDictionary(key?: string) {
    const dictionary = await DictionaryModel.findOne();

    return key ? dictionary[key] : dictionary;
  }
}

export default new DictionaryService();
