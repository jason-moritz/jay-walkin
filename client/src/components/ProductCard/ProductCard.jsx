import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const {
        _id,
        name,
        price,
        imgURL
    } = props;

    return (
        <div className="product-card">
            <Link className="card" to={`/product/${_id}`}>
                <img className="product-card-img" src={imgURL} alt={name} />
                <div className="product-card-info">
                    <div>{name}</div>
                    <div>{price}</div>
                </div>
                <div>View</div>
            </Link>
        </div>
    )
}
