import styles from './styles.module.scss'
import { FaInstagram } from 'react-icons/fa'
import logoLight from 'assets/backgraund/logoLight.png'

function Footer() {

    return (
    <footer className={styles.footerWrapper}>
       <img src={logoLight} className={styles.logo}/>
        <h3 className={styles.secondTitle}>Контакты</h3>
        <div className={styles.contactsItem}>
            <div className={styles.contactItem}>
                <div className={styles.lineLeft}></div>
                <div className={styles.contact}>г .Минск, ул. Кульман   +375 29 399 54 33</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
            <div className={styles.contactItem}>
            <div className={styles.lineRight}></div>
                <div className={styles.contact}>г .Минск, ул. Колесникова, 38   +375 29 142 66 27</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.contact}>Сотрудничество с пивоварней   +375 29 700 90 99</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
        </div>
    </footer>)
}

export default Footer