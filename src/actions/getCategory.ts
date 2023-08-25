import { Category } from '@/types/interfaces';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return {} as Category;
  }
};
