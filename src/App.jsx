import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import print1 from "./assets/prints/print1.png"
import print2 from "./assets/prints/print2.png"
import print3 from "./assets/prints/print3.png"
import print4 from "./assets/prints/print4.png"
import paint1 from "./assets/paints/paint1.png"
import paint2 from "./assets/paints/paint2.png"
import paint3 from "./assets/paints/paint3.png"
import paint4 from "./assets/paints/paint4.png"
import spray1 from "./assets/sprays/spray1.png"
import spray2 from "./assets/sprays/spray2.png"
import spray3 from "./assets/sprays/spray3.png"
import spray4 from "./assets/sprays/spray4.png"

const App = () => {

  const [products]=useState([
    [
      {
        id:1,
        img: print1,
        url: 'print1',
        name: 'Flower Canvas Print',
        price: 20
      },
      {
        id:2,
        img: print2,
        url: 'print2',
        name: 'Valkyre Canvas Print',
        price: 30
      },
      {
        id:3,
        img: print3,
        url: 'print3',
        name: 'Savana Canvas Print',
        price: 40
      },
      {
        id:4,
        img: print4,
        url: 'print4',
        name: 'Seaside Canvas Print',
        price: 50
      }
    ],
  
   [
      {
        id:1,
        img: paint1,
        url: 'paint1',
        name: 'Yellow Paint',
        price: 10
      },
      {
        id:2,
        img: paint2,
        url: 'paint2',
        name: 'Green Paint',
        price: 10
      },
      {
        id:3,
        img: paint3,
        url: 'paint3',
        name: 'Red Paint',
        price: 10
      },
      {
        id:4,
        img: paint4,
        url: 'paint4',
        name: 'Black Paint',
        price: 10
      }
    ],
  
   [
      {
        id:1,
        img: spray1,
        url: 'spray1',
        name: 'Purple Hardcore Spray',
        price: 24
      },
      {
        id:2,
        img: spray2,
        url: 'spray2',
        name: 'Green Hardcore Spray',
        price: 25
      },
      {
        id:3,
        img: spray3,
        url: 'spray3',
        name: 'Red Hardcore Spray',
        price: 28
      },
      {
        id:4,
        img: spray4,
        url: 'spray4',
        name: 'Black Hardcore Spray',
        price: 16
      }
    ]
  ]);
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };





  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home cart= {cart} />
        </Route>
        <Route exact path="/cart">
          <Cart 
          cart={cart}
          setQuantity= {setQuantity}
          clearCart= {clearCart}
          setCart= {setCart}
          />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/product">
          <Product 
          cart= {cart} 
          products= {products} 
          addToCart= {addToCart}
          />
        </Route>
        <Route path="/store">
          <ProductList cart= {cart} products= {products}/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;