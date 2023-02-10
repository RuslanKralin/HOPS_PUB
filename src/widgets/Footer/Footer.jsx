import styles from './styles.module.scss'
import { FaInstagram } from 'react-icons/fa'
import logoLight from 'assets/backgraund/logoLight.png'

function Footer() {

    return (
        <footer className={styles.footerWrapper}>
            <img src={logoLight} className={styles.logo} alt='logo'/>
            <h3 className={styles.secondTitle}>Контакты</h3>
            <div className={styles.contactsItem}>
                <div className={styles.contactItem}>
                    {/* <div className={styles.lineLeft}></div> */}
                    <div className={styles.contact}><div className={styles.adress}>г .Минск, ул. Кульман</div><div className={styles.phone}>+375 29 399 54 33</div></div>
                    <div><FaInstagram className={styles.socialtem} /></div>
                </div>
                <div className={styles.contactItem}>
                    {/* <div className={styles.lineRight}></div> */}
                    <div className={styles.contact}><div className={styles.adress}>г .Минск, ул. Колесникова, 38</div><div className={styles.phone}>+375 29 142 66 27</div></div>
                    <div><FaInstagram className={styles.socialtem} /></div>
                </div>
                <div className={styles.contactItemRight}>
                    <div className={styles.contactRight}><div className={styles.adress}>Сотрудничество с пивоварней</div><div className={styles.phone}>+375 29 700 90 88</div></div>
                    <div><FaInstagram className={styles.socialtem} /></div>
                </div>
            </div>
        </footer>)
}

export default Footer