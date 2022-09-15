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
            // Luego de almacenar el producto en una variable, revisamos si la cantidad de stock es suficiente
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
        alert('Estas eliminando el producto del carrito');
        setCartList(cartList.filter(item => item.id !== id));
    };

    const clear = () => {
        setCartList([]);
    };

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;