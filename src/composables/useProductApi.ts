import type { ICategory, IProduct } from "../../types";

export const useProductApi = () => {
  async function getProducts(): Promise<IProduct[]> {
    return fetch(`https://api.escuelajs.co/api/v1/products`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProduct[]>;
      }
    );
  }

  async function getCategories(): Promise<ICategory[]> {
    return fetch(`https://api.escuelajs.co/api/v1/categories`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ICategory[]>;
      }
    );
  }

  async function getProductsByCategory(id: number): Promise<IProduct[]> {
    return fetch(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<IProduct[]>;
    });
  }

  return { getProducts, getCategories, getProductsByCategory };
};
