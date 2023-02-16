import React, { Component } from 'react';
import styles from './styles.module.scss'
import img1 from '../../../assets/slader1/img1.jpg'
import img2 from '../../../assets/slader1/img2.jpg'
import img3 from '../../../assets/slader1/img3.jpg'
import img4 from '../../../assets/slader1/img4.jpg'
import { Carousel } from 'react-bootstrap';
// import { Carousel.Item } from 'react-bootstrap';

function CaruselInfoModal() {
    return (
        <>
            <div className={styles.wrapper}>
                
                <Carousel>
                    <Carousel.Item>
                       <img 
                       className='d-block w-100%'
                       src={img1}
                       alt='pub'/>
                    </Carousel.Item>
                    <Carousel.Caption>
                        <h3>Колесникова, 38</h3>
                    </Carousel.Caption>

                    <Carousel.Item>
                       <img 
                       className='d-block w-100%'
                       src={img2}
                       alt='pub'/>
                    </Carousel.Item>
                    <Carousel.Caption>
                        <h3>Колесникова, 38</h3>
                    </Carousel.Caption>

                </Carousel>
            </div>


        </>

    );
}

export default CaruselInfoModal