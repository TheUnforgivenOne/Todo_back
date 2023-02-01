import { Schema, model } from 'mongoose';

interface IDictionary {
  priority: { [key: string]: string };
}

const Dictionary = new Schema<IDictionary>({
  priority: { type: Schema.Types.Mixed },
});

export default model<IDictionary>('Dictionary', Dictionary);
