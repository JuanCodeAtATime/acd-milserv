import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import pic from "../../static/images/mildiscowl.png";
import ReactPlayer from "react-player";

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
      <br></br>
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            alt="Video for Veterans"
            height="240"
            image="../../static/images/retailervid2.png"
            title="MilServe Video for Veterans"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              SOLUTION FOR RETAILERS
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Watch video to learn about our E-Commerce platform to order
              alcohol. Delivered by military veterans at no cost to you.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/retailerExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
    </div>
  );
}
