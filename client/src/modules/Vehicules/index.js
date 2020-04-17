import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
const Vehicules = () => (
    <div>
    Vehicules
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
