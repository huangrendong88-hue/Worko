
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface Talent {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  location: string;
  experience: string;
}

export interface Institution {
  id: string;
  name: string;
  type: string;
  address: string;
  contact: string;
}

export interface LawPolicy {
  id: string;
  title: string;
  region: '国内' | '境外' | '国际';
  publishDate: string;
}
