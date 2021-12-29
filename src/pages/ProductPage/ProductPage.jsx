import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import AddToCart from '../../components/AddToCart/AddToCart';
import MemoryItem from '../../components/MemoryItem/MemoryItem';
import ColorItem from '../../components/ColorItem/ColorItem';
import './ProductPage.css'

const ProductPage = () => {
    const product = useSelector(state => state.product.currentProduct)
    const [activeMemory, setActiveMemory] = useState(0)
    const [activeColor, setActiveColor] = useState(0)

    if (!product) return null

    return (
        <div className="product-page">
            <div className="product-page__content">
                <div className="product-page__left">
                    <picture className="product-page__picture">
                        <img className="product-page__img" src={product.models[activeColor].image} alt={product.title}/>
                    </picture>

                    <div className="product-page__colors">
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

                <div className="product-page__right">
                    <h1 className="product-page__title">{product.title}</h1>

                    <div className="product-page__type">
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
                    <h3 className="product-page__sub-title">Описание:</h3>
                    <div className="product-page__descr">
                        <p>{product.description}</p>
                    </div>
                    <div className="product-page__bottom">
                        <div className="product-page__price">{product.types[activeMemory].price} грн</div>
                        <AddToCart product={product} activeColor={activeColor} activeMemory={activeMemory}/>
                    </div>
                </div>
            </div>

            <h2 className="product-page__sub-title">Видео:</h2>
            <div className="product-page__video">
                <iframe
                    width="100%"
                    height="400px"
                    src={product.video}
                    title="Youtube video player"
                    frameBorder="0"
                >
                </iframe>
            </div>
        </div>
    );
};

export default ProductPage;