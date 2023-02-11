import styles from './styles.module.scss'
import coal from 'assets/backgraund/coal.jpg'

function RestaurantHeader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.headerImg}>
                <img src={coal} className={styles.img} alt='foto' />
            </div>
            <div className={styles.title}>Жарим с любовью...</div>
        </div>
    )
}


export default RestaurantHeader