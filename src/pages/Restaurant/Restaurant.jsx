import { RestaurantHeader } from "./ui/RestaurantHeader"
import primeLogo from 'assets/backgraund/primeLogo.png'
import styles from './styles.module.scss'
import { Booking, PrimeButton } from "shared/ui"
import { useState } from "react"


function Restaurant() {
    const [openBooking, setOpenBooking] = useState(false)

    return <div className={styles.wrapper}>
        <RestaurantHeader />
        <div className={styles.about}>
            <div className={styles.aboutItem} >СТЕЙКИ НА УГЛЯХ</div>
            <div className={styles.aboutItem} >КРАФТОВОЕ ПИВО</div>
            <div className={styles.aboutItem} >СПОРТИВНЫЕ ТРАНСЛЯЦИИ</div>
            <div className={styles.aboutItem} >КОНДИТЕРСКАЯ</div>
            <div className={styles.aboutItem} >ЖИВАЯ МУЗЫКА</div>
            <div className={styles.aboutItem} >ДАРТС</div>
            <div className={styles.aboutItem} >КИКЕР</div>
            <div className={styles.aboutItem} >АКЦИИ</div>
        </div>
        <div className={styles.aboutRestaurants}>
            <div className={styles.left}>
                <div><button className={`${styles.leftBtn}`}>
                    <h3 className={styles.title}>КОЛЕСНИКОВА, 38</h3>
                </button>
                </div>
                <div className={styles.primeBtn}><PrimeButton
                    onClick={() => setOpenBooking(true)}
                    title='забронировать стол' style={{ 'width': '350px', 'height': '50px', 'borderRadius': '10px' }} /></div>
            </div>
            {openBooking && <Booking openBooking={openBooking} setOpenBooking={setOpenBooking}/>}

            <div><img src={primeLogo} className={styles.logo} alt='logo' /></div>
            <div className={styles.right}>
                <div><button className={`${styles.rightBtn} ${styles.title}}`}>
                    <h3 className={styles.title}>КУЛЬМАН,4</h3>
                </button></div>
                <div className={styles.primeBtn} ><PrimeButton
                    onClick={() => setOpenBooking(true)}
                    title='забронировать стол' style={{ 'width': '350px', 'height': '50px', 'borderRadius': '10px' }} /></div>
            </div>
            {openBooking && <Booking openBooking={openBooking} setOpenBooking={setOpenBooking}/>}
        </div>
    </div>
}

export default Restaurant