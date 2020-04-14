import React from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SpeedDial from '../../template/SpeedDial';
import MediaCard from './Items';
const Catalogue = () => (
    <div>
      <MediaCard/>
      <SpeedDial/>
    </div>

);

export default {
    routeProps: {
        path: '/Catalogue',
        component: Catalogue
    },

    name: 'Catalogue',
    icon:<AssignmentIcon fontSize='large' />,
}
