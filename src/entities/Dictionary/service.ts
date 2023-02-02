import Repository from '../../Repository';

class DictionaryService {
  async getDictionary(key?: string) {
    const dictionary = await Repository.DictionaryModel.findOne();

    return key ? dictionary[key] : dictionary;
  }
}

export default new DictionaryService();
