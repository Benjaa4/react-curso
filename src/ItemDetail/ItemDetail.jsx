import './ItemDetail.css';


function ItemDetail({ item }) {
    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <p>{item.detail}</p>
            <p>Price: ${item.price}</p>

        </div>
    );
}

export default ItemDetail;