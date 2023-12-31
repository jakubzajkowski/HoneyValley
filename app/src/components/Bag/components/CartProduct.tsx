import React from 'react'
import { CartProductContainer,ProductInfo,ProductImg } from '../../styles'
import { DeleteCartHandler } from '../../../handlers/DeleteCartHandler'

interface CartProductProps {
    img : string
    title : string
    price: number
    id: string
}

const CartProduct: React.FC<CartProductProps> = ({img,title,price,id}) => {
  return (
    <CartProductContainer>
        <ProductImg>
            <img src={img} alt="img" style={{width:'100%'}} />
        </ProductImg>
        <ProductInfo>
            <svg onClick={()=>DeleteCartHandler(id)} style={{cursor:'pointer',width:'20px',height:'20px'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            <h3>{title}</h3>
            <p>{price}0 Eur</p>
        </ProductInfo>
    </CartProductContainer> 
  )
}

export default CartProduct