import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/"
            exact
        >
            Burger Builder
        </NavigationItem>
        {props.isAuthenticate ?
            (<NavigationItem link="/orders">Orders</NavigationItem>) : null}
        {props.isAuthenticate ?
            (<NavigationItem link="/logout">Logout</NavigationItem>)
            :
            (<NavigationItem link="/auth">Authentic </NavigationItem>)
        }

    </ul>
);

export default navigationItems;