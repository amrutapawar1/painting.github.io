import { useMemo, useState } from "react";
import { FilterContextData, FilterContext } from "./FilterContext";

interface ProviderProps {
  children: string | JSX.Element | JSX.Element[];
}

const INIT_FILTER_STATE = {
  price: {
    min: 500,
    max: 50000,
    currency: "inr",
  },
  brands: [],
  space: [],
  theme: [],
  color: "#FF0000",
};

export const FilterProvider = ({ children }: ProviderProps) => {
  const [filterState, setFilterState] =
    useState<FilterContextData>(INIT_FILTER_STATE);

  const setPrice = (price: FilterContextData['price'] | undefined) => {
    setFilterState({
      ...filterState,
      price: price ? { ...filterState.price, ...price } : INIT_FILTER_STATE.price,
    });
  };
  const setBrands = (brands: string[]) => {
    setFilterState({
      ...filterState,
      brands: [...brands],
    });
  };
  const setSpace = (space: string[]) => {
    setFilterState({
      ...filterState,
      space: [...space],
    });
  };
  const setTheme = (theme: string[]) => {
    setFilterState({
      ...filterState,
      theme: [...theme],
    });
  };
  const setColor = (color: string) => {
    setFilterState({
      ...filterState,
      color,
    });
  };
  const clearAll = (): void => {
    setFilterState(INIT_FILTER_STATE);
  };

  const ctx = useMemo(
    () => ({
      ...filterState,
      setBrands,
      setColor,
      setSpace,
      setPrice,
      setTheme,
      clearAll,
    }),
    [setBrands, setColor, setSpace, setPrice, setTheme, clearAll]
  );

  return (
    <FilterContext.Provider value={ctx}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
