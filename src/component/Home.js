import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Skeleton } from "@mui/material";
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(() => {
    const storeItem = localStorage.getItem("cartData");
    return storeItem ? JSON.parse(storeItem) : [];
  });
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  function fetchData() {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then((res) => {
        const responseData = res.data;
        setData(responseData.data);
        setIsLoading(false); 
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function AddCart(ele) {
    console.log("selectedelement", ele);
    const updatedData = [...selectedData, ele];
    setSelectedData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
  }

  function isItemInCart(ele) {
    return selectedData.some((item) => item.mal_id === ele.mal_id);
  }

  function handleDetails(id) {
    navigate(`/home/${id}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "grid",
            padding: "3rem",
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <Card key={index}>
              <CardActionArea>
                <Box
                  sx={{
                    padding: "20px",
                    display: "flex",
                  }}
                >
                  <Skeleton variant="rectangular" height={320} />
                  <CardContent>
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={20} width="70%" />
                    <Skeleton height={20} width="50%" />
                    <Skeleton height={20} width="60%" />
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Skeleton height={36} width="40%" />
                    <Skeleton height={36} width="40%" />
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ) : (
      
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "14px",
          }}
        >
          {data.map((ele, index) => (
            <Card key={ele.mal_id}>
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
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {isItemInCart(ele) ? (
                      <Button variant="outlined" disabled>
                        Added
                      </Button>
                    ) : (
                      <Button variant="contained" onClick={() => AddCart(ele)}>
                        Add To Watch
                      </Button>
                    )}
                    <Button onClick={() => handleDetails(ele.mal_id)}>
                      More Details
                    </Button>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
      <Outlet />
    </Box>
  );
}

export default Home;
