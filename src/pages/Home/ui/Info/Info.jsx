import { Button } from '@mui/material';
import styles from './styles.module.scss'

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
                <div><Button variant="contained"  sx={{background: '#002420', width: '23rem',height: '5rem', color:'#fffaf0', fontSize: '1.5rem' }}className={styles.infoBtn}>ЗАБРОНИРОВАТЬ СТОЛ</Button></div>
                <div><Button variant="contained"  sx={{background: '#002420', width: '23rem',height: '5rem', color:'#fffaf0', fontSize: '1.5rem' }}className={styles.infoBtn}>АДРЕСА НА КАРТЕ</Button></div>
                <div><Button variant="contained"  sx={{background: '#002420', width: '23rem',height: '5rem', color:'#fffaf0', fontSize: '1.5rem' }}className={styles.infoBtn}>ОСТАВИТЬ ОТЗЫВ</Button></div>
               
              
            </div>
            <div className={styles.line} ></div>
            <div className={styles.restourantField}>
                <div className={styles.leftSection}>
                    <button>
                        <img src='' alt='foto' />
                    </button>
                    <div className={styles.restourantDescr}></div>
                </div>
                <div className={styles.rightSection}>
                    <button>
                        <img src='' alt='foto' />
                    </button>
                    <div className={styles.restourantDescr}></div>
                </div>



            </div>

        </div>
        // sx={{background-color: '#002420'}}
    );
}

export default Info