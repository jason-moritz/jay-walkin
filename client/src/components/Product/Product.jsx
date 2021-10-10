import { Link } from "react-router-dom";

export default function Product(props) {
    const {
        _id,
        name,
        price,
        imgURL
    } = props;

    return (
        <>
          <Link className="product" to={`/products/${_id}`}>
                <img className="product-img" src={imgURL} alt={name} />
                <div className="product-name">{name}</div>
                <div className="product-price">{price}</div>
          </Link>  
        </>
    )
}
