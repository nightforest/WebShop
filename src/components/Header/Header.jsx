import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';
import CartBlock from '../CartBlock/CartBlock';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="logo">
                    <Link to="/" className="logo__link">
                        WebStore
                    </Link>
                </div>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;