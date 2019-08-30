import React from 'react';

import Banner from '../Banner/Banner';
import Info from '../Info/Info';

import classes from './SocialCard.module.css';

const socialCard = () => (
  <div className={classes.SocialCard}>
    <Banner />
    <Info />
  </div>
);

export default socialCard;