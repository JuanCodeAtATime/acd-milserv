import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function BlogCard() {
  const classes = useStyles();

  return (
    // <Link to="/" style={{ textDecoration: "none" }}>
    <Grid
      item
      component={Card}
      xs={12}
      s={6}
      md={3}
      className="card"
      id="makers-color"
    >
      <CardContent>
        <CardMedia title="Beer Makers">
          <FontAwesomeIcon icon={faEdit} className="icons" />
        </CardMedia>

        <Typography className="categoryTitle">WRITE</Typography>
      </CardContent>
    </Grid>
    // </Link>
  );
}
