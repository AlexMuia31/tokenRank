import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Article = () => {
  return (
    <div>
      <Card sx={{ background: "#19213D", color: "#fff" }}>
        <CardMedia component="img" height="140" alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            A Beginner Guide to BaseChain
          </Typography>
          <Typography variant="body2" color="white">
            May 03, 2021
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
