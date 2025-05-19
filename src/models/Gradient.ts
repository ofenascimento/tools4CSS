import { Schema, Document, models, model } from 'mongoose';

export interface GradientDocument extends Document {
  color1: string;
  color2: string;
  color3?: string | null;
  name: string;
  likes: number;
}

const GradientSchema = new Schema<GradientDocument>({
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  color3: { type: String, default: null },
  name: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

export const GradientModel =
  models.Gradient || model<GradientDocument>('Gradient', GradientSchema);
