import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";


export default function ProductDetail(props) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await getProduct(id)
            setProduct(res);
            setLoading((prevLoading) => !prevLoading);
        };
        fetchProduct();
    }, [id]);

    const handleDelete = async (e) => {
        e.preventDefault()

        await deleteProduct(id);
        history.push("/products");
    }

    if(loading) return <h1>Loading</h1>

    const redirect = () => {
        history.push("/sign-up");
    }
    
    return (
        <Layout user={props.user}>
            <div className="product-detail">
                <img
                    className="product-detail-image"
                    src={product.imgURL}
                    alt={product.name}
                />
                <div className="detail">
                    <div className="name">{product.name}</div>
                    <div className="price">{product.price}</div>
                    <div className="description">{product.description}</div>
                    <div className="button-container">
                        <Link className="edit-button" to={`/products/${id}/edit`}>
                            edit
                        </Link>
                        <button
                            className="delete-button"
                            onClick={props.user ? handleDelete : redirect}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
