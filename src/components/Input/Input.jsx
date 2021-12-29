import React from 'react';
import './Input.css'

const Input = ({value, onChange, placeholder, type}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="input"
        />
    );
};

export default Input;