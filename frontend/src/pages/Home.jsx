import React from "react";
import NavbarHome from "../components/Navigation/Nav-Home";
import Footer from "../components/Navigation/Footer.jsx";
import { CiSearch } from "react-icons/ci";
import "../styles/sass/Home.scss";
import ProductCard from "../components/Products/ProductCard.jsx";
import products from "../data/Products.js";
import CategoryCard from "../components/Products/CategoryCard.jsx";

const Home = () => {
  const uniqueCategories = [
    ...new Set(products.map((product) => product.productCategory)),
  ];

  const productCards = products.map((product) => {
    return <ProductCard key={product.productId} product={product} />;
  });

  const categoryCards = uniqueCategories.map((category, index) => {
    return <CategoryCard key={index} category={category} />;
  });

  return (
    <div>
      <NavbarHome />
      <div className="homepage">
        <div className="banner">
          <div className="search">
            {/* <CiSearch />
            <input type="text" placeholder="Search Products" /> */}
          </div>
        </div>
        <div className="newly-listed">
          <div className="heading">
            <span className="section-title">Newly Listed</span>
            <div className="primary-btn">Shop All Products</div>
          </div>

          <hr />
          <div className="product-list">{productCards}</div>
        </div>
        <div className="product-categories">
          <div className="category-container">
            <div className="heading">
              <span className="section-title">Categories</span>
            </div>
            <div className="category-cards"> {categoryCards}</div>
          </div>
        </div>
        <div className="just-for-you">
          <div className="heading">
            <span className="section-title">Just For You</span>
            <div className="primary-btn">Shop All Products</div>
          </div>
          <hr />
          <div className="product-list">{productCards}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
