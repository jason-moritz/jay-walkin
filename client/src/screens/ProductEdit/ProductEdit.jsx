import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import "./ProductEdit.css";


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
        <div className='container-edit-product'>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            <span>{`Update ${product.name}`}</span>
          </Typography>
          <Box 
            className="box-edit-product"
            sx={{"& .MuiTextField-root": { m: 1, width: "45ch" }}}
            noValidate
            autoComplete="off"
          >
            <Card className="card-edit-product">
              <CardContent 
              className="card-content-edit-product">
                <form
                  className="form-edit-product" 
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="Product Name"
                    value={product.name}
                    name="name"
                    required
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    label="Price"
                    value={product.price}
                    name="price"
                    type="number"
                    required
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }}
                  />
                  <TextField
                    label="Image URL"
                    value={product.imgURL}
                    name="imgURL"
                    required
                    onChange={handleChange}
                  />
                  <FormControl 
                    fullWidth 
                    className="form-control-drop-down"
                    sx={{ m: 1, width: "45ch" }}
                  >
                    <InputLabel>Category *</InputLabel>
                    <Select
                      label="Category"
                      name="category"
                      required
                      onChange={handleChange}
                    >
                      <MenuItem 
                        name="category" 
                        value="street"
                      >
                        Street
                      </MenuItem>
                      <MenuItem 
                        name="category" 
                        value="athletic"
                      >
                        Athletic
                      </MenuItem>
                      <MenuItem 
                        name="category" 
                        value="collectable"
                      >
                        Collectable
                      </MenuItem>
                      <MenuItem 
                        name="category" 
                        value="casual"
                      >
                        Casual
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl 
                    fullWidth
                    className="form-control-drop-down"
                    sx={{ m: 1, width: "45ch" }}
                  >
                    <InputLabel>Gender *</InputLabel>
                    <Select 
                      label="Gender"
                      name="gender" 
                      required 
                      onChange={handleChange}
                    >
                      <MenuItem 
                        name="gender"
                        value="unisex"
                      >
                        Unisex
                      </MenuItem>
                      <MenuItem 
                        name="gender"
                        value="male"
                      >
                        Male
                      </MenuItem>
                      <MenuItem 
                        name="gender"
                        value="female"
                      >
                        Female
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    className="input-brand"
                    placeholder="Brand"
                    value={product.brand}
                    name="brand"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                    label="Description"
                    rows={5}
                    value={product.description}
                    name="description"
                    multiline
                    required
                    onChange={handleChange}
                  />
                  <CardActions>
                    <Button type="submit" className="submit-button">
                      Update!
                    </Button>
                  </CardActions>
                </form>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Layout>
    )
}
