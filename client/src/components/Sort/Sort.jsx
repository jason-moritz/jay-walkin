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
      className="box-sort-container" 
      component="form"
      onSubmit={handleSubmit}
    >
      <FormControl
        fullWidth
        className="form-control-sort"
      >
        <InputLabel>
          Sort By
        </InputLabel>
        <Select
          label="Sort"
          name="sort"
          onChange={changeSort}
          sx={{
            width: "10%"
          }}
        >
          <MenuItem
            value="name-ascending"
          >
            Alphabetically, A-Z
          </MenuItem>
          <MenuItem 
            value="name-descending"
          >
            Alphabetically, Z-A
          </MenuItem>
          <MenuItem 
            value="price-ascending"
          >
            Price, low to high
          </MenuItem>
          <MenuItem 
            value="price-descending"
          >
            Price, high to low
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
