import { Schema, model } from 'mongoose';

interface IDictionary {
  priority: { [key: string]: string };
}

const DictionarySchema = new Schema<IDictionary>({
  priority: { type: Schema.Types.Mixed },
});

const DictionaryModel = model<IDictionary>('Dictionary', DictionarySchema);

export default DictionaryModel;
