import React from "react";
import "../styles/sass/Landing.scss";
import { Fragment } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbCards } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { CiAlignBottom } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import boyAni from "../assets/profiles/Boy Ani.png";
import chatCloud from "../assets/profiles/chat-cloud.png";
import onionImage from "../assets/products/onions.jpg";
import tomato from "../assets/products/tomato-card.jpg";
import cabbageCard from "../assets/products/cabbage-card.jpg";
import cabbage from "../assets/products/cabbage.jpg";
import potato from "../assets/products/potato.jpg";
import { FaCheck } from "react-icons/fa6";
import farmerCard from "../assets/profiles/farmer-card.jpg";
import carrots from "../assets/products/carrots.jpg";
import squash from "../assets/products/squash.jpg";
import grab from "../assets/profiles/grab.png";
import gcash from "../assets/profiles/GCASH.png";
import { Link } from "react-router-dom";
import NavbarLanding from "../components/Navigation/Nav-Landing";
import Footer from "../components/Navigation/Footer";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Landing = () => {
  return (
    <>
      <div className="landing-page">
        <NavbarLanding />
        <div className="banner">
          <div className="banner-message">
            <div className="heading">
              Skip the store, savor farm-fresh,<br></br> support local with
              <span className="highlighted"> fair prices</span>.
            </div>
            <div className="subheading">
              Buy-ani is a data-driven agricultural marketplace that leverages
              supply chain data to connect Filipino consumers directly with
              local farmers, offering a personalized selection of the freshest
              seasonal produce.
            </div>
            <button className="primary-btn">Get Started</button>
          </div>
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
        </div>

        <div className="what-we-do">
          <div className="content">
            <div className="heading">What We Do</div>
            <p>
              In today's world, getting fresh, local produce can be a challenge.
              Buy-ani bridges that gap. We're a data-driven platform connecting
              Filipinos with local farms, ensuring farm-to-table delivery of the
              freshest seasonal fruits and vegetables.
            </p>
            <p>
              Say goodbye to limited options and hello to personalized
              recommendations! Based on your preferences and location, Buy-ani
              helps you find the perfect harvest. Plus, by supporting local
              farmers, you contribute to a sustainable food system and a
              thriving Filipino agricultural industry.
            </p>
            <button className="primary-btn">Join Our Community</button>
          </div>
        </div>

        <div className="how-it-works">
          <div className="heading">How It Works</div>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <div className="card-heading">Phase 1</div>
                <div className="card-subheading">
                  LET US GET TO KNOW YOU MORE
                </div>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiUser />
                </div>
                <p>Create your account</p>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiViewList />
                </div>
                <p>Answer our quick survey</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-heading">Phase 2</div>
                <div className="card-subheading">EXPLORE BUYANI</div>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiSearch />
                </div>
                <p>Search fresh produce</p>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiAlignBottom />
                </div>
                <p>Discover data-driven recommendations</p>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiChat1 />
                </div>
                <p>Connect with farmers or buyers</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-heading">Phase 3</div>
                <div className="card-subheading">PURCHASE PRODUCE</div>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiShoppingBasket />
                </div>
                <p>Fill up your virtual bayong</p>
              </div>
              <div className="card-details">
                <div className="icon-container">
                  <CiDeliveryTruck />
                </div>
                <p>Checkout</p>
              </div>
            </div>
          </div>
        </div>

        <div className="data-driven">
          <div className="header">
            <span className="heading">
              Data-driven agricultural marketplace
            </span>
            <span className="subheading">
              that connects Filipinos with local farmers for personalized,
              seasonal produce.
            </span>
          </div>
          <div className="graph-container">
            <div className="graph">
              <div className="head">
                <div className="graph-title">
                  <div className="heading">Agricultural Produce</div>
                  <select name="produce" id="produce">
                    <option value="cabbage">Cabbage</option>
                    <option value="carrot">Carrot</option>
                    <option value="potato">Potato</option>
                  </select>
                </div>
                <div className="previous-month">
                  <div className="badge">12%</div>
                  <p>vs last month</p>
                </div>
              </div>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={400}
                height={300}
              />
            </div>
            <div className="graph">
              <div className="head">
                <div className="graph-title">
                  <div className="heading">Agricultural Produce</div>
                  <select name="produce" id="produce">
                    <option value="cabbage">Cabbage</option>
                    <option value="carrot">Carrot</option>
                    <option value="potato">Potato</option>
                  </select>
                </div>
                <div className="previous-month">
                  <div className="badge">12%</div>
                  <p>vs last month</p>
                </div>
              </div>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
                width={400}
                height={300}
              />
            </div>
            <div className="graph">
              <div className="head">
                <div className="graph-title">
                  <div className="heading">Agricultural Produce</div>
                  <select name="produce" id="produce">
                    <option value="cabbage">Cabbage</option>
                    <option value="carrot">Carrot</option>
                    <option value="potato">Potato</option>
                  </select>
                </div>
                <div className="previous-month">
                  <div className="badge">12%</div>
                  <p>vs last month</p>
                </div>
              </div>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="boy-ani">
          <div className="img-container">
            <img src={boyAni} alt="boyAni" />
            <img src={chatCloud} alt="chatCloud" />
          </div>
          <div className="boy-ani-details">
            <div className="heading">
              Meet <span className="highlighted">Boy Ani</span>, your guide to
              finding the perfect harvest .
            </div>
            <div className="subheading">
              Boy Ani will help you navigate our selection of seasonal produce,
              recommend items based on your preferences and needs, and connect
              you with farms located closest to you, ensuring the freshest
              possible delivery.
            </div>
            <button className="primary-btn">
              {" "}
              <CiChat1 />
              Chat with Boy Ani
            </button>
          </div>
        </div>
        <div className="our-stories">
          <div className="stories-title">Our Stories</div>
          <div className="stories">
            <div className="buyer-story">
              <div className="title">Consumer Stories</div>
              <div className="content">
                “Buy-ani is a game changer! I get the freshest produce directly
                from farms, delivered fast and hassle-free. “
              </div>
              <div className="consumer-name">Ruel Ambrad- Dalaguete, Cebu</div>
            </div>
            <div className="farmer-story">
              <div className="contents">
                <div className="title">Farmer Story</div>
                <div className="content">
                  “Grabe kadako ang tabang niining app sa among mag-uuma. “
                </div>
                <div className="farmer-name">Eutiquio Thelmo</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
