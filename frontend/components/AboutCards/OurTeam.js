import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PeopleIcon from "@material-ui/icons/People";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 725,
    marginBottom: 20,
  },
});

export default function OurTeam() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Array of alcoholic beverages"
                height="200"
                image="../../static/images/landing-image.jpg"
                title="Partners"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeff Slater
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Jeff is co-founder, ideator, and acting President of MilServ
                  ACD Corp. Jeff comes from a military family where both his
                  parents served proudly and honorably. He ideated and
                  co-founded MilServ ACD in their honor. Jeff is both a serial
                  entrepreneur and a season global corporate executive. Jeff
                  founded or co- founded Ninkatek ACB LLC (a SaaS software
                  company for the US alcoholic beverage industry), Brewery
                  Innovations LLC (an ideation company for the brewing
                  industry), IS&amp;C Technologies (the owner of
                  Tetricsity.com), and International Strategy &amp; Consulting
                  Inc (a boutique global strategy consulting company). His time
                  as a global corporate executive included senior positions with
                  global food and beverage companies including Diageo plc
                  (alc-bev), Allied Domecq plc (alc-bev), PepsiCo, Royal Ahold
                  (now Delhaize SA), and Dunkin Brands. Jeff started his career
                  with DataGeneral (now part of Dell Technologies) and has
                  consulted with numerous software companies. Jeff is focusing
                  his social responsibility time finding ways to give back to
                  our veteran heroes and their families and as a board member
                  for the upcoming commemoration of the 400 th anniversary of
                  the landing of the Mayflower and the formation of Plymouth
                  Colony (Massachusetts) in 2020. Jeff was born in the Hudson
                  Valley of NY and lives in coastal Massachusetts with his wife
                  and dog.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://www.linkedin.com/in/jeff-slater-36490bb/">
                  Retailers
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Array of alcoholic beverages"
                height="200"
                width="50%"
                image="../../static/images/landing-image.jpg"
                title="Partners"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  David Jones
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Track data from Maker, Retailer, and Distributor Partners.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a href="https://www.linkedin.com/in/davivdjones02719/">
                  Retailers
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
