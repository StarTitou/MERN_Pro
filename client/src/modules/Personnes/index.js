import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SpeedDial from '../../template/SpeedDial';
import MediaCard from './Items';
const Personnes = () => (
    <div>
    <MediaCard/>
    <SpeedDial/>
    </div>
);

export default {
    routeProps: {
        path: '/Personnes',
        component: Personnes
    },
    name: 'Personnes',
    icon:<PersonIcon fontSize='large' />,
}
