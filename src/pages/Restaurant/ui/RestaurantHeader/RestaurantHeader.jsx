import styles from './styles.module.scss'
import primeLogo from 'assets/backgraund/primeLogo.png'
import { MenuHeader } from 'pages/Menu/ui/MenuHeader'

function RestaurantHeader() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={primeLogo} className={styles.logo} alt='logo'/>
            </div>
            <div className={styles.headerImg}>
                <img src={MenuHeader} className={styles.img} alt='foto' />
            </div>


        </div>
    )
}


export default RestaurantHeader