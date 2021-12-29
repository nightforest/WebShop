import React, {useMemo, useState} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

const phones = [
    {
        id: 1,
        title: 'Apple iPhone 13 Mini',
        types: [
            {
                memory: '128 GB',
                price: 26499,
            },
            {
                memory: '256 GB',
                price: 29999,
            },
            {
                memory: '512 GB',
                price: 36999,
            },
        ],
        models: [
            {
                name: 'Midnight',
                color: '#000000',
                image: '/phone-covers/iphone-13-mini-black.webp',
            },
            {
                name: 'Blue',
                color: '#3870c5',
                image: '/phone-covers/iphone-13-mini-blue.webp',
            },
            {
                name: 'Pink',
                color: '#ffbad3',
                image: '/phone-covers/iphone-13-mini-pink.webp',
            },
            {
                name: 'Red',
                color: '#ff0000',
                image: '/phone-covers/iphone-13-mini-red.webp',
            },
            {
                name: '#ffffff',
                color: 'Starlight ',
                image: '/phone-covers/iphone-13-mini-white.webp',
            },
        ],
        video: 'https://www.youtube.com/embed/m43rh-pI0P0',
        description: 'Экран (5.4", OLED (Super Retina XDR), 2340х1080) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15',
    },
    {
        id: 2,
        title: 'Apple iPhone 13',
        types: [
            {
                memory: '128 GB',
                price: 31999,
            },
            {
                memory: '256 GB',
                price: 35999,
            },
            {
                memory: '512 GB',
                price: 40499,
            },
        ],
        models: [
            {
                name: 'Midnight',
                color: '#000000',
                image: '/phone-covers/iphone-13-black.webp',
            },
            {
                name: 'Blue',
                color: '#3870c5',
                image: '/phone-covers/iphone-13-blue.webp',
            },
            {
                name: 'Pink',
                color: '#ffbad3',
                image: '/phone-covers/iphone-13-pink.webp',
            },
            {
                name: 'Red',
                color: '#ff0000',
                image: '/phone-covers/iphone-13-red.webp',
            },
            {
                name: 'Starlight ',
                color: '#ffffff',
                image: '/phone-covers/iphone-13-white.webp',
            },
        ],
        video: 'https://www.youtube.com/embed/m43rh-pI0P0',
        description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15',
    },
    {
        id: 3,
        title: 'Apple iPhone 13 Pro',
        types: [
            {
                memory: '128 GB',
                price: 38499,
            },
            {
                memory: '256 GB',
                price: 42999,
            },
            {
                memory: '512 GB',
                price: 49999,
            },
            {
                memory: '1 TB',
                price: 57499,
            },
        ],
        models: [
            {
                name: 'Graphite',
                color: '#3d3c33',
                image: '/phone-covers/iphone-13-pro-black.webp',
            },
            {
                name: 'Sierra Blue',
                color: '#3870c5',
                image: '/phone-covers/iphone-13-pro-blue.webp',
            },
            {
                name: 'Gold',
                color: '#aca17f',
                image: '/phone-covers/iphone-13-pro-gold.webp',
            },
            {
                name: 'Silver',
                color: '#c0c0c0',
                image: '/phone-covers/iphone-13-pro-silver.webp',
            }
        ],
        video: 'https://www.youtube.com/embed/XKfgdkcIUxw',
        description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15',
    },
    {
        id: 4,
        title: 'Apple iPhone 13 Pro Max',
        types: [
            {
                memory: '128 GB',
                price: 42999,
            },
            {
                memory: '256 GB',
                price: 46499,
            },
            {
                memory: '512 GB',
                price: 53999,
            },
            {
                memory: '1 TB',
                price: 61999,
            },
        ],
        models: [
            {
                name: 'Graphite',
                color: '#3d3c33',
                image: '/phone-covers/iphone-13-pro-max-black.webp',
            },
            {
                name: 'Sierra Blue',
                color: '#3870c5',
                image: '/phone-covers/iphone-13-pro-max-blue.webp',
            },
            {
                name: 'Gold',
                color: '#aca17f',
                image: '/phone-covers/iphone-13-pro-max-gold.webp',
            },
            {
                name: 'Silver',
                color: '#c0c0c0',
                image: '/phone-covers/iphone-13-pro-max-silver.webp',
            }
        ],
        video: 'https://www.youtube.com/embed/XKfgdkcIUxw',
        description: 'Экран (6.7", OLED (Super Retina XDR), 2778x1284) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15',
    },
    {
        id: 5,
        title: 'Samsung Galaxy S21',
        types: [
            {
                memory: '128 GB',
                price: 21999,
            },
            {
                memory: '256 GB',
                price: 23999,
            },
        ],
        models: [
            {
                name: 'Phantom Grey',
                color: '#9a9a9a',
                image: '/phone-covers/samsung-s21-grey.webp',
            },
            {
                name: 'Phantom Pink',
                color: '#f6d3d5',
                image: '/phone-covers/samsung-s21-pink.webp',
            },
            {
                name: 'Phantom Violet',
                color: '#968abc',
                image: '/phone-covers/samsung-s21-violet.webp',
            },
            {
                name: 'Phantom White',
                color: '#ffffff',
                image: '/phone-covers/samsung-s21-white.webp',
            }
        ],
        video: 'https://www.youtube.com/embed/_Q-qxuhVAJo',
        description: 'Экран (6.2", Dynamic AMOLED 2X, 2400x1080)/ Samsung Exynos 2100 (1 x 2.9 ГГц + 3 x 2.8 ГГц + 4 x 2.2 ГГц)/ тройная основная камера: 64 Мп + 12 Мп + 12 Мп, фронтальная 10 Мп/ RAM 8 ГБ / 3G / LTE / 5G / GPS / поддержка 2х SIM-карт (Nano-SIM)/ Android 11.0/ 4000 мА*ч',
    },
    {
        id: 6,
        title: 'Samsung Galaxy S21 Ultra',
        types: [
            {
                memory: '128 GB',
                price: 30999,
            },
            {
                memory: '256 GB',
                price: 32999,
            },
        ],
        models: [
            {
                name: 'Phantom Black',
                color: '#9a9a9a',
                image: '/phone-covers/samsung-s21-ultra-black.webp',
            },
            {
                name: 'Phantom Silver',
                color: '#c0c0c0',
                image: '/phone-covers/samsung-s21-ultra-silver.webp',
            },
        ],
        video: 'https://www.youtube.com/embed/kYPHTSEU49Y',
        description: 'Экран (6.8", Dynamic AMOLED 2X, 3200x1440) / Samsung Exynos 2100 (1 x 2.9 ГГц + 3 x 2.8 ГГц + 4 x 2.2 ГГц) / основная квадро-камера: 108 Мп + 12 Мп + 10 Мп + 10 Мп, фронтальная: 40 Мп/ RAM 12 ГБ / 3G / LTE / 5G / GPS / Android 11.0 / 5000 мА*ч',
    },
]



const HomePage = () => {
    const [products, setProducts] = useState(phones)
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedProducts = useMemo(() => {
        switch (selectedSort) {
            case "a_z":
                return [...products].sort((a, b) => a['title'].localeCompare(b['title']))
            case "z_a":
                return [...products].sort((a, b) => b['title'].localeCompare(a['title']))
            default:
                return products
        }
    }, [selectedSort, products])

    const sortedAndSearchedProducts = useMemo(() => {
        return sortedProducts.filter(product => product.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedProducts])

    const sortProducts = (sort) => {
        setSelectedSort(sort)
    }

    return (

        <div className="container">
            <div className="filter">
                <div className="filter__left">
                    <Input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
                <div className="filter__right">
                    <Select
                        value={selectedSort}
                        onChange={sortProducts}
                        defaultValue="Сортировка"
                        options={[
                            {value: 'a_z', name: 'По названию А-Я'},
                            {value: 'z_a', name: 'По названию Я-А'},
                        ]}
                    />
                </div>
            </div>

            {sortedAndSearchedProducts.length
                ?
                <div className="row">
                    {sortedAndSearchedProducts.map(product =>
                    <div className="col-4" key={product.id}>
                        <ProductItem product={product} />
                    </div>)}
                </div>
                :
                <h2>Ничего не найдено!</h2>
            }
        </div>
    );
};

export default HomePage;