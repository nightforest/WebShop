import React, {useCallback, useState} from 'react';
import './CartBlock.css'
import {BiCartAlt} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import CartMenu from '../CartMenu/CartMenu';
import {calcTotalPrice} from '../utils';
import {useNavigate} from 'react-router-dom';

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className="cart">
            {items.length
                ? <div className="cart__count">{items.length}</div>
                : null
            }
            <BiCartAlt
                size={25}
                className="cart__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0
                ? <div className="cart__total-price">{totalPrice} грн</div>
                : null
            }
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    );
};

export default CartBlock;