import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createProduct } from "../../services/products";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Card, Button, TextField, Typography, Container, InputLabel, FormControl, Select, InputAdornment, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
import "./ProductCreate.css";


export default function ProductCreate(props) {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        imgURL: "",
        category: "",
        brand: "",
        gender: "unisex",
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
        <div className='container-create-product'>
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
                  Add a New Product
              </Typography>        
              <Box 
                className="box-create-product"
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
                  value={newProduct.name}
                  name="name"
                  inputProps={{ maxLength: 30 }}
                  required
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  label="Price"
                  value={newProduct.price}
                  name="price"
                  type="number"
                  inputProps={{ max: 99999 }}
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
                  value={newProduct.imgURL}
                  name="imgURL"
                  type="url"
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Brand"
                  value={newProduct.brand}
                  name="brand"
                  inputProps={{ maxLength: 24 }}
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
                      m: "0 auto",
                    
                  }}}
                >
                  <RadioGroup
                    className="radio-group"
                    row
                    aria-label="gender"
                    defaultValue="unisex"
                    name="gender"
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
                  value={newProduct.description}
                  name="description"
                  inputProps={{ maxLength: 240 }}
                  multiline
                  required
                  onChange={handleChange}
                />
                <Button 
                  type="submit"
                  variant="contained"
                  size="medium"
                  sx={{
                    "&.MuiButton-containedPrimary": {
                      backgroundColor: "#1976d2",
                      mt: 1,
                      mb: 2
                    },
                    "&.MuiButton-containedPrimary:hover": {
                      backgroundColor: "#1565c0"
                    }
                  }}
                >
                  Add Product!
                </Button>
              </Box>
            </Card>
          </Container>
        </div>
      </Layout>
    )
}
