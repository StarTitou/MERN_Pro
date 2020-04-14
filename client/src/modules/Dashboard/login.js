import React,{Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Cookies from 'universal-cookie';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
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
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
  const {email,password} = formData;

  const onChange = e=> setFormData({
    ...formData,[e.target.name]:e.target.value
  });
  const login = async e => {
    e.preventDefault();
    
    const user={
      email,
      password
    };
    try{
      const body = JSON.stringify(user);
      alert(body);
      const res = await axios.post('/api/auth',body);
      const token =res.data.token;
      let d = new Date();
      d.setTime(d.getTime() + (2*60*1000));
      const cookies = new Cookies();
      cookies.set('token', token, { path: '/', expires: d });
    }catch(err){
      console.error(err.response.data);
    }
  }
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
             label="Email"
             style={{ margin: 8 }}
             placeholder="Email"
             helperText=""
             fullWidth
             margin="normal"
             variant="outlined"
             InputLabelProps={{
               shrink: true,
             }}
             name='email'
             value={email}
             onChange={e => onChange(e)}
           />
        </Grid>
        <Grid item xs={12} md={12}>
            <TextField
             id="outlined-full-width"
             style={{ margin: 8 }}
             label="Password"
             placeholder="Password"
             helperText=""
             fullWidth
             name='password'
             value={password}
             onChange={e => onChange(e)}
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
              onClick={login}
            >
              Se Connecter
            </Button>
        </Grid>

      </Grid>
    </div>
  );
};

export default InteractiveList;
