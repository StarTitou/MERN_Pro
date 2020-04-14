import React from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
const Magasin = () => (
    <div>
    Magasin
    </div>
);

export default {
    routeProps: {
        path: '/Magasin',
        component: Magasin
    },
    name: 'Magasin',
    icon:<InboxIcon fontSize='large' />,
}
