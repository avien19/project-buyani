import React from "react";
import ProductCard from "../components/Products/ProductCard.jsx";
import products from "../data/Products.js";

const ProductList = () => {
  const productCards = products.map((product) => {
    return <ProductCard key={product.productId} product={product} />;
  });

  return <>{productCards}</>;
};

export default ProductList;
