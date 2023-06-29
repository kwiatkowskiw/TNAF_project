import {IProduct} from "../../types";

export const useProductApi = () => {
  async function getProducts(): Promise<IProduct[]> {
    return fetch("https://api.escuelajs.co/api/v1/products").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<IProduct[]>;
      }
    );
  }

  return { getProducts };
};
