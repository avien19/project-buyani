import React from "react";
import "../../styles/sass/ProductCard.scss";

const CategoryCard = ({ category }) => {
  const categoryImages = {
    Root: "url('https://images.unsplash.com/photo-1687199128890-ec18ff5da904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    Fruit:
      "url('https://images.unsplash.com/photo-1443131612988-32b6d97cc5da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    Leafy:
      "url('https://images.unsplash.com/photo-1607767582993-8431e01b0952?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    Flower:
      "url('https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    Stem: "url('https://images.unsplash.com/photo-1718833065511-7c80762ebfc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    Bulb: "url('https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  };

  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${
      categoryImages[category] || "url('/path/to/default-image.jpg')"
    }`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="product-category" style={cardStyle}>
      <p>{category}</p>
    </div>
  );
};

export default CategoryCard;
