"use client";
import { Car } from "@/interfaces/car";
import React, { createContext, ReactNode, useState } from "react";

interface IContext {
  cars: Car[];
  currentPage: number;
  setCars: (newCars: Car[]) => void;
  setCurrentPage: (page: number) => void;
}

interface IProps {
  data: Car[];
  children: ReactNode;
}

export const CarsContext = createContext<IContext>({
  cars: [],
  setCars: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});

export const FilteredCarsProvider = ({ children, data }: IProps) => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(data);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CarsContext.Provider value={{ cars: filteredCars, setCars: setFilteredCars, currentPage, setCurrentPage }}>
      {children}
    </CarsContext.Provider>
  );
};
