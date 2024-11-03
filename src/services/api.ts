import axios from 'axios';
import { FetchImagesResponse } from '../types';

const MY_API_KEY = 'Wq4lQCMkjgCSQXk9AKXLT-ikcytdwbY69-YimKn7KmA';

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query,
          client_id: MY_API_KEY,
          page,
          per_page: 16,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
