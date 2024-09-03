import React, { useState } from "react";
import "../../styles/sass/ProductCard.scss";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { redirect, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.productId}`, { state: { product } });
  };

  const [isAdded, setIsAdded] = useState(false);

  const handleBayongClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="image-container">
        <div className="badge">{product.productTerms}</div>
        <img src={product.productImage} alt="productImage" />
      </div>
      <div className="card-body">
        <div className="product-details">
          <span className="product-name">{product.productName}</span>
          <span className="product-price">
            &#x20B1;{product.productPrice}/kg
          </span>
          <span className="product-quantity">{product.productQuantity} kg</span>
        </div>
        <div
          className={`add-to-bayong ${isAdded ? "added" : ""}`}
          onClick={handleBayongClick}
        >
          {isAdded ? <IoCheckmark /> : <CiShoppingBasket />}
        </div>
      </div>
      <hr />
      <div className="details-wrapper">
        <div className="product-details">
          <span className="product-location">
            <CiLocationOn />
            {product.productLocation}
          </span>
          <span className="harvest-date">
            <CiCalendarDate />
            {product.harvestTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
