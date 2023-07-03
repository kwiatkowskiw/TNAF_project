export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
};

export type ICategory = {
  id: string;
  name: string;
  image: string;
};

export type IPriceFilter = {
  price_min: string;
  price_max: string;
};

export type IFilter = {
  categoryId: number | null;
  price_min: string | null;
  price_max: string | null;
};
