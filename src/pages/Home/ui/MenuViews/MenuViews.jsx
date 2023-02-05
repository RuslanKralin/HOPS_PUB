import { Button } from '@mui/material';
import styles from './styles.module.scss'
import foto2 from 'assets/backgraund/foto2.jpg'


function MenuViews() {
    return (
        <div className={styles.menuWrapper}>
                <div className={styles.leftSection}>
                    <button className={styles.menuBtnLeft}> FOOD
                        {/* <img src={foto2} className={styles.infoFoto} alt='foto' /> */}
                    </button>
                    
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.menuBtnRight}>DRINK
                        {/* <img src='https://amwine.ru/upload/blog/22-07-2019/2.jpg' className={styles.infoFoto} alt='foto' /> */}
                    </button>
                  
                </div>
        </div>

    );
}

export default MenuViews