import './ItemListContainer.css';

function ItemListContainer() {
    const products = [
        {
            id: 1,
            name: "Iphone 15 Pro Max",
            price: 1000,
        },
        {
            id: 2,
            name: "Samsung A55",
            price: 450,
        },
        {
            id: 3,
            name: "Samsung S24 Ultra",
            price: 800,
        }
    ]
    return (
        <div className='containerP'>
            <h2>Productos</h2>
            {products.map(product => (
                <div key={product.id} className="product">
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}


export default ItemListContainer;