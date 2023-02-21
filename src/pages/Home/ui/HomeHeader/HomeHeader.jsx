import styles from './styles.module.scss'
import primeHomePhoto from 'assets/backgraund/primeHomePhoto.jpg'
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
import { SignUpModal } from '../SignUpModal'
import { SignInModal } from '../SignInModal'
import { useState } from 'react'
import { PrimeButton } from 'shared/ui'
import OrderModalAddresses from '../../../../shared/ui/OrderModalAddresses/OrderModalAddresses'




function HomeHeader() {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openOrderModal, setOpenOrderModal] = useState(false);


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
                            <img src={logoLight} className={styles.logo} alt="logo" />
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


                        <Button onClick={() => {
                            setOpenSignIn(true)
                            setOpenSignUp(false)
                        }}
                            variant="outlined" color="inherit" sx={{ width: '4rem', height: '1.5rem', fontSize: '0.8rem' }}>Вход</Button>
                        <Button onClick={() => {
                            setOpenSignUp(true)
                            setOpenSignIn(false)
                        }}
                            variant="outlined" color="inherit" sx={{ width: '7rem', height: '1.5rem', fontSize: '0.8rem' }}>РЕГИСТРАЦИЯ</Button>
                        {openSignIn && <SignInModal openSignIn={openSignIn} setOpenSignIn={setOpenSignIn} />}
                        {openSignUp && <SignUpModal openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} />}


                    </div>

                </div>
                <div className={styles.color}><img src={primeHomePhoto} className={styles.fullScreenFoto} alt="logo" /></div>
                <div className={styles.title}>
                    ЖАРИМ ВСЁ, ЧТО <br></br>
                    ЛЕТАЕТ, ПЛАВАЕТ И БЕГАЕТ <br></br>
                    В ПЕЧИ JOSPER
                </div>
                <div className={styles.btn}>
                    <PrimeButton onClick={() => setOpenOrderModal(true)}
                        title='забронировать стол' style={{ 'width': '350px' }} />
                    {openOrderModal && <OrderModalAddresses openOrderModal={openOrderModal} setOpenOrderModal={setOpenOrderModal} />}
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