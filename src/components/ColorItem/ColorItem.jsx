import React from 'react';
import './ColorItem.css'

const ColorItem = ({model, id, activeColor, setActiveColor}) => {
    return (
        <div
            onClick={() => setActiveColor(id)}
            className=
                {id === activeColor
                    ? "color-item is-active"
                    : "color-item"
                }
            style={{backgroundColor: model.color}}

            title={model.name}
        >
        </div>
    );
};

export default ColorItem;