import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import SpeedDial from '../../template/SpeedDial';
import MediaCard from './Items';
const Missions = () => (
    <div>
      <MediaCard/>
      <SpeedDial/>
    </div>
);

export default {
    routeProps: {
        path: '/Missions',
        component: Missions
    },
    name: 'Missions',
    icon:<WorkIcon fontSize='large' />,
}
