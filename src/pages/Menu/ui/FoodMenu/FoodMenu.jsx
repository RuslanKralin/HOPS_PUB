import styles from './styles.module.scss'
import DataProduct from '../../../../app/DataProduct/DataProduct'
import  ProductItem from './ui/ProductItem/ProductItem'

function FoodMenu({onAdd, productItem, setProductItems}) {
 const { products } = DataProduct;
    return (
        
        <div className={`${styles.wrapper} ${styles.limitedConteiner}`}>
                <h1 className={styles.foodTitle}>Салаты и закуски</h1>
            <div className={styles.foodConteiner}>
               {products.map((product)=>(<ProductItem key={product.id} product={product} onAdd={onAdd}/>)
                
               )}
             
            </div>
        </div>
    )
}


export default FoodMenu