export interface Image {
  id: string;
  urls: {
    small: string;
    full: string;
  };
  user: {
    name: string;
  };
  likes?: number;
  created_at?: string;
  alt_description?: string;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export type OnImageClick = (image: Image) => void;
