import React from "react";
import { categoryData } from "../../../data/categoryData";
import classes from "./Categories.module.css";

const Categories = () => {
  console.log(categoryData);
  return (
    <>
      <div className={classes["category"]}>
        <div className={classes["top-head"]}>
          <p>Explore our Categories</p>
          <div></div>
        </div>
        <div className={classes["category-blocks"]}>
          {categoryData &&
            categoryData.length > 0 &&
            categoryData.map((category) => (
              <div key={category.id} className={classes["category-block"]}>
                <a href="/">
                  <div>
                    <div className={classes["category-image"]}>
                      <img src={category.img} alt="" />
                    </div>
                    <div className={classes["category-text"]}>
                      <p>{category.title}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
