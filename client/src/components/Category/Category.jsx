import { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./Category.css";


export default function Category(props) {
  const [select, setSelect] = useState("all")
    const {
        setCategory,
        setSearch
    } = props;

    const selectCategory = (e) => {
      setSelect(e.target.value);
      setCategory(e.target.value);
      setSearch("");
    }

    return (
      <Box className="box-category">
        <ToggleButtonGroup
          color="primary"
          size="small"
          selected={select}
          value={select}
          defaultValue="all"
          aria-labelledby="id"
          id="choose-category"
          exclusive
          onChange={e => selectCategory(e)}
          sx={{
            ".MuiButtonBase-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxSizing: "border-box",
              outline: 0,
              margin: 0,
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              textDecoration: "none",
              lineHeight: 1.75,
              letterSpacing: ".02857em",
              textTransform: "uppercase",
              borderRadius: "4px",
              padding: "7px",
              border: "1px solid rgba(0, 0, 0, 0.12)"
            }
          }}
        >
          <ToggleButton value="all" aria-label="choose-category">
            All
          </ToggleButton>
          <ToggleButton value="unisex" aria-label="choose-category">
            Unisex
          </ToggleButton>
          <ToggleButton value="female" aria-label="choose-category">
            Female
          </ToggleButton>
          <ToggleButton value="male" aria-label="choose-category">
            Male
          </ToggleButton>  
        </ToggleButtonGroup>
      </Box>
    )
}
