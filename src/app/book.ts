export interface Book {
  id: number;
  title: string;
  author: string;
  stars?: number;
  cover_image?: string;
  summary?: string;
  notes?: string;
}
