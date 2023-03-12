import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styles from './styles.module.scss'
import img1 from 'assets/slader1/img1.jpg'
import img2 from 'assets/slader1/img2.jpg'
import img3 from 'assets/slader1/img3.jpg'
import img4 from 'assets/slader1/img4.jpg'
import img5 from 'assets/slader2/img5.jpg'
import img6 from 'assets/slader2/img6.jpg'
import img7 from 'assets/slader2/img7.jpg'
import img9 from 'assets/slader2/img9.jpg'
import { PrimeButton } from 'shared/ui';
// import { ROUTES } from 'shared/consts';


function Info() {
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.descriptionField}>
                <div className={styles.titleInfo}>Добро пожаловать в Хоспер Хопс Паб</div>
                <div className={styles.descrip}>
                    <p className={styles.text}>Место в Минске, где вы можете попробовать ароматный стейк из испанской печи, выпить настоящего крафта и наблюдать матч своей любимой команды</p>
                </div>
                <div className={styles.titleInfo} >Пей, ешь и кайфуй</div>
            </div>
            <div className={styles.line} ></div>
            <div className={styles.btnField}>
                <PrimeButton title='мы на карте'/>
                <PrimeButton title='кейтеринг'/>
                <PrimeButton title='отзыв'/>
            </div>
            <div className={styles.line} ></div>
            <div className={styles.restourantField}>
                <section className={styles.left}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={img1}
                                alt='slide1'
                            />
                            <Carousel.Caption>
                                <h3>Колесникова, 38</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={img2}
                                alt='slide2'
                            />
                            <Carousel.Caption>
                                <h3>Колесникова, 38</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className='d-block w-100'
                                src={img3}
                                alt='slide3'
                            />
                            <Carousel.Caption>
                                <h3>Колесникова, 38</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className='d-block w-100'
                                src={img4}
                                alt='slide3'
                            />
                            <Carousel.Caption>
                                <h3>Колесникова, 38</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className={styles.title}><h5 className={styles.title}>Время работы:</h5></div>
                    <div><h5 className={styles.time}>11.00 - 23.00 Вс-Чт</h5></div>
                    <div><h5 className={styles.time}>11.00 - 02.00 Пт-Сб</h5></div>

                </section>
                <section className={styles.right}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={img5}
                                alt='slide1'
                            />
                            <Carousel.Caption>
                                <h3>Кульман, 4</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src={img6}
                                alt='slide2'
                            />
                            <Carousel.Caption>
                                <h3>Кульман, 4</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className='d-block w-100'
                                src={img7}
                                alt='slide3'
                            />
                            <Carousel.Caption>
                                <h3>Кульман, 4</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className='d-block w-100'
                                src={img9}
                                alt='slide3'
                            />
                            <Carousel.Caption>
                                <h3>Кульман, 4</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div><h5 className={styles.title}>Время работы:</h5></div>
                    <div><h5 className={styles.time}>11.00 - 23.00 Вс-Чт</h5></div>
                    <div><h5 className={styles.time}>11.00 - 01.00 Пт-Сб</h5></div>
                </section>
            </div>
        </div>

    );
}

export default Info