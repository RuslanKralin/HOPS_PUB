import React from "react"
import styles from './styles.module.scss'

function NavBar() {

    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li>
                    <a href="#" className={styles.menuLink}>Рестораны</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Меню</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Доставка</a>
                    <ul className={styles.subMenuList}>
                        <li ><a href="#" className={styles.subMenuLink}>Яндекс</a>
                            <ul className={styles.subSubMenuList}>
                                <li><a href="#" className={styles.subSubMenuLink}>Колесникова, 38</a></li>
                                <li><a href="https://eda.yandex.by/restaurant/xosper_xops_pab?category=28118808&item=534737063" className={styles.subSubMenuLink}>Кульман, 4</a></li>
                            </ul>
                        </li>
                        <li ><a href="#" className={styles.subMenuLink}>Деливио</a>
                            <ul className={styles.subSubMenuList}>
                                <li><a href="#" className={styles.subSubMenuLink}>Колесникова, 38</a></li>
                                <li><a href="#" className={styles.subSubMenuLink}>Кульман, 4</a></li>
                            </ul>
                            </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Пивоварня</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Магазины</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Акции</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Контакты</a>
                </li>

            </ul>
        </nav>
    )





}

export default NavBar