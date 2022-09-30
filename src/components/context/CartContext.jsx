import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        if (cartList.find(item => item.id === id)) return true;
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const repeat = cartList.find(product => product.id === item.id);
            // Luego de almacenar el producto en la variable repeat, revisamos si la cantidad de stock es suficiente
            if ((repeat.quantity + quantity)> item.stock) {
                alert('El stock del producto no es suficiente, revisa tu carrito.')
                return;
            }
            repeat.quantity += quantity;
            const cartListRemove = cartList.filter(product => product.id !== item.id);
            setCartList([...cartListRemove, repeat])
        } else {
            setCartList([...cartList, {...item, quantity}]);
        }
    };

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    };

    const clear = () => {
        setCartList([]);
    };

    const calcItemsQty = () => {
        const quantity = cartList.map(product => product.quantity);
        return quantity.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    }

    const calcItemsTotal = () => {
        const quantity = cartList.map(product => product.quantity*product.price);
        return quantity.reduce((prevValue, currentValue) => prevValue + currentValue, 0).toFixed(2);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, calcItemsQty, calcItemsTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;