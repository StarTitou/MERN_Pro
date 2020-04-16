import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FullScreenDialog from './FullDialog';
import MediaCard from './Items';
const Vehicules = () => (
    <div>
      <MediaCard/>
      <FullScreenDialog/>
    </div>
);

export default {
    routeProps: {
        path: '/Vehicules',
        component: Vehicules
    },
    name: 'Vehicules',
    icon:<LocalShippingIcon fontSize='large' />,
}
