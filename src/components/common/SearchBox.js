import React from "react";
import styled from "@emotion/styled";

const SearchBox = ({ query, setQuery }) => {
  return (
    <FormControl>
      <label>Search Term</label>
      <input value={query} onChange={e => setQuery(e.target.value)} />
    </FormControl>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 5px;
  input {
    margin: 5px 0;
    width: 100%;
    padding: 2px 5px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

export default SearchBox;
