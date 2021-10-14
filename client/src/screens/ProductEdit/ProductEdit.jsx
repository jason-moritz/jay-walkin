import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, Button, TextField, Typography, Container, InputLabel, FormControl, Select, InputAdornment, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
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
        <div className="container-edit-product">
          <Container 
              minWidth="xs"
              maxWidth="sm" 
              sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
              }}
          >
              <Card 
                  sx={{ 
                      width: "100%",
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center" 
                  }}
              >
                <Typography 
                    sx={{ 
                        fontSize: 24, 
                        textAlign: "center" 
                    }} 
                    color="text.secondary" 
                    gutterBottom
                >
                    {`Edit ${product.name}`}
                </Typography>   
                <Box 
                className="box-edit-product"
                sx={{ width: "100%",
                    ".MuiTextField-root": { 
                      m: 1, 
                      width: ".75" 
                    }
                }}
                component="form"
                autoComplete="off"
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
                      startAdornment: 
                        <InputAdornment position="start">
                          $
                        </InputAdornment>
                    }}
                  />
                  <TextField
                    label="Image URL"
                    value={product.imgURL}
                    name="imgURL"
                    type="url"
                    required
                    onChange={handleChange}
                  />
                  <TextField
                  label="Brand"
                  value={product.brand}
                  name="brand"
                  required
                  onChange={handleChange}
                />
                <FormControl 
                  fullWidth 
                  className="form-control-drop-down"
                  sx={{ 
                    m: 1, 
                    width: "75%",
                    ".MuiSelect-select": {
                      display: "flex",
                      flexDirection: "column",
                    }
                  }}
                >
                  <InputLabel>Style *</InputLabel>
                  <Select 
                    label="Style" 
                    name="category" 
                    required
                    value={product.category}
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
                  className="radio-group-container"
                  component="fieldset"
                  sx={{
                    ".MuiFormGroup-root": {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "75%",
                    m: "0 auto"
                  }}}
                >
                  <RadioGroup
                    className="radio-group"
                    row
                    aria-label="gender"
                    name="gender"
                    value={product.gender}
                    onChange={handleChange}
                  >
                    <FormLabel 
                      component="legend"
                    >
                      Gender
                    </FormLabel>
                    <FormControlLabel 
                      control={<Radio />} 
                      label="Unisex" 
                      value="unisex"
                    />
                    <FormControlLabel 
                      control={<Radio />} 
                      label="Male" 
                      value="male" 
                    />
                    <FormControlLabel 
                      control={<Radio />} 
                      label="Female" 
                      value="female" 
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  label="Description"
                  rows={5}
                  value={product.description}
                  name="description"
                  multiline
                  required
                  onChange={handleChange}
                />
                <Button type="submit">
                  <Typography
                      gutterBottom
                      align="center"
                  >
                      Update Product!
                  </Typography>
                </Button>
              </Box>
            </Card>
          </Container>
        </div>
      </Layout>
    )
}
