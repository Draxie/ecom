import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: none;
  padding: 20px;
  justify-content: space-between;
  background-color: #333333;
  box-shadow: inset 0px 0px 220px 30px black;
  ${mobile({ padding: "0px", display: "flex", flexDirection:"column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;