import './ItemListContainer.css';
import Item from './Item.jsx';



function ItemListContainer({ cart, setCart }) {

    const agregarCarrito = (product) => {
        const productoEnCarrito = cart.find(item => item.id === product.id);
        if (productoEnCarrito) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };
    return (
        <div>
            <h1>productos</h1>
            <Item agregarCarrito={agregarCarrito} />
        </div>)

}
;


export default ItemListContainer;