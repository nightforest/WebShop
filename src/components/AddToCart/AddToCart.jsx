import React from 'react';
import Button from '../Button/Button';
import {deleteItemFromCart, setItemInCart} from '../../redux/cart/reducer';
import {useDispatch, useSelector} from 'react-redux';


const AddToCart = ({product, activeMemory, activeColor}) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === product.id)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id))
        } else {
            dispatch(setItemInCart({...product, activeMemory, activeColor}))
        }
    }

    return (
        <Button
            onClick={handleClick}
            type={isItemInCart ? true : null}
        >
            {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
        </Button>
    );
};

export default AddToCart;