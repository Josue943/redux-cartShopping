import React from "react";
import styled from "@emotion/styled";

const RadioButtons = ({ rangePrice, setRangePrice }) => {
  const options = [
    {
      id: 0
    },
    {
      id: 1,
      min: 0,
      max: 300,
      text: function() {
        return `$${this.min} - $${this.max}`;
      }
    },
    {
      id: 2,
      min: 300,
      max: 650,
      text: function() {
        return `$${this.min} - $${this.max}`;
      }
    },
    {
      id: 3,
      min: 650,
      max: 100000,
      text: function() {
        return `Over $${this.min}`;
      }
    }
  ];
  return (
    <Container>
      <span>Price</span>
      {options.map(o => (
        <div className="form-control" key={o.id}>
          <input
            type="radio"
            value={o.id}
            checked={rangePrice.id === o.id}
            onChange={() => setRangePrice(o)}
          />
          <label>{!o.id ? "All" : o.text()}</label>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  span {
    font-size: 17px;
    padding-bottom: 5px;
  }
  input {
    margin: 5px;
  }
`;

export default RadioButtons;
