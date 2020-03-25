import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ shipping, setShipping }) => {
  return (
    <FormControl>
      <input type="checkbox" value={shipping} onChange={setShipping} />
      <label>Free Shipping</label>
    </FormControl>
  );
};

const FormControl = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 15px;
    padding-left: 3px;
  }
`;

export default Checkbox;
