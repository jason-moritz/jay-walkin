import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ProductEdit(props) {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        imgURL: "",
        category: "",
        brand: "",
        gender: "",
    })

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
      const fetchProduct = async () => {
        const product = await getProduct(id)
        setProduct(product)
      };
      fetchProduct();
    }, [id])

    const handleChange = (e) => {
        e.preventDefault();

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(product)
        await updateProduct(id, product);
        toast(`Most impressive! You have updated ${product.name}`);
        history.push(`/products/${id}`);
    };

    return (
        <Layout user={props.user}>
            <form className='edit-form' onSubmit={handleSubmit}>
                <input
                  className='input-name'
                  placeholder='Name'
                  value={product.name}
                  name='name'
                  required
                  autoFocus
                  onChange={handleChange}
                />
                <input
                  className='input-price'
                  placeholder='Price'
                  value={product.price}
                  name='price'
                  required
                  onChange={handleChange}
                />
                <textarea
                  className='textarea-description'
                  rows={10}
                  placeholder='Description'
                  value={product.description}
                  name='description'
                  required
                  onChange={handleChange}
                />
                <input
                  className='input-image-link'
                  placeholder='Image Link'
                  value={product.imgURL}
                  name='imgURL'
                  required
                  onChange={handleChange}
                />
                <label className="label-category">Category</label>
                <select className="select-category" value={product.category} name="category" required onChange={handleChange}>
                    <option>Choose Category</option>
                    <option name="category" value="street">Street</option>
                    <option name="category" value="athletic">Athletic</option>
                    <option name="category" value="collectable">Collectable</option>
                    <option name="category" value="casual">Casual</option>
                </select>
                <input
                  className='input-brand'
                  placeholder='Brand'
                  value={product.brand}
                  name='brand'
                  required
                  onChange={handleChange}
                />
                <label className="label-gender">Gender</label>
                <select className="select-gender" value={product.gender} name="gender" required onChange={handleChange}>
                    <option>Choose Gender</option>
                    <option name="gender" value="unisex">Unisex</option>
                    <option name="gender" value="male">Male</option>
                    <option name="gender" value="female">Female</option>
                </select>
                <button type='submit' className='submit-button'>
                  Submit
                </button>
            </form>
        </Layout>
    )
}
