import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Provider} from 'react-redux';
import {store} from './redux';
import ProductPage from './pages/ProductPage/ProductPage';
import OrderPage from './pages/OrderPage/OrderPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.css';



function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <Header/>
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/products/:title" element={<ProductPage/>}/>
                            <Route path="/order" element={<OrderPage/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
