import type { ICategories, IFilter, IProducts } from "../../types";

export const useProductApi = () => {
  async function getProducts(): Promise<IProducts> {
    return fetch(`http://localhost:3000/products?_page=1&_limit=6`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProducts>;
      }
    );
  }

  async function filterProducts(
    filters?: IFilter,
    page = 1
  ): Promise<IProducts> {
    const url: string = getUrlByFilters(filters);
    return fetch(
      `http://localhost:3000/products?${url}&_page=${page}&_limit=6`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<IProducts>;
    });
  }

  async function getCategories(): Promise<ICategories> {
    return fetch(`http://localhost:3000/category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ICategories>;
    });
  }

  function getUrlByFilters(filters: IFilter | undefined): string {
    if (!filters) {
      return "";
    }
    let url = "";
    for (const value of Object.values(filters)) {
      if (!value) {
        continue;
      }
      if (url !== "") {
        url += "&";
      }
      url += value;
    }
    return url;
  }

  return {
    getProducts,
    getCategories,
    filterProducts,
  };
};
