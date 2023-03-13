import React, { useState } from 'react';

import { PrimeButton } from 'shared/ui';
import styles from './styles.module.scss'

const API_KEY = 'b95cd364bce2201639a5023f6822e138'

function Brewery() {
    const [weather, setWeather] = useState({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: undefined
    })
    let textInput = React.createRef()

    async function gettingWeater(e) {
        e.preventDefault();
        const city = textInput.current.value
        console.log(city)
        const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        const data = await API_URL.json()
        console.log(data)
        setWeather({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            error: ''
        })
    }


    return (
        <div className={styles.wrapper}>
            <h1>Получаем API прогноза погоды</h1>
            <div className={styles.content}>
                <input type='text'  ref={textInput} name='city' className={styles.input} placeholder='Enter your city please' />

                <PrimeButton title='push' className={styles.btn} 
                    onClick={gettingWeater}
                />
            </div>
            {(weather.city) &&   <div className={styles.weater}>
                <div className={styles.temp}>Temperature:{weather.temp}</div>
                <div className={styles.city}>City:{weather.city}</div>
                <div className={styles.country}>Country:{weather.country}</div>
            </div>
            }
         
        </div>
    )
}

export default Brewery