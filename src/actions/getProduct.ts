import { Product } from '@/types/interfaces';
import axios from 'axios';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return {} as Product;
  }
};
