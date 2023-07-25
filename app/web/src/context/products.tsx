import { createContext, ReactNode, useState } from "react";

export interface Products {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  shipment: string;
  image: string;
}

interface ProductsType {
    products: Products[];
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  }

interface ProductsProviderProps {
  children: ReactNode;
}
export const ContextProducts = createContext({} as ProductsType);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Products[]>([]);

  return (
    <ContextProducts.Provider
      value={{
        products,
        setProducts
      }}
    >
      {children}
    </ContextProducts.Provider>
  );
}
