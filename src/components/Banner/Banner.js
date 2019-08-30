import React from 'react';

import classes from './Banner.module.css';
import image from '../../assets/gon-animated.gif';

const banner = () => (
  <img
    className={classes.Banner}
    src={image}
    alt='Banner'
  />
);

export default banner;
