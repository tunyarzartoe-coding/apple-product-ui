import React from "react";
import { Banner } from "./Banner"; // Importing a Banner component (not shown in your code)
import About from "./About"; // Importing an About component
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import Menu from "./Menu"; // Importing a Menu component

const Home = () => {
  return (
    <>
      <section class="home"> {/* Using 'class' instead of 'className' for CSS classes */}
        <div class="swiper home-slider"> {/* Swiper container */}
          <div class="swiper-wrapper"> {/* Wrapper for Swiper slides */}
            {/* First Swiper slide */}
            <div class="swiper-slide slide">
              <div class="image">
                <img src="images/home-img-1.jpg" alt="" /> {/* Image */}
              </div>
              <div class="content">
                <span>upto 50% off</span> {/* Sale information */}
                <h3>smartphones</h3> {/* Product title */}
                <Link href="#" class="btn">
                  shop now
                </Link> {/* Link to shop */}
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <img src="images/home-img-1.jpg" alt="" /> {/* Image */}
              </div>
              <div class="content">
                <span>upto 50% off</span> {/* Sale information */}
                <h3>mac book</h3> {/* Product title */}
                <Link href="#" class="btn">
                  shop now
                </Link> {/* Link to shop */}
              </div>
            </div>

            {/* Second Swiper slide */}
            <div class="swiper-slide slide">
              {/* ... (similar structure as the first slide) */}
            </div>

            {/* Third Swiper slide */}
            <div class="swiper-slide slide">
              {/* ... (similar structure as the first slide) */}
            </div>
          </div>

          {/* Swiper navigation buttons */}
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>
      <Menu /> {/* Render the Menu component */}
      <About /> {/* Render the About component */}
    </>
  );
};

export default Home;
