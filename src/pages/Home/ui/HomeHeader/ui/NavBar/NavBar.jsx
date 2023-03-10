import React from "react"
import styles from './styles.module.scss'
import { ROUTES } from 'shared/consts'

function NavBar() {

    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li>
                    <a href={ROUTES.RESTAURANT} className={styles.menuLink}>Рестораны</a>
                </li>
                <li>
                    <a href={ROUTES.MENU} className={styles.menuLink}>Меню</a>
                </li>
                <li>
                    <a href="#" className={styles.menuLink}>Доставка</a>
                    <ul className={styles.subMenuList}>
                        <li ><a href="#" className={styles.subMenuLink}>Яндекс</a>
                            <ul className={styles.subSubMenuList}>
                                <li><a href="https://eda.yandex.by/r/clever_rock_pub?placeSlug=clever_rock_pub" target="_blank" className={styles.subSubMenuLink}>Колесникова, 38</a></li>
                                <li><a href="https://eda.yandex.by/restaurant/xosper_xops_pab?category=28118808&item=534737063" target="_blank" className={styles.subSubMenuLink}>Кульман, 4</a></li>
                            </ul>
                        </li>
                        <li ><a href="#" className={styles.subMenuLink}>Деливио</a>
                            <ul className={styles.subSubMenuList}>
                                <li><a href="https://delivio.by/restaurant/clever" target="_blank" className={styles.subSubMenuLink}>Колесникова, 38</a></li>
                                <li><a href="https://delivio.by/restaurant/hopspubkulman" target="_blank" className={styles.subSubMenuLink}>Кульман, 4</a></li>
                            </ul>
                            </li>
                    </ul>
                </li>
                <li>
                    <a href={ROUTES.BREWERY} className={styles.menuLink}>Пивоварня</a>
                </li>
                <li>
                    <a href="dfghj" className={styles.menuLink}>Магазины</a>
                </li>
                <li>
                    <a href="#stock" className={styles.menuLink}>Акции</a>
                </li>
                <li>
                    <a href={ROUTES.CONTACTS} className={styles.menuLink}>Контакты</a>
                </li>

            </ul>
        </nav>
    )





}

export default NavBar