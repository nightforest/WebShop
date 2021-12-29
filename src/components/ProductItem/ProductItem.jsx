import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentGame} from '../../redux/products/reducer';
import {useNavigate} from 'react-router-dom';
import './ProductItem.css'
import AddToCart from '../AddToCart/AddToCart';
import MemoryItem from '../MemoryItem/MemoryItem';
import ColorItem from '../ColorItem/ColorItem';

const ProductItem = ({product}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [activeMemory, setActiveMemory] = useState(0)
    const [activeColor, setActiveColor] = useState(0)

    const handleClick = () => {
        dispatch(setCurrentGame(product))
        navigate(`/products/${product.title}`)
    }

    return (
        <div className="product-item">
            <div className="product-item__header">
                <picture className="product-item__picture" onClick={handleClick}>
                    <img className="product-item__img" src={product.models[activeColor].image} alt={product.title}/>
                </picture>
                <div className="product-item__colors">
                    {
                        product.models.map((model, id) =>
                            <ColorItem
                                model={model}
                                id={id}
                                key={id}
                                activeColor={activeColor}
                                setActiveColor={setActiveColor}
                            />
                        )
                    }
                </div>
            </div>


            <div className="product-item__content">
                <div className="product-item__title" onClick={handleClick}>
                    {product.title}
                </div>
                <div className="product-item__type">
                    {
                        product.types.map((type, id) =>
                            <MemoryItem
                                type={type}
                                id={id}
                                key={id}
                                product={product}
                                activeMemory={activeMemory}
                                setActiveMemory={setActiveMemory}
                            />
                        )
                    }
                </div>

                <div className="product-item__descr">
                    {product.description}
                </div>

                <div className="product-item__bottom">
                    <div className="product-item__price">{product.types[activeMemory].price} грн</div>
                    <AddToCart product={product} activeColor={activeColor} activeMemory={activeMemory}/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;