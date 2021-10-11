import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import { useHistory } from "react-router-dom";
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
import "./ProductCreate.css";


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
        <Box 
          className="box-create-product"
          sx={{"& .MuiTextField-root": { m: 1, width: "45ch" }}}
          noValidate
          autoComplete="off"
        >
          <Card className="card-create-product">
            <CardContent className="card-content-create-product">
              <form
                className="form-create-product"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Product Name"
                  value={newProduct.name}
                  name="name"
                  required
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  label="Price"
                  value={newProduct.price}
                  name="price"
                  type="number"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Image URL"
                  value={newProduct.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Brand"
                  value={newProduct.brand}
                  name="brand"
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
                  label="Description"
                  rows={5}
                  value={newProduct.description}
                  name="description"
                  multiline
                  required
                  onChange={handleChange}
                />
                <CardActions>
                  <Button type="submit" className="submit-button">
                    Submit
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Layout>
    )
}
