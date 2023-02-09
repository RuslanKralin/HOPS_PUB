import styles from './styles.module.scss'
import menuHeader from 'assets/backgraund/menuHeader.jpg'
// import { Button } from '@mui/material'
import logoDark from 'assets/backgraund/logoDark.png'

function MenuHeader() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerSection}>
                <div className={styles.limitedConteiner}>
                    <img src={logoDark} className={styles.logo} />
                </div>
            </div>
            <div className={styles.headerImg}>
                <img src={menuHeader} className={styles.img} alt='foto' />
            </div>
            <div className={`${styles.headerInfo} ${styles.limitedConteiner} ${styles.headerInfoContent}`}>
                <div className={styles.title}>Меню</div>
            </div>
            {/* <div className={styles.btn}>
                <Button variant="contained" disableElevation sx={{ background: '#c32a2a', width: '10rem', height: '2rem' }}>
                    <div className={styles.textBtn}>ЗАБРОНИРОВАТЬ СТОЛ</div>
                </Button>
            </div> */}
            <div className={`${styles.headerNavBar} ${styles.limitedConteiner}`}>
                <div className={styles.food}>
                    <div className={styles.foodLink}>Салаты и закуски</div>
                    <div className={styles.foodLink}>Горячее</div>
                    <div className={styles.foodLink}>Стейки</div>
                    <div className={styles.foodLink}>Супы и хлеб</div>
                </div>
                <div className={styles.bar}>
                    <div className={styles.barLinkBeer}>Пиво</div>
                    <div className={styles.barLink}>Вино</div>
                    <div className={styles.barLink}>Крепкое</div>
                    <div className={styles.barLink}>Коктейли</div>
                </div>
            </div>

        </div>
    )
}


export default MenuHeader