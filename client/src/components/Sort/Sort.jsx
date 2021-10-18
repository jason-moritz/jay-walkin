import { Box, FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@material-ui/core/MenuItem";
import "./Sort.css";


const Sort = (props) => {
  const { 
    handleSort, 
    handleSubmit,
  } = props;

  const changeSort = e => {
    handleSort(e.target.value);
  };

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mx: 2,
        width: {xs: "30%", sm: "20%"},
        maxWidth: "130px",
      }}
      
    >
      <FormControl
        sx={{
          width: "100%"
        }}>
        <InputLabel>
          Sort
        </InputLabel>
        <Select
          className="form-control-select-sort"
          label="Sort"
          name="sort"
          onChange={changeSort}
          sx={{
          }}
        >
          <MenuItem
            value="name-ascending"
          >
            A-Z
          </MenuItem>
          <MenuItem 
            value="name-descending"
          >
            Z-A
          </MenuItem>
          <MenuItem 
            value="price-ascending"
          >
            $-$$$
          </MenuItem>
          <MenuItem 
            value="price-descending"
          >
            $$$-$
          </MenuItem>
          <MenuItem 
            value="brand"
          >
            Brand
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export default Sort;
