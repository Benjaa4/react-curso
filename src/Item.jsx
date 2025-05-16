import { products } from './productos.js';
import ItemDetail from './ItemDetail/ItemDetail.jsx'
function Item({ agregarCarrito }) {

    return (
        <div className='containerProducts'>

            {products.map(product => (
                <div key={product.id} className='product'>
                    {<ItemDetail item={product} />}
                    <button onClick={() => agregarCarrito(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}




export default Item;