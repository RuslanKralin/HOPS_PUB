import styles from './styles.module.scss'
import React from 'react';


function ProductItem({ product, onAdd }) {
    // const { product, onAdd } = props;
    
    return (
        <div className={styles.foodItem}>
            <div >
                <img src={product.image} className={styles.img} alt={product.name} />
            </div>
            <div className={styles.description}>
                <div><h3 className={styles.foodName}>{product.name}</h3></div>
                <div className={styles.price}>{product.price} руб</div>
                <div className={styles.compound}><p>{product.descr}</p></div>
                <div className={styles.foodItemFooter}>
                    <div className={styles.weight}><p>Выход: {product.weight} гр</p></div>
                   { console.log(onAdd)}
                    <button onClick={()=> onAdd(product)}  className={styles.btn}>Добавить в корзину</button>
                </div>

            </div>
        </div>

    )
}


export default ProductItem