import styles from './styles.module.scss'
import menuHeader from 'assets/backgraund/menuHeader.jpg'

function MenuHeader() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSection}>
                <div className={styles.limitedConteiner}>
                    <div className={styles.logo}>Хопс Паб</div>
                </div>
            </div>
            <div className={styles.headerImg}>
                <img src={menuHeader} className={styles.img} alt='foto' />
            </div>
            <div className={styles.headerNavBar}></div>

        </div>
    )
}


export default MenuHeader