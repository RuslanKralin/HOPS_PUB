import styles from './styles.module.scss'
import primeLogo from 'assets/backgraund/primeLogo.png'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import * as yup from 'yup'
import { Formik } from 'formik';
import { FormInput } from 'shared/ui';




function SignUpModal({ openSignUp, setOpenSignUp }) {
    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, 'Слишком короткое!')
            .max(12, 'Слишком длинное!')
            .required('Обязательно'),
        secondName: yup.string().typeError('Только буквы').required('Обязательно'),
        email: yup.string().email('Введите верный email').required('Обязательно'),
        password: yup.string()
            .min(6, 'Too short!')
            .max(12, 'Too long!')
            .required('Обязательно'),
        confirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
    })

    return (


        <div className={styles.wrapper}>

            <h4 className={styles.info}>*Получи 10% скидку за регистрацию</h4>
            <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => setOpenSignUp(false)} />

            <img src={primeLogo} className={styles.logo} alt='logo' />

            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    email: '',
                    password: '',
                    confirm: '',

                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)

                }}

            >
                {({
                    values,// хранит все текущие значения формика
                    handleSubmit,
                    setFieldValue,


                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '30px' }}>
                        <FormInput name='name' label='Имя' />
                        <FormInput name='secondName' label='Фамилия' />
                        <FormInput name='email' label='Email' />
                        <FormInput name='password' label='Пароль' />
                        <FormInput name='confirm' label='Подтверждение пароля' />


                        <div className={styles.check}><FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Согласен получать рассылку об акционных предложениях" />

                        </FormGroup></div>

                        <div className={styles.btn}><Button onClick={handleSubmit} variant="contained" color="success" sx={{ width: '250px' }}>
                            Отправить
                        </Button></div>



                    </form>
                )}
            </Formik>


        </div>

    );
}

export default SignUpModal