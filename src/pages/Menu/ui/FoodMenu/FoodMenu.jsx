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
                    <a className={styles.foodLink} href='#salad'>Салаты и закуски</a>
                    <a className={styles.foodLink} href='#main'>Горячее</a>
                    <a className={styles.foodLink} href='#burgers'>Бургеры</a>
                    <a className={styles.foodLink} href='#steak'>Стейки</a>
                    <a className={styles.foodLink} href='#fryingPan'>Сковородки</a>
                    <a className={styles.foodLink} href='#soap'>Супы и хлеб</a>
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
                <h1 className={styles.foodTitle} id='salad'>Салаты и закуски</h1>
                <div className={styles.foodConteiner}>
                    {salad.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>
                <h1 className={styles.foodTitle} id='main'>Горячее</h1>
                <div className={styles.foodConteiner}>
                    {main.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>

                <h1 className={styles.foodTitle} id='burgers'>Бургеры</h1>
                <div className={styles.foodConteiner}>
                    {burgers.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>

                <h1 className={styles.foodTitle} id="steak">Стейки</h1>
                <div className={styles.foodConteiner}>
                    {steak.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>

                <h1 className={styles.foodTitle} id='fryingPan'>Сковородки</h1>
                <div className={styles.foodConteiner}>
                    {fryingPan.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>

                <h1 className={styles.foodTitle} id='soap'>Супы</h1>
                <div className={styles.foodConteiner}>
                    {soap.map((product) => (<ProductItem key={product.id} product={product} onAdd={onAdd} />)
                    )}
                </div>

            </div>
        </>)
}


export default FoodMenu