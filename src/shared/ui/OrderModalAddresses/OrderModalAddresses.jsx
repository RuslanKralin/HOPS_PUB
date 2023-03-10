import styles from './styles.module.scss'

import { Button } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react';
import { Booking } from "shared/ui";





function OrderModalAddresses({ setOpenOrderModal }) {
    const [openBooking, setOpenBooking] = useState(false)

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.info}>По какому адресу хотите отдохнуть?</h4>
            <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => setOpenOrderModal(false)} />
            <div className={styles.btnWrapper}>
                <Button onClick={()=> setOpenBooking(true)}
                    sx={{ minWidth: '350px', minHeight: '80px', margin: '0 20px' }} variant="contained" color="success">
                    Колесникова, 38
                </Button>
                {openBooking && <Booking openBooking={openBooking} setOpenBooking={setOpenBooking} setOpenOrderModal={setOpenOrderModal}/>}
                <Button onClick={()=> setOpenBooking(true)}
                 sx={{ minWidth: '350px', minHeight: '80px', margin: '0 20px' }} variant="contained" color="success">
                    Кульман, 4
                </Button> </div>
        </div>
    );
}

export default OrderModalAddresses