import React from "react";
import NavbarProfile from "../components/Navigation/Nav-Profile";
import { useLocation } from "react-router-dom";
import "../styles/sass/ProductDetails.scss";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import sellerIcon from "../assets/profiles/farmer-card.jpg";
import products from "../data/Products.js";
import ProductCard from "../components/Products/ProductCard.jsx";
import CategoryCard from "../components/Products/CategoryCard.jsx";
import Footer from "../components/Navigation/Footer.jsx";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const productCards = products.map((product) => {
    return <ProductCard key={product.productId} product={product} />;
  });



  return (
    <div className="product-detail-page">
      <NavbarProfile />
      <div className="product-container">
        <div className="product-card-header">
          <div className="product-header-name">
            <p>{product.productName}</p>
          </div>
          <div className="product-tabs">
            <button className="details-btn">General Info</button>
            <button className="details-btn">Product Details</button>
            <button className="details-btn">Reviews</button>
          </div>
          <hr className="divider" />
        </div>
        <div className="main-details-container">
          <div className="images-container">
            <div className="selected-image">
              <img src={product.productImage} alt="" />
            </div>
            <div className="product-assets">
              <img src={product.productImage} alt="" />
              <img src={product.productImage} alt="" />
              <img src={product.productImage} alt="" />
              <img src={product.productImage} alt="" />
            </div>
          </div>
          <div className="product-info-container">
            <span className="product-price">Php {product.productPrice}.00</span>
            <span className="reviews">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </span>
            <select name="language" id="language">
              <option value="en">Bulk</option>
              <option value="tl">Partial</option>
            </select>
            <div className="primary-btn">Add to Bayong</div>
            <div className="primary-btn">CheckOut</div>
            <div className="primary-btn">Contact Seller</div>
            <div className="delivery-details">
              
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="similar">
        <div className="heading">
          <span className="section-title">Similar</span>
          <div className="primary-btn">Shop All Products</div>
        </div>
        <hr />
        <div className="product-list">{productCards}</div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
