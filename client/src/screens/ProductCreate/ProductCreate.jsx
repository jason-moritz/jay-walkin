import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ProductCreate(props) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        imgURL: "",
        category: "",
        brand: "",
        gender: "",
    });
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();

        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(newProduct)
        await createProduct(newProduct);
        toast("By the beard of Zeus a new product has been born!");
        history.push("/products");
    };


    return (
        <Layout user={props.user}>
            <form className='create-form' onSubmit={handleSubmit}>
                <input
                  className='input-name'
                  placeholder='Name'
                  value={newProduct.name}
                  name='name'
                  required
                  autoFocus
                  onChange={handleChange}
                />
                <input
                  className='input-price'
                  placeholder='Price'
                  value={newProduct.price}
                  name='price'
                  required
                  onChange={handleChange}
                />
                <textarea
                  className='textarea-description'
                  rows={10}
                  placeholder='Description'
                  value={newProduct.description}
                  name='description'
                  required
                  onChange={handleChange}
                />
                <input
                  className='input-image-link'
                  placeholder='Image Link'
                  value={newProduct.imgURL}
                  name='imgURL'
                  required
                  onChange={handleChange}
                />
                <input
                  className='input-brand'
                  placeholder='Brand'
                  value={newProduct.brand}
                  name='brand'
                  required
                  onChange={handleChange}
                />
                <label className="label-category">Category</label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="test">Category</InputLabel>
                    <Select className="select-category" name="category" required onChange={handleChange}>
                        <MenuItem>Choose Category</MenuItem>
                        <MenuItem name="category" value="street">Street</MenuItem>
                        <MenuItem name="category" value="athletic">Athletic</MenuItem>
                        <MenuItem name="category" value="collectable">Collectable</MenuItem>
                        <MenuItem name="category" value="casual">Casual</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <label className="label-gender">Gender</label>
                <select className="select-gender" name="gender" required onChange={handleChange}>
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
