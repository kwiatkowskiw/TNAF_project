export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
};

export type IProducts = {
  data: IProduct[];
  total: number;
};

export type ICategories = {
  data: ICategory[];
  total: number;
};

export type ICategory = {
  id: number;
  name: string;
  image: string;
};

export type IPriceFilter = {
  price_min: string;
  price_max: string;
};

export type IFilter = {
  categoryId: string | undefined;
  price_min: string | undefined;
  price_max: string | undefined;
};
