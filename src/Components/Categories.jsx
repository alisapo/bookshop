import React from "react";
import "../scss/categories.scss";

const Categories = ({ setCategory, filterBy }) => (
  <div className="categories">
    <div
      className="foreign"
      active={filterBy === "foreign"}
      onClick={setCategory.bind(this, "popular")}
    >
      Foreign
    </div>
    <div
      className="russian"
      active={filterBy === "russian"}
      onClick={setCategory.bind(this, "price_high")}
    >
      Russian
    </div>
  </div>
);

export default Categories;