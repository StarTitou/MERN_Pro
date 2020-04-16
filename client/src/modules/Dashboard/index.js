import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import MediaCard from './Items';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const Dashboard = () => (

      <MediaCard/>
  
);

export default {
    routeProps: {
        path: '/Dashboard',
        component: Dashboard
    },
    name: 'Dashboard',
    icon:<HomeIcon fontSize='large' />,
}
