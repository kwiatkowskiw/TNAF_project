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
