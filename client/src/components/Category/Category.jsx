import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./Category.css";


export default function Category(props) {
  const [select, setSelect] = useState("all")
    const {
        handleSubmit,
        setCategory,
    } = props;

    const selectCategory = (e) => {
      setSelect(e.target.value);
      setCategory(e.target.value);
    }

    return (
      <Box className="box-category">
        <ToggleButtonGroup
          color="primary"
          size="medium"
          classes="disabled"
          selected={select}
          value={select}
          defaultValue="all"
          exclusive
          onChange={e => selectCategory(e)}
        >
          <ToggleButton value="all">
            All
          </ToggleButton>
          <ToggleButton value="unisex">
            Unisex
          </ToggleButton>
          <ToggleButton value="female">
            Female
          </ToggleButton>
          <ToggleButton value="male">
            Male
          </ToggleButton>  
        </ToggleButtonGroup>
      </Box>
    )
}
