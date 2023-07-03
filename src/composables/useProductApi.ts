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

  async function filterProducts(
    filters: IFilter | undefined
  ): Promise<IProduct[]> {
    const url: string = getUrlByFilters(filters);
    console.log(url);
    return fetch(`https://api.escuelajs.co/api/v1/products/?${url}`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProduct[]>;
      }
    );
  }

  async function filterProductsByPage(
    filters: IFilter | null,
    page: number
  ): Promise<IProduct[]> {
    const url: string | null = getUrlByFilters(filters);
    return fetch(
      `https://api.escuelajs.co/api/v1/products/?${url}&offset=${page}&limit=6`
    ).then((response) => {
      if (!response.ok) {
        return null;
      }
      return response.json() as Promise<IProduct[]>;
    });
  }

  function getUrlByFilters(filters: IFilter | null): string | null {
    if (!filters) {
      return;
    }
    let url = "";
    for (const [key, value] of Object.entries(filters)) {
      if (!value) {
        continue;
      }
      if (url !== "") {
        url += "&";
      }
      const query: string = key.concat("=", value);
      url += query;
    }
    return url;
  }

  return {
    getProducts,
    getCategories,
    filterProducts,
    filterProductsByPage,
    getProductsByCategory,
  };
};
