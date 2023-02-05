import { Button } from '@mui/material';
import styles from './styles.module.scss'
import foto2 from 'assets/backgraund/foto2.jpg'
import foto3 from 'assets/backgraund/foto3.jpg'

function Info() {
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.descriptionField}>
                <div className={styles.title}>Добро пожаловать в Хоспер Хопс Паб</div>
                <div className={styles.descrip}>
                    <p>Место в Минске, где вы можете попробовать ароматный стейк из испанской печи, выпить настоящего крафта и наблюдать матч своей любимой команды</p>
                </div>
                <div className={styles.title} >Пей, ешь и кайфуй</div>
            </div>
            <div className={styles.line} ></div>
            <div className={styles.btnField}>
                <div><Button variant="contained" sx={{ background: '#002420', width: '23rem', height: '5rem', color: '#fffaf0', fontSize: '1.5rem' }} className={styles.infoBtn}>ЗАБРОНИРОВАТЬ СТОЛ</Button></div>
                <div><Button variant="contained" sx={{ background: '#002420', width: '23rem', height: '5rem', color: '#fffaf0', fontSize: '1.5rem' }} className={styles.infoBtn}>АДРЕСА НА КАРТЕ</Button></div>
                <div><Button variant="contained" sx={{ background: '#002420', width: '23rem', height: '5rem', color: '#fffaf0', fontSize: '1.5rem' }} className={styles.infoBtn}>ОСТАВИТЬ ОТЗЫВ</Button></div>


            </div>
            <div className={styles.line} ></div>
            <div className={styles.restourantField}>
                <div className={styles.leftSection}>
                    <button>
                        <img src='https://lh3.googleusercontent.com/p/AF1QipMKC2LMva4aFFSYvVIgkvh4YMTzlRE4cq14qSQB=s1360-w1360-h1020' className={styles.infoFoto} alt='foto' />
                    </button>
                    <div className={styles.restourantDescr}>
                        <h3 className={styles.infoRestLeft}>г.Минск, ул. Колесникова, 38</h3>
                        <p className={styles.infoRestLeft}>Время работы: 11.00 - 23.00 </p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <button>
                        <img src='https://lh3.googleusercontent.com/p/AF1QipOL2OX19bm9-ipuS5UkvFVgbpS2Wh5NSNaIDqCp=s1360-w1360-h1020' className={styles.infoFoto} alt='foto' />
                    </button>
                    <div className={styles.restourantDescr}>
                        <h3 className={styles.infoRestRight}>г.Минск, ул.Кульман, 4</h3>
                        <p className={styles.infoRestRight}>Время работы: 11.00 - 23.00 </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Info