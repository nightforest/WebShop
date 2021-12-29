import React from 'react';
import './button.css'

const Button = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
    return (
        <button className={type ? 'button button--grey' : 'button'} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;