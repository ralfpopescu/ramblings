import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  transition: all 1s;
`;

const ImageWrapper = ({ src, style }) => (
  <Container>
    <Image src={src} style={style} />
  </Container>
);

export default ImageWrapper;
