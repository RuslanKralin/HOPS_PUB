import contacts from 'assets/backgraund/contacts.jpg'

import styles from './styles.module.scss'

function Contacts() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={contacts} className={styles.img} alt='logo' />
                <h1 className={styles.title}>Адреса и контакты</h1>
            </div>
            <div className={styles.sectionWrapper}>
                <div className={styles.infoSection}>

                    <div>
                        <iframe className={styles.map} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44697.192679571475!2d27.460809498465288!3d53.92984437657101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc4db577b495f%3A0xa61d9754aadcc69f!2z0YPQu9C40YbQsCDQmtC-0LvQtdGB0L3QuNC60L7QstCwIDM4LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1678465072000!5m2!1sru!2sby"></iframe>
                    </div>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.contactTitle}>Колесникова, 38</h3>
                        <h3 className={styles.contactPhone} >тел. +375 29 142 66 27</h3>
                        <div className={styles.legalInfo}>
                            ООО "Хоспер групп"<br></br>
                            220055 г.Минск, ул.Колесникова, 38-64, тел/факс(017) 318 03 11<br></br>
                            р/с BY24MTBK30120001093300094117 в ЗАО "МТБанк", <br></br>
                            код MTBKBY22 г.Минск, ул.Толстого, 10<br></br>
                            УНП 192782074
                        </div>
                        <div className={styles.timeInfo}>
                            <h4>График работы</h4>
                            ВС-ЧТ: 11.00 - 23.00 <br></br>
                            ПТ-СБ: 11.00 - 01.00
                        </div>
                    </div>
                </div>
                <hr className={styles.solid}></hr>
                <div className={styles.infoSection}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.contactTitle}>Кульман, 4</h3>
                        <h3 className={styles.contactPhone} >тел. +375 29 399 54 33</h3>
                        <div className={styles.legalInfo}>
                            ООО "Налибоки-Н"<br></br>
                            220013 г.Минск, ул.Кульман, 4/1<br></br>
                            р/с BY49BELB30120003400050526000 в ОАО "Банк БелВЭБ", <br></br>
                            код BELBBY2X г.Минск, ул.Мясникова, 32<br></br>
                            УНП 101275954
                        </div>
                        <div className={styles.timeInfo}>
                            <h4>График работы</h4>
                            ВС-ЧТ: 11.00 - 23.00 <br></br>
                            ПТ-СБ: 11.00 - 01.00
                        </div>
                    </div>
                    <div >
                    <iframe className={styles.map} title='map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.6849686817286!2d27.5846418!3d53.919573799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa11f4664bd%3A0x68f2e129d1bed462!2z0YPQuy4g0JrRg9C70YzQvNCw0L0gNCwg0JzQuNC90YHQuiAyMjAwODk!5e0!3m2!1sru!2sby!4v1678533684541!5m2!1sru!2sby" ></iframe>
                    </div>
                </div>
            </div>



        </div>)

}

export default Contacts