import styles from './styles.module.scss'

import { Button } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'





function OrderModalAddresses({ openOrderModal, setOpenOrderModal }) {


    return (
        <div className={styles.wrapper}>
            <h4 className={styles.info}>По какому адресу хотите отдохнуть?</h4>
            <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => setOpenOrderModal(false)} />
            <div className={styles.btnWrapper}>
                <Button sx={{ minWidth: '350px', minHeight: '80px', margin: '0 20px' }} variant="contained" color="success">
                    Колесникова, 38
                </Button>
                <Button sx={{ minWidth: '350px', minHeight: '80px', margin: '0 20px' }} variant="contained" color="success">
                    Кульман, 4
                </Button> </div>
        </div>
    );
}

export default OrderModalAddresses