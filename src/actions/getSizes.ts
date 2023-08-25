import { Size } from '@/types/interfaces';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
