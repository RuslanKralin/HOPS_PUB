import styles from './styles.module.scss'
import menuHeader from 'assets/backgraund/menuHeader.jpg'
import logoDark from 'assets/backgraund/logoDark.png'
import { SlBasket } from 'react-icons/sl';
import { Basket } from 'shared/ui';

// import { DataProduct } from 'app/DataProduct';

function MenuHeader({ openBasket, setOpenBasket, productItem, onAdd, onRemove }) {

    return (
        <div id='food' className={styles.wrapper}>
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
                {openBasket && <Basket onAdd={onAdd} onRemove={onRemove} productItem={productItem} setOpenBasket={setOpenBasket}/>}

            </div>
            <div className={styles.headerImg}>
                <div><img src={menuHeader} className={styles.img} alt="logo" /></div>
            </div>
            <div className={`${styles.headerInfo} ${styles.limitedConteiner} ${styles.headerInfoContent}`}>
                <div className={styles.title}>Меню</div>
            </div>
        </div>
    )
}


export default MenuHeader