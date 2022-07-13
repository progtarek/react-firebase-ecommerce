import React, { useContext } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components/Product/ProductCard";
import { CartContext } from "../contexts/cart.context";
import { CategoriesContext } from "../contexts/categories.context";

export const CategoryDetails = () => {
  const { category } = useParams("category");
  const { categories } = useContext(CategoriesContext);
  const cartContext = useContext(CartContext);

  return (
    <div className="container category-details-container">
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        {category.toUpperCase()}
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
  );
};
