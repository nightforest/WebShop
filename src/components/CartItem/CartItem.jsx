import React from 'react';

const CartItem = ({title, price, memory, color}) => {
    return (
        <div className="cart-menu__item">
            <div className="cart-menu__title">
                {title} - {memory} ({color})
            </div>
            <div className="cart-menu__price">
                {price} грн
            </div>

        </div>
    );
};

export default CartItem;