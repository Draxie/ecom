import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #252525;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  align-items: center;
  color: pink;
  ${mobile({ fontSize: "24px" })}
`;

const Icon = styled.span`
  height: 30px;
  width: 30px;
  background-image: url(${logo});
  background-size: cover;
  margin-right: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  text-decoration:none;
`;

const Navbar = ({ cart }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Logo>
              <Icon />
              SPLATTER
            </Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={cart.length}>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
