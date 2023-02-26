import styles from './styles.module.scss'
import menuHeader from 'assets/backgraund/menuHeader.jpg'
import logoDark from 'assets/backgraund/logoDark.png'
import { SlBasket } from 'react-icons/sl';
import { Basket } from 'shared/ui';
import { useState } from 'react';
// import { DataProduct } from 'app/DataProduct';

function MenuHeader({ openBasket, setOpenBasket, productItem, setProductItems, onAdd, onRemove, countCartItems }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSection}>
                <div className={styles.limitedConteiner}>
                    <div><img src={logoDark} className={styles.logo} alt="logo" /></div>
                </div>
                <div onClick={() => setOpenBasket(openBasket = !openBasket)}
                    className={`${styles.cardIcon}
                    ${openBasket && styles.active}`} >
                    <SlBasket style={{ fontSize: 40, color: 'white' }} />
                </div>
                {/* <div>{countCartItems && <div>{countCartItems}</div>}</div> counter сдулаю позже*/}
                {openBasket && <Basket onAdd={onAdd} onRemove={onRemove} productItem={productItem} />}
               
            </div>
            <div className={styles.headerImg}>
                <div><img src={menuHeader} className={styles.img} alt="logo" /></div>
            </div>
            <div className={`${styles.headerInfo} ${styles.limitedConteiner} ${styles.headerInfoContent}`}>
                <div className={styles.title}>Меню</div>
            </div>

            <div className={`${styles.headerNavBar} ${styles.limitedConteiner}`}>
                <div className={styles.food}>
                    <div className={styles.foodLink}>Салаты и закуски</div>
                    <div className={styles.foodLink}>Горячее</div>
                    <div className={styles.foodLink}>Стейки</div>
                    <div className={styles.foodLink}>Супы и хлеб</div>
                </div>
                <div className={styles.bar}>
                    <div className={styles.barLinkBeer}>Пиво</div>
                    <div className={styles.barLink}>Вино</div>
                    <div className={styles.barLink}>Крепкое</div>
                    <div className={styles.barLink}>Коктейли</div>
                </div>
            </div>

        </div>
    )
}


export default MenuHeader