import styles from './styles.module.scss'
import { FaInstagram } from 'react-icons/fa'
import logoLight from 'assets/backgraund/logoLight.png'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer className={styles.footerWrapper}>
            <img src={logoLight} className={styles.logo} alt='logo'/>
            <h3 id='contacts' className={styles.secondTitle}>Контакты</h3>
            <div className={styles.contactsItem}>
                <div className={styles.contactItem}>
                   
                    <div className={styles.contact}><div className={styles.adress}>г .Минск, ул. Кульман</div><div className={styles.phone}>+375 29 399 54 33</div></div>
                    
                    <div><Link target="_blank" to='https://instagram.com/hosper_pub?igshid=YmMyMTA2M2Y=' ><FaInstagram className={styles.socialtem} /></Link>
                        </div>
                </div>
                <div className={styles.contactItem}>
                 
                    <div className={styles.contact}><div className={styles.adress}>г .Минск, ул. Колесникова, 38</div><div className={styles.phone}>+375 29 142 66 27</div></div>
                    <div><Link target="_blank" to='https://instagram.com/hosper_hops_pub?igshid=YmMyMTA2M2Y=' ><FaInstagram className={styles.socialtem} /></Link></div>
                </div>
                <div className={styles.contactItemRight}>
                    <div className={styles.contactRight}><div className={styles.adress}>Сотрудничество с пивоварней</div><div className={styles.phone}>+375 29 700 90 88</div></div>
                    <div><a href='https://instagram.com/hops_brewery?igshid=YmMyMTA2M2Y=' target="_blank"><FaInstagram className={styles.socialtem} /></a></div>
                </div>
            </div>
        </footer>)
}

export default Footer