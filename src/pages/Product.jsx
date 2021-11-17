import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
background-color: #333333;
color: white;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ textAlign: "center" })}
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
  width: 100%;
  ${mobile({ textAlign: "center" })}
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  text-align: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      filter: brightness(150%);
  }
`;

const Product = ({products, cart, addToCart}) => {

  const [amount, setAmount] = useState(1);
  let index = 0;
  switch (window.location.pathname.slice(-6,-1)) {
    case 'print':
      index = 0;
      break;
    case 'paint':
      index = 1;
      break;
    case 'spray':
      index = 2;
      break;
  }
  let product = products[index][parseInt(window.location.pathname.slice(-1)-1)]

  return (
    <Container>
      <Navbar  cart= {cart}/>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>Lorem, ipsum.</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ {product.price * amount}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor:'pointer'}} onClick={()=> setAmount(()=> amount === 1 ? 1 : amount-1)}/>
              <Amount value={amount} max={10} min={1}/>
              <Add style={{cursor:'pointer'}} onClick={()=> setAmount(amount+1)}/>
            </AmountContainer>
            <Button onClick={()=> {
              for (let i = 0; i < amount; i++) {
                addToCart(product)
              }
            }}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;