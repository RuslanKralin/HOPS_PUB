import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import styles from './styles.module.scss'



function MenuViews() {
    return (
        <div className={styles.menuWrapper}>
            <div className={styles.leftSection}>
                <Link to={ROUTES.MENU}>
                    <button  className={styles.menuBtnLeft}>FOOD
                    </button>
                </Link>

            </div>
            <div className={styles.rightSection}>
            <Link to={ROUTES.MENU}>
                    <button className={styles.menuBtnRight}>DRINK
                </button>
                </Link>
                
            </div>
        </div>

    );
}

export default MenuViews