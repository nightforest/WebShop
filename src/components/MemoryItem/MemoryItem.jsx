import React from 'react';
import {deleteItemFromCart} from '../../redux/cart/reducer';
import {useDispatch, useSelector} from 'react-redux';
import './MemoryItem.css'

const MemoryItem = ({type, id, product, activeMemory, setActiveMemory}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === product.id)

    const memoryClick = (id) => {
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id))
            setActiveMemory(id)
        } else {
            setActiveMemory(id)
        }
    }

    return (
        <div
            onClick={() => memoryClick(id)}
            className=
                {id === activeMemory
                    ? "memory-item is-active"
                    : "memory-item"
                }
            >
            {type.memory}
        </div>
    );
};

export default MemoryItem;