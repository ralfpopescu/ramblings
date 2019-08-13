import React, { useState } from "react";
import styled from "styled-components";
import ReactInterval from "react-interval";
import image1 from "./static/1.png";
import image2 from "./static/2.png";
import image3 from "./static/3.png";
import image4 from "./static/4.png";
import image5 from "./static/5.png";
import image6 from "./static/6.png";
import image7 from "./static/7.png";
import image8 from "./static/8.png";
import image9 from "./static/9.png";
import image10 from "./static/10.png";
import image11 from "./static/11.png";
import image12 from "./static/12.png";
import image13 from "./static/13.png";
import image14 from "./static/14.png";
import image15 from "./static/15.png";
import image16 from "./static/16.png";
import image17 from "./static/17.png";
import image18 from "./static/18.png";
import image19 from "./static/19.png";
import image20 from "./static/20.png";
import ImageWrapper from "./components/ImageWrapper";

const Container = styled.div`
  position: relative;
`;

function App() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20
  ];
  const generateValues = (numberOfValues, scale, offset = 0) =>
    Array(numberOfValues)
      .fill(scale)
      .map(scale => Math.random() * scale + offset);

  const [opacities, setOpacities] = useState(Array(images.length).fill(0));
  const [skews, setSkews] = useState(Array(images.length).fill(0));

  const colorIndices = [0, 1, 2, 3, 4, 5, 6, 7];
  const sketchIndices = [8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Container>
      {images.map(
        (image, index) =>
          sketchIndices.includes(index) && (
            <ImageWrapper
              src={image}
              style={{
                opacity: opacities[index],
                transform: `translate(${skews[index]}px, ${skews[index]}px)`
              }}
            />
          )
      )}
      {images.map(
        (image, index) =>
          colorIndices.includes(index) && (
            <ImageWrapper src={image} style={{ opacity: opacities[index] }} />
          )
      )}
      <ReactInterval
        timeout={1000}
        enabled
        callback={() => setOpacities(generateValues(images.length, 1))}
      />
      <ReactInterval
        timeout={2000}
        enabled
        callback={() => setSkews(generateValues(images.length, 10))}
      />
    </Container>
  );
}

export default App;
