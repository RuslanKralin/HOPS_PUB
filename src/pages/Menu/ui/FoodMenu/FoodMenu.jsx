import styles from './styles.module.scss'
import DataProduct from '../../../../app/DataProduct/DataProduct'
import ProductItem from './ui/ProductItem/ProductItem'
// import { useState } from 'react';
import { NavBarBtn } from './ui/NavBarBtn';

function FoodMenu({ onAdd, handleClick }) {
    const { salad } = DataProduct;
    const { main } = DataProduct;
    const { burgers } = DataProduct;
    const { steak } = DataProduct;
    const { fryingPan } = DataProduct;
    const { soap } = DataProduct;

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
                    <NavBarBtn title='Пиво' onClick={() => handleClick}
                        className={styles.active}
                        // className={activeBarLink ? `${styles.active}` : `${styles.barLink}`}
                    ></NavBarBtn>
                    <NavBarBtn title='Вино' />
                    <NavBarBtn title='Крепкое' />
                    <NavBarBtn title='Коктейли' />
                </div>
            </div>

            <div className={`${styles.wrapper} ${styles.limitedConteiner}`}>
                <h1 className={styles.foodTitle}>Салаты и закуски</h1>
                <div className={styles.foodConteiner}>
                    {salad.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>
                <h1 className={styles.foodTitle}>Горячее</h1>
                <div className={styles.foodConteiner}>
                    {main.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>

                <h1 className={styles.foodTitle}>Бургеры</h1>
                <div className={styles.foodConteiner}>
                    {burgers.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>

                <h1 className={styles.foodTitle}>Стейки</h1>
                <div className={styles.foodConteiner}>
                    {steak.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>

                <h1 className={styles.foodTitle}>Сковородки</h1>
                <div className={styles.foodConteiner}>
                    {fryingPan.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>

                <h1 className={styles.foodTitle}>Супы</h1>
                <div className={styles.foodConteiner}>
                    {soap.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)

                    )}
                </div>

            </div>
        </>)
}


export default FoodMenu