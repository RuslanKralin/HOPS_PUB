import styles from './styles.module.scss'
import { FaInstagram } from 'react-icons/fa'

function Footer() {

    return (
    <footer className={styles.footerWrapper}>
        <h1 className={styles.title}>Хоспер Хопс Паб</h1>
        <h3 className={styles.secondTitle}>Контакты</h3>
        <div className={styles.contactsItem}>
            <div className={styles.contactItem}>
                <div className={styles.lineLeft}></div>
                <div className={styles.contact}>г .Минск, ул. Кульман   +375 29 399 54 33</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
            <div className={styles.contactItem}>
            <div className={styles.lineRight}></div>
                <div className={styles.contact}>г .Минск, ул. Колесникова, 38   +375 29 399 54 33</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
            <div className={styles.contactItem}>
                <div className={styles.contact}>г .Минск, ул. Кульман   +375 29 399 54 33</div>
                <div><FaInstagram className={styles.socialtem}/></div>
            </div>
        </div>
    </footer>)
}

export default Footer