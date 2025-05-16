import "./Cart.css";



function Cart({ cart, setCart }) {
    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="containerProducts">
            <h2>Cart:</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="product">
                            <h3>{item.name}</h3> <p>({item.quantity})</p>
                            <p>{item.detail}</p>
                            <p>Price: ${item.price}</p>
                            <p>Total: ${item.price * item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </>
            )}
        </div>
    );
}

export default Cart;