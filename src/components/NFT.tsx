import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { NFTResponse } from "utils/utils";

export default function NFT({name, image, attributes, description, price}: NFTResponse) {
  const onMint = () => {

  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src={image}
        loading="lazy"
        width="250"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Name: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price} ETH
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          disableElevation
          onClick={onMint}
        >
          Buy NFT
        </Button>
      </CardActions>
    </Card>
  )
}