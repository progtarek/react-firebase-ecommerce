import React, { useContext, useEffect } from "react";
import { ProductCard } from "../components/Product/ProductCard";
import "./shop.scss";
import { CartContext } from "../contexts/cart.context";

import SHOP_DATA from "../shop-data.json";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.util";
import { CategoriesContext } from "../contexts/categories.context";
import { Link } from "react-router-dom";

export const Categories = () => {
  const cartContext = useContext(CartContext);
  const categoriesContext = useContext(CategoriesContext);
  const { categories, setCategories } = categoriesContext;

  useEffect(() => {
    (async () => {
      await addCollectionAndDocuments("categories", SHOP_DATA);
      const res = await getCategoriesAndDocuments();
      setCategories(res);
    })();
  }, [setCategories]);

  return (
    <div className="container ">
      {Object.keys(categories).map((category, index) => (
        <div className="category-container" key={index}>
          <h2>
            <Link to={category} className="category-title">
              {" "}
              {category}
            </Link>
          </h2>
          <div className="category-items-container">
            {categories[category].map((item) => (
              <ProductCard
                {...item}
                key={item.id}
                addToCart={() => cartContext.addItemToCart(item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
