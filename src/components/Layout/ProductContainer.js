import styled from "@emotion/styled";

const ProductsContainer = styled.div`
  max-width: 1100px;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 20px;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export default ProductsContainer;
