import React from 'react';

import stock1 from 'assets/stock/stock1.jpg'
import stock2 from 'assets/stock/stock2.jpg'
import stock3 from 'assets/stock/stock3.jpg'
import stock4 from 'assets/stock/stock4.jpg'
import stock5 from 'assets/stock/stock5.jpg'
import stock6 from 'assets/stock/stock6.jpg'
import stock7 from 'assets/stock/stock7.jpg'

import styles from './styles.module.scss'

function Stocks() {
    return (
        <div className={styles.stocksWrapper}>
           <h1 className={styles.title}>Акции</h1>
           <div  className={styles.stocks}>
               <div><img className={styles.stockItem} src={stock1} alt='stock' /></div>
               <div><img className={styles.stockItem} src={stock2} alt='stock'/></div>
               <div><img className={styles.stockItem} src={stock3} alt='stock'/></div>
               <div><img className={styles.stockItem} src={stock4} alt='stock'/></div>
               <div><img className={styles.stockItem} src={stock5} alt='stock'/></div>
               <div><img className={styles.stockItem} src={stock6} alt='stock'/></div>
               <div><img className={styles.stockItem} src={stock7} alt='stock'/></div>
               
           </div>
        </div>

    );
}

export default Stocks