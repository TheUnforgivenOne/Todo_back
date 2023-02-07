import { Schema, model } from 'mongoose';

interface IPriorities {
  [key: string]: string;
}

interface IDictionary {
  priority: IPriorities;
}

const DictionarySchema = new Schema<IDictionary>({
  priority: { type: Schema.Types.Mixed },
});

const DictionaryModel = model<IDictionary>('Dictionary', DictionarySchema);

export default DictionaryModel;
