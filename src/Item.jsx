import { products } from './productos.js';
import { useState } from 'react';
function Item() {
    const [cart, setCart] = useState([]); // Initialize cart state

    const agregarCarrito = (productoCart) => {
        const ProductosInProducts = products.find(item => item.id === productoCart.id);

        if (!ProductosInProducts) {
            console.error(`Product with ID ${productoCart.id} not found in products list.`);
            return;
        }

        const ProductoInCart = cart.find(item => item.id === productoCart.id);

        if (!ProductoInCart) {
            setCart([...cart, { ...ProductosInProducts, quantity: 1 }]);
        } else {
            const newCart = cart.map(item =>
                item.id === productoCart.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(newCart);
        }
        console.log(cart);
    };

    return (
        <div>

            {products.map(product => (
                <div key={product.id} className='product'>

                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <button onClick={() => agregarCarrito(product)}>Add to Cart</button>
                </div>
            ))}
            <h2>Cart:</h2>
            {cart.map(item => (
                <div key={item.id} className='product'>
                    <h2>{item.name}</h2>  <p>({item.quantity})</p>
                </div>
            ))}
        </div>
    );
}



export default Item;