import { Button } from '@mui/material';
import { useState } from 'react';
import styles from './styles.module.scss'

function Basket(props) {
  const { productItem, onAdd, onRemove } = props
  const itemsPrice = productItem.reduce((acc, product) => {
    return acc + product.price * product.qty
  }, 0)
 
  const [comment, setComment] = useState(false)
  return (

    <div className={styles.wrapper}>
      {productItem.length === 0 ? <h2 className={styles.title}>Ваша корзина пуста</h2> : <h2 className={styles.title}>Ваши покупки</h2>}

      {productItem.map((item) => (
        <div key={item.id} className={styles.itemConteiner}>
          <div className={styles.itemName}>{item.name}</div>
          <div className={styles.itemBtns}>
            <button onClick={() => onAdd(item)} className={styles.add}>+</button>
            <button onClick={() => onRemove(item)} className={styles.remove}>-</button>
          </div>
          <div className={styles.summ}>
            {item.qty} * {item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {productItem.length !== 0 && (
        <div className={styles.resultConteiner}>
          <hr className={styles.line}></hr>
          <div className={styles.resultConteinerOptions}>
            <Button variant="contained" color="success" onClick={()=>setComment(true)}> 
              Комментарии к заказу
            </Button>
            <div className={styles.resultTitle}>Итого:</div>
            <div className={styles.resultValue}>{itemsPrice} руб</div>
            <Button variant="contained" color="success"
            // onClick={setOpenBasket(false)}
            >
              Готово
            </Button>
          </div>
          { comment &&   <label>
              <textarea className={styles.textArea} name="postContent" placeholder='Ваши пожелания...' rows={4} cols={40} />
            </label>}
          

        </div>
      )}

    </div>


  );
}

export default Basket