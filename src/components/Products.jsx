import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({products}) => {
  
  return (
    <Container>
      {(() => {
          switch (window.location.pathname) {
              case "/store/prints":
                return (
                  products[0].map((item) => (
                    <Product item={item} key={item.id} />
                  ))
                )
              case "/store/painting-supplies":
                return (
                  products[1].map((item) => (
                    <Product item={item} key={item.id} />
                  ))
                )
              case "/store/sprays":
                return (
                  products[2].map((item) => (
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