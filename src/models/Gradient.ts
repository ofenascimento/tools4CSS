import mongoose, { Schema, model, models, InferSchemaType } from 'mongoose';

const GradientSchema = new Schema({
  color1: { type: String, required: true },
  color2: { type: String, required: true },
  color3: { type: String, default: null },
  name: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

export type GradientDocument = InferSchemaType<typeof GradientSchema>;

export const GradientModel =
  models.Gradient || model('Gradient', GradientSchema);
