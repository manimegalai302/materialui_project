import * as React from "react";
import {
  Box,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = React.useState([]);

  const cartProducts = JSON.parse(localStorage.getItem("cartData")) || [];

  const navigate = useNavigate();

  React.useEffect(() => {
    setCart(cartProducts);
  }, []);

  function handleRemove(index) {
    const updatedData = [...cart];
    updatedData.splice(index, 1);
    setCart(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
  }

  function handleDetails(id) {
    navigate(`/cart/${id}`);
  }

  return (
    <Box>
      {cart.length > 0 ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr ",
            gap: "15px",
          }}
        >
          {cart.map((ele, index) => (
            <Card
              key={index}
              sx={{
                // maxWidth: 300,
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    padding: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="320"
                    image={ele.images?.jpg?.image_url}
                    alt="image"
                  />
                  <CardContent>
                    <Typography component="h5">Name: {ele.title}</Typography>
                    <Typography component="h5">Rating: {ele.rating}</Typography>
                    <Typography component="h5">Status: {ele.status}</Typography>
                    <Typography component="h5">Score: {ele.score}</Typography>
                    <Typography component="h5">Source: {ele.source}</Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                        padding:"10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </Button>
                      <Button onClick={() => handleDetails(ele.mal_id)}>
                        Details
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
        <Box>
          <Typography align="center" fontSize="20px" margin="10%">
            No Cart data Found
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
