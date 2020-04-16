import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import CenteredTabs from './Tabs';
import MediaCard from './Items';
const Configurations = () => (
    <div>
      <CenteredTabs/>
      <MediaCard />
    </div>
);

export default {
    routeProps: {
        path: '/Configurations',
        component: Configurations

    },
    name: 'Configurations',
    icon:<BuildIcon fontSize='large' />,
}
