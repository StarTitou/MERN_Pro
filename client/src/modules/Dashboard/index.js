import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import InteractiveList from './login';

import Grid from '@material-ui/core/Grid';
const Dashboard = () => (
    <Grid container spacing={0}>
        <Grid item xs={2} md={2} lg={3}>
            <InteractiveList/>
        </Grid >
    </Grid >
);

export default {
    routeProps: {
        path: '/Dashboard',
        component: Dashboard
    },
    name: 'Dashboard',
    icon:<HomeIcon fontSize='large' />,
}
