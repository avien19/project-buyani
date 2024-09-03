import React from "react";
import "../../styles/sass/Form.scss";
import boyAni from "../../assets/profiles/Boy Ani.png";
import chatCloud from "../../assets/profiles/chat-cloud.png";
import onionImage from "../../assets/products/onions.jpg";
import tomato from "../../assets/products/tomato-card.jpg";
import cabbageCard from "../../assets/products/cabbage-card.jpg";
import cabbage from "../../assets/products/cabbage.jpg";
import potato from "../../assets/products/potato.jpg";
import { FaCheck } from "react-icons/fa6";
import farmerCard from "../../assets/profiles/farmer-card.jpg";
import carrots from "../../assets/products/carrots.jpg";
import squash from "../../assets/products/squash.jpg";
import grab from "../../assets/profiles/grab.png";
import gcash from "../../assets/profiles/GCASH.png";

const FormHero = () => {
  return (
    <div className="hero">
      <div className="partner-services">
        <div className="logos-container">
          <img src={gcash} alt="" />
          <img src={grab} alt="" />
        </div>
        <p>Partner Services</p>
      </div>
      <div className="stats-card">
        <span className="percentage">20%</span>
        <span className="details">farmers helped every week</span>
      </div>
      <div className="product-card">
        <div className="product-container">
          <img src={onionImage} alt="Onions" />
        </div>
        <div className="card-details">
          <div className="product-details">
            <span className="prod-name">Red Onions</span>
            <span className="prod-price">&#x20B1; 45.00</span>
          </div>
          <button className="status-btn">
            <FaCheck /> Reserved
          </button>
        </div>
      </div>
      <div className="image-card1">
        <img src={farmerCard} alt="" />
      </div>
      <div className="product-table">
        <table>
          <thead>
            <th colspan="2">Product</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-img">
                  <img src={cabbage} alt="Cabbage" />
                </div>
              </td>
              <td>Cabbage</td>
              <td className="price">&#x20B1; 89.00</td>
            </tr>
            <tr>
              <td>
                <div className="table-img">
                  <img src={potato} alt="Potato" />
                </div>
              </td>
              <td>Potato</td>
              <td className="price">&#x20B1; 45.00</td>
            </tr>
            <tr>
              <td>
                <div className="table-img">
                  <img src={carrots} alt="Carrots" />
                </div>
              </td>
              <td>Carrots</td>
              <td className="price">&#x20B1; 60.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="product-card-chart">
        <span className="graph-title">Supply Monitoring</span>
        <div className="legend-container">
          <span className="legend-label">Cabbage</span>
          <div className="legend1"></div>

          <span className="legend-label">Onions</span>
          <div className="legend2"></div>
          <span className="legend-label">Tomato</span>
          <div className="legend3"></div>
        </div>
        <div className="bars">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
};

export default FormHero;
