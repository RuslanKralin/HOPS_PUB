import styles from './styles.module.scss'
import primeLogo from 'assets/backgraund/primeLogo.png'
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'


function SignUpModal({ openSignUp, setOpenSignUp }) {


    return (
        <>
            
                <div className={styles.wrapper}>

                    <h4 className={styles.info}>*Получи 10% скидку за регистрацию</h4>
                    <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => setOpenSignUp(false)} />

                    <img src={primeLogo} className={styles.logo} alt='logo' />

                    <div><TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Имя"
                        type="text"

                    /></div>
                    <div><TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Фамилия"
                        type="text"

                    /></div>
                    <div><TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Пароль"
                        type="number"

                    /></div>

                    <div><TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Подтвердите пароль"
                        type="number"

                    /></div>
                    <div><TextField
                        className={styles.field}
                        id="outlined-password-input"
                        label="Телефон"
                        type="phone"

                    /></div >
                    <div className={styles.check}><FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Согласен получать рассылку об акционных предложениях" />

                    </FormGroup></div>

                    <div><Button variant="contained" color="success" sx={{ width: '250px' }}>
                        Отправить
                    </Button></div>

                </div>
            
        </>);
}

export default SignUpModal