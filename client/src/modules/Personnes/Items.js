import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InteractiveList from './list'
const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    minHeight:140,
  },
  media: {
    height: 500,
  },
  root:{
    padding:10,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [width, setWidth] = React.useState(9);
  return (

    <Grid  className={classes.root} spacing={2}>
      <Grid item xs={12} >
        <Grid container justify="center" spacing={spacing}>
          <Grid key='2' item  xs={3} >
            <Card className={classes.card}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    Personnes
                  </Typography>
                </CardContent>
              </CardActionArea>
                <InteractiveList/>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid key='1' item xs={width}>
            <Card className={classes.card}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" align='center'>
                    Details
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" onClick={width=>setWidth(12)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}
