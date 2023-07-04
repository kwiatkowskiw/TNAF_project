import type {
  ICategoriesPromise,
  IFilter,
  IProductPromise,
  IProductsPromise,
} from "../../types";

export const useProductApi = () => {
  async function getProducts(): Promise<IProductsPromise> {
    return fetch(`http://localhost:3000/products?_page=1&_limit=6`).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProductsPromise>;
      }
    );
  }

  async function getProduct(id: number): Promise<IProductPromise> {
    return fetch(`http://localhost:3000/products?id=${id}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<IProductPromise>;
    });
  }

  async function filterProducts(
    filters?: IFilter,
    page = 1
  ): Promise<IProductsPromise> {
    const url: string = getUrlByFilters(filters);
    return fetch(
      `http://localhost:3000/products?${url}&_page=${page}&_limit=6`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<IProductsPromise>;
    });
  }

  async function getCategories(): Promise<ICategoriesPromise> {
    return fetch(`http://localhost:3000/category`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ICategoriesPromise>;
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
    getProduct,
    getCategories,
    filterProducts,
  };
};
