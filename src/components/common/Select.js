import React from "react";
import styled from "@emotion/styled";

const Select = ({ setCategory, category }) => {
  const options = ["phone", "computer", "radio"];

  const onChange = e => {
    setCategory(e.target.value);
  };

  return (
    <FormControl>
      <label>Category</label>
      <select value={category} onChange={onChange}>
        <option>all</option>
        {options.map(o => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
    </FormControl>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 6px 0;
  label {
    font-size: 18px;
  }
  select {
    width: 100px;
    font-size: 15px;
    padding: 2px;
  }
`;

export default Select;
