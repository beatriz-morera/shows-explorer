export interface Show {
  id: number;
  url: string;
  name: string;
  image: {
    original: string;
    medium: string;
  };
  genres: string[];
  officialSite: string;
  premiered: string;
  language: string;
}
