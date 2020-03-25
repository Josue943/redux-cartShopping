import React from "react";
import styled from "@emotion/styled";

const About = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  max-width: 650px;
  margin: 80px auto;
  h1 {
    text-align: center;
    padding-bottom: 50px;
    letter-spacing: 2px;
  }
  p {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 30px;
  }
`;

export default About;
