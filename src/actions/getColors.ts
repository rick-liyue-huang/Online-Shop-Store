import { Color } from '@/types/interfaces';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
