import styled from "styled-components";
import { mobile } from "../responsive";
import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";

const Container = styled.div``;

const Product = styled.div`
display: flex;
margin-block: 30px;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.input`
font-size: 24px;
margin: 5px;
width: 30px;
height: 30px;
border-radius: 10px;
text-align: center;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const CartItem = ({item, cart, setQuantity, setCart}) => {
    

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  let tempAmount= item.quantity;

    return (
        <Container>
            <Product>
              <ProductDetail>
                <Image src={item.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.url}
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick={()=>  setQuantity(item, item.quantity+1)}/>
                  <ProductAmount value={item.quantity}></ProductAmount>
                  <Remove onClick={()=> item.quantity===1 ? removeFromCart(item) : setQuantity(item, item.quantity-1)}/>
                </ProductAmountContainer>
                <ProductPrice>$ {item.price * item.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
        </Container>
    );
}
 
export default CartItem;