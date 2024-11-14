"use client";
import React, { useContext } from "react";
import { CarList } from "../../components/list/List";
import { Pagination } from "../../components/pagination/Pagination";
import { CarsContext } from "@/providers/cars";

const ITEMS_PER_PAGE = 8;

const Root = () => {
  const { cars, setCurrentPage, currentPage } = useContext(CarsContext);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);
  const displayedCars = cars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      {displayedCars.length > 0 ? (
        <>
          <CarList cars={displayedCars} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page) => setCurrentPage(page)} />
        </>
      ) : null}
    </>
  );
};

export default Root;
