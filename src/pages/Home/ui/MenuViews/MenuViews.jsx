import styles from './styles.module.scss'



function MenuViews() {
    return (
        <div className={styles.menuWrapper}>
                <div className={styles.leftSection}>
                    <button className={styles.menuBtnLeft}> FOOD
                    </button>
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.menuBtnRight}>DRINK
                    </button>
                </div>
        </div>

    );
}

export default MenuViews