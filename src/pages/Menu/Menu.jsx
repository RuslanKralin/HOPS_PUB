import { useEffect, useState } from "react"
import { FoodMenu, MenuHeader } from './ui'


function Menu() {
    const [openBasket, setOpenBasket] = useState(false)
    const [productItem, setProductItems] = useState(JSON.parse(localStorage.getItem('Basket')) || [])

    useEffect(()=>{
        localStorage.setItem('Basket', JSON.stringify(productItem))
    },[productItem])

    const onAdd = (product) => {
        console.log('sucsses')
        const exist = productItem.find(x => x.id === product.id);
        if (exist) {
            setProductItems(
                productItem.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setProductItems([...productItem, { ...product, qty: 1 }])
        }
    }

    const onRemove = (product) =>{
        const exist = productItem.find((x) => x.id === product.id)
        if(exist.qty === 1){
            setProductItems(productItem.filter((x) => x.id !== product.id))
        } else {
            setProductItems(
                productItem.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty - 1} : x
                )
            )
        }
    }

    return <div>
        <MenuHeader
            openBasket={openBasket}
            setOpenBasket={setOpenBasket}
            productItem={productItem}
            setProductItems={setProductItems}
            onAdd={onAdd}
            onRemove={onRemove}
            countCartItems={productItem.length}
        />
        <FoodMenu
            productItem={productItem}
            setProductItems={setProductItems}
            onAdd={onAdd}
        />

    </div>
}

export default Menu