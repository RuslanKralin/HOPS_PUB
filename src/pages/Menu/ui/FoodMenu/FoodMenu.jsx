import styles from './styles.module.scss'
import DataProduct from '../../../../app/DataProduct/DataProduct'
import ProductItem from './ui/ProductItem/ProductItem'
// import { useState } from 'react';
import { NavBarBtn } from './ui/NavBarBtn';

function FoodMenu({ onAdd, handleClick, activBarLink, onClick }) {
    const { products } = DataProduct;

    return (
        <>
            <div className={`${styles.headerNavBar} ${styles.limitedConteiner}`}>
                <div className={styles.food}>
                    <div className={styles.foodLink}>Салаты и закуски</div>
                    <div className={styles.foodLink}>Горячее</div>
                    <div className={styles.foodLink}>Стейки</div>
                    <div className={styles.foodLink}>Супы и хлеб</div>
                </div>
                <div className={styles.bar}>
                    <NavBarBtn title='Пиво' onClick={console.log('click') }
                    // className={activBarLink ? `${styles.active}` : `${styles.barLink}`}
                    ></NavBarBtn>
                    <NavBarBtn title='Вино'/>
                    <NavBarBtn title='Крепкое'/>
                    <NavBarBtn title='Коктейли'/>
                </div>
            </div>

            <div className={`${styles.wrapper} ${styles.limitedConteiner}`}>
                <h1 className={styles.foodTitle}>Салаты и закуски</h1>
                <div className={styles.foodConteiner}>
                    {products.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}

                </div>
            </div>
        </>)
}


export default FoodMenu