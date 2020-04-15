import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {connect } from 'react-redux';
//import {setAlert }from '../../actions/alert';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
        <Typography gutterBottom variant="h5" component="h2" align='center'>
          Nouveau
        </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
             id="outlined-full-width"
             label="Designation en Francais"
             style={{ margin: 8 }}
             placeholder="Designation en Francais"
             helperText=""
             fullWidth
             margin="normal"
             variant="outlined"
             InputLabelProps={{
               shrink: true,
             }}
           />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
             id="outlined-full-width"
             style={{ margin: 8 }}
             placeholder="التعيين باللغة العربية"
             helperText=""
             fullWidth
             dir= 'rtl'
             margin="normal"
             variant="outlined"
             InputLabelProps={{
               shrink: true,
             }}
           />
        </Grid>
        <Grid item xs={12} md={12} >
            <Button
              style={{ margin: 8 }}
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SaveIcon/>}
              fullWidth
              onclick={alert}
            >
              Ajouter le Model
            </Button>
        </Grid>

      </Grid>
    </div>
  );
};

export default connect()(InteractiveList);
