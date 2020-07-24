import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import pic from "../../static/images/MilDiscountOwl.png";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function RetVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h2>
        <b
          style={{
            color: "whitesmoke",
            marginBottom: 10,
          }}
        >
          CHECK OUT THE VIDEO!
        </b>
      </h2>
      <br></br>
      <section>
        <p
          style={{
            color: "whitesmoke",
            fontWeight: 600,
          }}
        >
          <em>Click on location to learn more!</em>
        </p>
        <div>{/* Place Picture of Mil Discount Owl here */}</div>
      </section>
      <br></br>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Video for Veterans"
            height="140"
            image="../../static/images/retailervid2.png"
            title="MilServe Video for Veterans"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              VIDEO FOR RETAILERS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Learn more about our training program for prior service and
              transitioning servicemembers.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            PLAY
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}