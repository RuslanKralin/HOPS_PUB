import styles from './styles.module.scss'
import foto from 'assets/backgraund/foto.jpg'
import logoLight from 'assets/backgraund/logoLight.png'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import { FaTiktok, FaInstagram } from 'react-icons/fa'
import { CiBeerMugFull } from 'react-icons/ci'
import { BiMusic } from 'react-icons/bi'
import { GiSlicedBread } from 'react-icons/gi'
import { MdSportsBasketball } from 'react-icons/md'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ROUTES } from 'shared/consts'

function HomeHeader() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.fullScreen}>
                <div className={styles.fullScreenBody}>
                    <div className={styles.socialField}>
                        <FiFacebook className={styles.socialtem} />
                        <FiTwitter className={styles.socialtem} />
                        <FaTiktok className={styles.socialtem} />
                        <FaInstagram className={styles.socialtem} />
                    </div>
                    <div className={styles.centralField}>
                        <div className={styles.centralFieldItems}>
                            <img src={logoLight} className={styles.logo}/>
                        </div>
                        <div className={styles.fullScreenLinks}>
                            <ul className={styles.navLinks}>
                                <Link className={styles.linkItem} to={ROUTES.RESTAURANT}>
                                    <li>Рестораны</li>
                                </Link>
                                <Link className={styles.linkItem} to={ROUTES.MENU}>
                                    <li>Меню</li>
                                </Link>
                                <li className={styles.linkItem}>Доставка</li>
                                <Link className={styles.linkItem} to={ROUTES.BREWERY}>
                                    <li>Пивоварня</li>
                                </Link>
                                
                                <li className={styles.linkItem}>Магазины</li>
                                <li className={styles.linkItem}>Акции</li>
                                <li className={styles.linkItem}>Контакты</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.registrationField}>
                        <Button variant="outlined" color="inherit" sx={{ width: '4rem', height: '1.5rem', fontSize: '0.8rem' }}>Вход</Button>
                        <Button variant="outlined" color="inherit" sx={{ width: '7rem', height: '1.5rem', fontSize: '0.8rem' }}>РЕГИСТРАЦИЯ</Button>

                    </div>

                </div>
                <img src={foto} className={styles.fullScreenFoto} alt='foto' />
                <div className={styles.title}>
                    ЖАРИМ ВСЁ, ЧТО <br></br>
                    ЛЕТАЕТ, ПЛАВАЕТ И БЕГАЕТ <br></br>
                    В ПЕЧИ JOSPER
                </div>
                <div className={styles.btn}>
                    <Button variant="contained" disableElevation sx={{ background: '#c32a2a', width: '15rem', height: '4rem'}}>
                        <div className={styles.textBtn}>ЗАБРОНИРОВАТЬ СТОЛ</div>
                    </Button>
                </div>
                <div className={styles.advertisingField}>
                    <div className={styles.advertisingIcon}>
                        <div><CiBeerMugFull className={styles.icon} /></div>
                        <div className={styles.describe}>Собственная пивоварня</div>
                    </div>
                    <div className={styles.advertisingIcon}>
                        <div><BiMusic className={styles.icon} /></div>
                        <div className={styles.describe}>Живой звук</div>
                    </div>
                    <div className={styles.advertisingIcon}>
                        <div><GiSlicedBread className={styles.icon} /></div>
                        <div className={styles.describe}>Собственная кондитерская и хлеб</div>
                    </div>
                    <div className={styles.advertisingIcon}>
                        <div><MdSportsBasketball className={styles.icon} /></div>
                        <div className={styles.describe}>Спортивные трансляции</div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default HomeHeader