"use client";
import { useContext, useState } from "react";
import blackList from "../../assets/black_list.jpg";
import "./sidebar.style.css";
import { CarsContext } from "@/providers/cars";

export const Sidebar = () => {
  const { cars, setCurrentPage, setCars } = useContext(CarsContext);
  const [filter, setFilter] = useState("");

  const onFilter = (filter: string) => {
    if (filter === "price") {
      setCars([...cars].sort((a, b) => a.price - b.price));
      setCurrentPage(1);
    }

    if (filter === "year") {
      setCars([...cars].sort((a, b) => a.year - b.year));
      setCurrentPage(1);
    }
  };

  return (
    <div className="sidebar">
      <h3>Фильтры</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
        <option value="">Выберите фильтр</option>
        <option value="price">По цене</option>
        <option value="year">По году выпуска</option>
      </select>
      <button onClick={() => onFilter(filter)} className="filter-button">
        Применить
      </button>
      <div className="black_list">
        <img src={blackList.src} alt="black_list" />
      </div>
    </div>
  );
};
