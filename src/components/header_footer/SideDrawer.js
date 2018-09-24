import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  const scrollToEvent = element => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToEvent('featured')}>
          Event Starts In
        </ListItem>

        <ListItem button onClick={() => scrollToEvent('venueinfo')}>
          Venue INFO
        </ListItem>

        <ListItem button onClick={() => scrollToEvent('highlights')}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => scrollToEvent('pricing')}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToEvent('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
