import { NextApiRequest, NextApiResponse } from 'next';
import { GradientModel } from '../models/Gradient';
import { connectToDatabase } from '../libs/db';

export const getGradients = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const gradients = await GradientModel.find();

    for (let i = gradients.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gradients[i], gradients[j]] = [gradients[j], gradients[i]];
    }

    res.status(200).json(gradients);
  } catch (error) {
    console.error('Erro ao buscar gradientes:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export const createGradient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const { color1, color2, color3, name } = req.body;

    if (!color1 || !color2 || !name) {
      return res.status(400).json({ error: 'Os campos color1, color2 e name são obrigatórios' });
    }

    const newGradient = new GradientModel({ color1, color2, color3, name });
    await newGradient.save();

    res.status(201).json(newGradient);
  } catch (error) {
    console.error('Erro ao criar gradiente:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export const bulkUploadGradients = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const gradients = req.body;

    if (!Array.isArray(gradients)) {
      return res.status(400).json({
        error: 'O corpo da requisição deve ser um array de gradientes.',
      });
    }

    for (const gradient of gradients) {
      if (!gradient.color1 || !gradient.color2 || !gradient.name) {
        return res.status(400).json({
          error: 'Cada gradiente deve ter os campos color1, color2 e name.',
        });
      }
    }

    const insertedGradients = await GradientModel.insertMany(gradients);
    res.status(201).json(insertedGradients);
  } catch (error) {
    console.error('Erro ao fazer bulk upload de gradientes:', error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

export const likeGradient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const { id } = req.query;

    const gradient = await GradientModel.findById(id);
    if (!gradient) {
      return res.status(404).json({ error: 'Gradiente não encontrado' });
    }

    gradient.likes += 1;
    await gradient.save();
    res.json(gradient);
  } catch (error) {
    console.error('Erro ao atualizar like:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

export const dislikeGradient = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();
    const { id } = req.query;

    const gradient = await GradientModel.findById(id);
    if (!gradient) {
      return res.status(404).json({ error: 'Gradiente não encontrado' });
    }

    gradient.likes = Math.max(0, gradient.likes - 1);
    await gradient.save();

    res.json(gradient);
  } catch (error) {
    console.error('Erro ao remover like:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};
