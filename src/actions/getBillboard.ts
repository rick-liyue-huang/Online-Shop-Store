import { Billboard } from '@/types/interfaces';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return {} as Billboard;
  }
};
