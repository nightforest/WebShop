import React from 'react';
import {calcTotalPrice} from '../utils';
import Button from '../Button/Button';
import './CartMenu.css'
import CartItem from '../CartItem/CartItem';

const CartMenu = ({items, onClick}) => {
    return (
        <div className="cart-menu">
            <div className="cart-menu__list">
                {items.length
                    ? items.map(product =>
                        <CartItem
                            key={product.title}
                            title={product.title}
                            price={product.types[product.activeMemory].price}
                            memory={product.types[product.activeMemory].memory}
                            color={product.models[product.activeColor].name}
                            id={product.id}
                        />)
                    : <span>Корзина пуста</span>
                }
            </div>
            {
                items.length
                    ?
                        <div className="cart-menu__bottom">
                            <div className="cart-menu__total">
                                <span>Итого:</span>
                                <span>{calcTotalPrice(items)} грн</span>
                            </div>
                            <Button onClick={onClick}>
                                Оформить заказ
                            </Button>
                        </div>
                    :
                        null
            }

        </div>

    );
};

export default CartMenu;