import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
    <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowRoundedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowRoundedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowRoundedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowRoundedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>

        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DescriptionOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DoubleArrowRoundedIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
