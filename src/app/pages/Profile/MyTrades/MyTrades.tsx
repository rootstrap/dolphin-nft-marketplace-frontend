import React, { useContext } from 'react';
import { ProfileContext } from '../ProfilePage';
import { MyTradesHeader } from './MyTradesHeader';
import styles from './MyTrades.module.scss';
import { MyTradesRow } from './MyTradesRow';

export const MyTrades = () => {
  const { userTrades } = useContext(ProfileContext);

  return (
    <div className={styles.myTrades}>
      <MyTradesHeader />

      {React.Children.toArray(userTrades.map(trade => <MyTradesRow trade={trade} />))}
    </div>
  );
};
