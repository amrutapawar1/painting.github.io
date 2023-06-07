import { createContext, useContext } from "react";

type Price = {
  min: number;
  max: number;
  currency: string;
};
export type FilterContextData = {
  price: Price;
  brands: string[];
  space: string[];
  theme: string[];
  color: string;
};

export type FilterContextUpdate = {
  setBrands: (brands: string[]) => void;
  setColor: (color: string) => void;
  setSpace: (space: string[]) => void;
  setPrice: (price?: Price) => void;
  setTheme: (theme: string[]) => void;
  clearAll: () => void;
};

const DEFAULT_FILTER_CONTEXT = {
  price: {
    min: 500,
    max: 50000,
    currency: "inr",
  },
  brands: [],
  space: [],
  theme: [],
  color: "#FF0000",
  setBrands: () => null,
  setColor: () => null,
  setSpace: () => null,
  setPrice: () => null,
  setTheme: () => null,
  clearAll: () => null,
};

export type FilterContextType = FilterContextData & FilterContextUpdate ;

export const FilterContext = createContext<FilterContextType>(DEFAULT_FILTER_CONTEXT);

const useFilters = () => useContext<FilterContextType>(FilterContext);

export default useFilters;