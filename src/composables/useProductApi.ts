import { Product } from "@/composables/modal/interfaces";

export const useProductApi = () => {
  async function getProducts(): Promise<Product[]> {
    return fetch("https://api.escuelajs.co/api/v1/products").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<Product[]>;
      }
    );
  }

  return { getProducts };
};
