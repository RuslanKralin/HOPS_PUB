import { Button } from '@mui/material';
import { CaruselInfoModal } from 'shared/ui';
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
                <div><Button variant="contained" sx={{ background: '#002420', width: '12rem', height: '3rem', color: '#fffaf0', fontSize: '1.5rem', fontSize: '1rem', borderRadius: '0px',lineHeight: '110%' }} >ЗАБРОНИРОВАТЬ СТОЛ</Button></div>
                <div><Button variant="contained" sx={{ background: '#002420', width: '12rem', height: '3rem', color: '#fffaf0', fontSize: '1.5rem', fontSize: '1rem', borderRadius: '0px',lineHeight: '110%' }}>АДРЕСА НА КАРТЕ</Button></div>
                <div><Button variant="contained" sx={{ background: '#002420', width: '12rem', height: '3rem', color: '#fffaf0', fontSize: '1.5rem', fontSize: '1rem', borderRadius: '0px',lineHeight: '110%' }}>ОСТАВИТЬ ОТЗЫВ</Button></div>


            </div>
            <div className={styles.line} ></div>
            <div className={styles.restourantField}>
                <div className={styles.leftSection}>
                    <CaruselInfoModal/>
                    <button className={styles.infoFoto}>
                        <img src='https://idei.club/uploads/posts/2022-03/1647411980_2-idei-club-p-interer-paba-v-irlandskom-stile-interer-kr-4.jpg' className={styles.infoFoto} alt='foto' />
                    </button>
                    <div className={styles.restourantDescr}>
                        <h3 className={styles.infoRestLeft}>г.Минск, ул. Колесникова, 38</h3>
                        <p className={styles.infoRestLeft}>Время работы: 11.00 - 23.00 </p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.infoFoto}>
                        <img src='https://idei.club/uploads/posts/2022-03/thumbs/1647412005_9-idei-club-p-interer-paba-v-irlandskom-stile-interer-kr-13.jpg' className={styles.infoFoto} alt='foto' />
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