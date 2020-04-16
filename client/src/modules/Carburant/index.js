import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedDial from '../../template/SpeedDial'
const Carburant = () => (
    <div>Carburant Module
      <SpeedDial/>
    </div>

);

export default {
    routeProps: {
        path: '/Carburant',
        component: Carburant
    },

    name: 'Carburant',
    icon:<LocalGasStationIcon fontSize='large' />,
}
