import React, { useState } from "react";
import { useQuery } from "react-query";

import Item from "./components/Item";
import Cart from "./components/Cart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { LinearProgress, Drawer, Badge, Grid } from "@material-ui/core";

import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const getProducts = async () => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
}

const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { data, isLoading, error } = useQuery("products", getProducts);

  const getTotalItems = (items) => {
      return items.reduce((ack, item) => {
          return ack + item.amount;
      }, 0);
  }

  const handleAddToCart = (clickedItem) => {
      setCartItems((prev) => {
          const isItemInCart = prev.find((item) => item.id === clickedItem.id);

          if (isItemInCart) {
              return prev.map((item) => 
                  item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
              );
          }
          return [...prev, { ...clickedItem, amount: 1 }];
      });
  }

  const handleRemoveFromCart = (id) => {
      setCartItems((prev) => 
          prev.reduce((ack, item) => {
              if (item.id === id) {
                  if (item.amount === 1) return ack;
                  return [...ack, { ...item, amount: item.amount - 1 }];
              } else {
                  return [...ack, item];
              }
          }, [])
      );
  }

  if (isLoading) return <LinearProgress />;

  if (error) return <div>ERROR!</div>

  return (
      <Wrapper>
          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
              <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}></Cart>
          </Drawer>
          <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="error">
                  <AddShoppingCartIcon></AddShoppingCartIcon>
              </Badge>
          </StyledButton>
          <Grid container spacing={3}>
            {data?.map((item) => (
                <Grid item key={item.id} xs={12} sm={4}>
                    <Item item={item} handleAddToCart={handleAddToCart} />
                </Grid>
            ))}
          </Grid>
      </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 40px;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
