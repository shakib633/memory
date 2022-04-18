import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imagesawe.s3.amazonaws.com/styles/max750/s3/articles/2021/07/wedding-photography.jpg?itok=xACWpP6A"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Salan's Wedding</h3>
          <p> Basic Plan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tastefulspace.com/wp-content/uploads/2019/07/word-image-25.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>roy's wedding</h3>
          <p> Premium Quality</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.peerspace.com/resources/wp-content/uploads/best-wedding-photographers-in-london-1080x600.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Anna's Wedding</h3>
          <p>
            Standard Quality
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;