import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 385,
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default function VetVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Video for Veterans"
            height="140"
            image="../../static/images/vetvid.png"
            title="MilServe Video for Veterans"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              WATCH VIDEO
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
