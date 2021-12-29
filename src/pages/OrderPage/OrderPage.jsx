import React from 'react';
import {useSelector} from 'react-redux';
import {calcTotalPrice} from '../../components/utils';
import OrderItem from '../../components/OrderItem/OrderItem';
import './OrderPage.css'

const OrderPage = () => {
    const products = useSelector(state => state.cart.itemsInCart)

    if (products.length === 0) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className="order-page">
            <div className="order-page__items">
                {products.map(product => <OrderItem key={product.id} product={product}/>)}
            </div>
            <div className="order-page__total">
                {products.length} товаров на сумму
                <span>{calcTotalPrice(products)} грн</span>
            </div>
        </div>
    );
};

export default OrderPage;