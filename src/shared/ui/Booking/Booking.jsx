import styles from './styles.module.scss'

import { Button } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FormInput } from '../FormInput';
import { Formik } from 'formik';
import * as yup from 'yup'
import 'react-calendar/dist/Calendar.css';
import { NativePickers } from './ui';


function Booking({ openBooking, setOpenBooking, setOpenOrderModal }) {
    const validationSchema = yup.object().shape({
        name: yup.string()
            .min(3, 'Слишком короткое!')
            .max(12, 'Слишком длинное!')
            .required('Обязательно'),
        secondName: yup.string().typeError('Только буквы').required('Обязательно'),

    })


  function handleClose(){
       if(setOpenOrderModal){
        setOpenOrderModal(false)
       }
       setOpenBooking(false)
  }

  return (


        <div className={styles.wrapper}>
            <AiOutlineCloseCircle className={styles.closeIcon} onClick={() => {
                    handleClose()
            }
            } />

            <Formik
                initialValues={{
                    name: '',
                    secondName: '',
                    phone: '',
                    date: '',
                    number: '',

                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    setOpenBooking(false)
                    setOpenOrderModal(false)
                }}
            >
                {({
                    values,// хранит все текущие значения формика
                    handleSubmit,
                    setFieldValue,

                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '30px', margin: '20px 0' }}>
                        <FormInput name='name' label='Имя' />
                        <FormInput name='secondName' label='Фамилия' />
                        <FormInput name='phone' label='Телефон' />
                        <NativePickers />
                        <FormInput name='number' label='Количество гостей' />

                        <div className={styles.check}>*Администратор свяжется с Вами для уточнения деталей</div>
                        <div className={styles.btn}>
                            <Button 
                            type='submit'
                            variant="contained"
                            color="success"
                            sx={{ width: '250px' }}>
                            Отправить
                        </Button></div>
                    </form>
                )}
            </Formik>


        </div>

    );
}

export default Booking