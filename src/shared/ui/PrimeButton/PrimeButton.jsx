import styles from './styles.module.scss'

function PrimeButton({title, style, onClick}) {
    return (
        <button 
        onClick={onClick}
        className={styles.btn}
        style={style}
        >{title}</button>
    );
}

export default PrimeButton