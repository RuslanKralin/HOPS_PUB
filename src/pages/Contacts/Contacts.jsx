import styles from './styles.module.scss'
import contacts from 'assets/backgraund/contacts.jpg'

function Contacts() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <img src={contacts} className={styles.img} />
                <h1 className={styles.title}>Адреса и контакты</h1>
            </div>
            <div className={styles.sectionWrapper}>
                <div className={styles.infoSection}>
                    <h3>Колесникова, 38</h3>
                    <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44697.192679571475!2d27.460809498465288!3d53.92984437657101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc4db577b495f%3A0xa61d9754aadcc69f!2z0YPQu9C40YbQsCDQmtC-0LvQtdGB0L3QuNC60L7QstCwIDM4LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1678465072000!5m2!1sru!2sby"></iframe>
                    </div>
                    <div className={styles.contactInfo}>
                        <h3>тел. +375 29 000 00 00</h3>
                        <div className={styles.legalInfo}>
                            УНП 123456789 567890 выдано вапрокапнрол
                        </div>
                        <div className={styles.timeInfo}>
                            ВС-ЧТ: 11.00 - 23.00 <br></br>
                            ПТ-СБ: 11.00 - 01.00
                        </div>
                    </div>
                </div>

                <div className={styles.infoSection}>
                    <h3>Кульман, 4</h3>
                    <div className={styles.map}>

                    </div>
                    <div className={styles.contactInfo}>
                        <h3>тел. +375 29 000 00 00</h3>
                        <div className={styles.legalInfo}>
                            УНП 123456789 567890 выдано вапрокапнрол
                        </div>
                        <div className={styles.timeInfo}>
                            ВС-ЧТ: 11.00 - 23.00 <br></br>
                            ПТ-СБ: 11.00 - 01.00
                        </div>
                    </div>
                </div>


            </div>



        </div>)

}

export default Contacts