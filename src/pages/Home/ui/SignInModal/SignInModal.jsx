import styles from './styles.module.scss'
import primeLogo from 'assets/backgraund/primeLogo.png'
import { Button, TextField } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'


function SignInModal({ openSignIn, setOpenSignIn }) {


    return (
        <>
            <div className={styles.wrapper}>
                <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => setOpenSignIn(false)} />
                <img src={primeLogo} className={styles.logo} alt='logo' />
                <div className={styles.forms}>
                    <TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Имя"
                        type="text"
                    />
                    <TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Пароль"
                        type="text"
                    />
                    <div><Button variant="contained" color="success" sx={{ width: '250px' }}>
                        Войти
                    </Button></div>
                </div>
            </div>

        </>);
}

export default SignInModal