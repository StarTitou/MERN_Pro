import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';


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
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const classes = useStyles();
class Get_Api extends Component {
    constructor(props) {
      super();
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          secondary:false,
          dense:false
        };
        this.DeleteThis = this.DeleteThis.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }

DeleteThis(event){
  event.preventDefault();
        fetch('http://127.0.0.1:8080/'+this.props.name+'/Delete/'+event.currentTarget.id, {
          method: 'DELETE',
        }).then(function(response) {
      }, function(error) {
        alert(error.message); //=> String
      });
      }
componentDidMount(){
    fetch('http://127.0.0.1:8080/'+this.props.name+'/all')
    .then(response=>response.json())
    .then(res=>{
        this.setState({
            isLoaded:true,
            items:res,
            })
        }
        ,
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });

}
render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div><CircularProgress disableShrink /></div>;
    } else {
        return (
            <div id='list'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                </Grid>
                <Grid item xs={12} md={6}>
                <List dense={this.dense}>
                {items.map(item=>(
                  <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                      <List dense={false}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar>
                                <DescriptionOutlinedIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary="Single-line item"

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
                ))}
              </List>
                </Grid>
              </Grid>

          </div>

        );
        }
    }
}

export default Get_Api;
