export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
};

export type ICategory = {
  id: number;
  name: string;
  image: string;
};

export type IFilter = {
  categoryId: string | undefined;
  price_min: string | undefined;
  price_max: string | undefined;
};

export type IProductsPromise = {
  data: IProduct[];
  total: number;
};

export type IProductPromise = {
  data: IProduct;
  total?: number;
};

export type ICategoriesPromise = {
  data: ICategory[];
  total?: number;
};
