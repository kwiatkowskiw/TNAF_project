import type { ICategory, IFilter, IProduct } from "../../types";

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

  async function getProductsByFilters(filters: IFilter): Promise<IProduct[]> {
    const url: string = getUrlByFilters(filters);
    return fetch(`https://api.escuelajs.co/api/v1/products/?${url}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProduct[]>;
      }
    );
  }

  function getUrlByFilters(filters: IFilter): string {
    let url = "";
    for (const [key, value] of Object.entries(filters)) {
      if (!value) {
        continue;
      }
      if (url !== "") {
        url += "&";
      }
      const keyQuery: string = key;
      const query: string = keyQuery.concat("=", value);
      url += query;
    }
    return url;
  }
  return {
    getProducts,
    getCategories,
    getProductsByCategory,
    getProductsByFilters,
  };
};
