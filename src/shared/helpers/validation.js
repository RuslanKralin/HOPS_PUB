import * as Yup from 'yup'

export const nameValidation = () => {
    return Yup.string()
        .min(3, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно имя')
}

export const emailValidation = () => {
    return Yup.string().email('Введите верный email').required('Обязательно')
}

export const passwordValidation = () => {
    return Yup.string()
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно')
}

export const signUpValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Слишком короткое!')
        .max(12, 'Слишком длинное!')
        .required('Обязательно'),
    secondName: Yup.string().typeError('Только буквы').required('Обязательно'),
    email: Yup.string().email('Введите верный email').required('Обязательно'),
    password: Yup.string()
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Обязательно'),
    confirm: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
})