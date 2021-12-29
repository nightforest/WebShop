import React from 'react';
import {useDispatch} from 'react-redux';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {deleteItemFromCart} from '../../redux/cart/reducer';
import {setCurrentGame} from '../../redux/products/reducer';
import {useNavigate} from 'react-router-dom';
import './OrderItem.css'


const OrderItem = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(setCurrentGame(product))
        navigate(`/products/${product.title}`)
    }

    const deleteClick = () => {
        dispatch(deleteItemFromCart(product.id))
    }

    return (
        <div className="order-item">
            <picture className="order-item__picture" onClick={handleClick}>
                <img className="order-item__img" src={product.models[product.activeColor].image} alt={product.title}/>
            </picture>
            <div className="order-item__title">
                {product.title} - {product.types[product.activeMemory].memory} ({product.models[product.activeColor].name})
            </div>
            <div className="order-item__price">
                {product.types[product.activeMemory].price} грн
            </div>
            <AiOutlineCloseCircle
                className="order-item__delete"
                size={25}
                onClick={deleteClick}
            />
        </div>
    );
};

export default OrderItem;