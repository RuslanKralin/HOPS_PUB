
import { Carousel } from 'react-bootstrap'
import img1 from 'assets/slader1/img1.jpg'
import img2 from 'assets/slader1/img2.jpg'
import img3 from 'assets/slader1/img3.jpg'

import styles from './styles.module.scss'

function Brewery() {

    return (
        <Carousel>
            <Carousel.Item>
               <img
               className='d-block w-100'
               src={img1}
               alt="first slide"
               />
               <Carousel.Caption>Колесникова, 38</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
               className='d-block w-100'
               src={img1}
               alt="first slide"
               />
               <Carousel.Caption>Колесникова, 38</Carousel.Caption>
            </Carousel.Item>
        </Carousel>



    )
}

export default Brewery