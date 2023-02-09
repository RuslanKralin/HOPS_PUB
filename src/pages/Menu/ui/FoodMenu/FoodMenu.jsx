import styles from './styles.module.scss'
import foto2 from 'assets/backgraund/foto2.jpg'

function FoodMenu() {

    return (
        <div className={`${styles.wrapper} ${styles.limitedConteiner}`}>
                <h1>Салаты и закуски</h1>
            <div className={styles.foodConteiner}>
                <div className={styles.foodItem}>
                    <div >
                        <img src={foto2} className={styles.img} />
                    </div>
                    <div className={styles.description}>
                        <div className={styles.foodName}><h3>Ростбиф салат</h3></div>
                        <div className={styles.price}>19p</div>
                        <div className={styles.compound}><p>мясо, соус, овощи, специи</p></div>
                        <div className={styles.weight}><p>Выход: 280гр</p></div>
                    </div>
                </div>
                <div className={styles.foodItem}>
                    <div >
                        <img src={foto2} className={styles.img} />
                    </div>
                    <div className={styles.description}>
                        <div className={styles.foodName}><h3>Ростбиф салат</h3></div>
                        <div className={styles.price}>19p</div>
                        <div className={styles.compound}><p>мясо, соус, овощи, специи</p></div>
                        <div className={styles.weight}><p>Выход: 280гр</p></div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}


export default FoodMenu