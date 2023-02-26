import styles from './styles.module.scss'

function Basket(props) {
  const { productItem, setProductItems, onAdd, onRemove } = props
  const itemsPrice = productItem.reduce((acc, product) => {
    return acc + product.price * product.qty
  }, 0)

  return (
      
      <div className={styles.wrapper}>
        {productItem.length === 0 ? <h2 className={styles.title}>Ваша корзина пуста</h2> : <h2 className={styles.title}>Ваша корзина</h2>}

        {productItem.map((item) => (
          <div key={item.id} className={styles.itemConteiner}>
            {/* <div  className={styles.col2}>{item.image}</div> */}
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
          <div>
            <hr></hr>
            <div>Итого</div>
            <div>{itemsPrice} руб</div>

          </div>
         )}

          </div>

     
      );
}

      export default Basket