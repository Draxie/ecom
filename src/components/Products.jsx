import styled from "styled-components";
import { paints, sprays, prints } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  
  return (
    <Container>
      {(() => {
          switch (window.location.pathname) {
              case "/store/prints":
                return (
                  prints.map((item) => (
                    <Product item={item} key={item.id} />
                  ))
                )
              case "/store/painting-supplies":
                return (
                  paints.map((item) => (
                    <Product item={item} key={item.id} />
                  ))
                )
              case "/store/sprays":
                return (
                  sprays.map((item) => (
                    <Product item={item} key={item.id} />
                  ))
                )
              default:
                return (
                  <h1>ERROR</h1>
                )
          }
      })()}
    </Container>
  );
};

export default Products;