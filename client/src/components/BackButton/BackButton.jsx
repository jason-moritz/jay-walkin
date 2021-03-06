import { useHistory } from "react-router-dom";
import { Box, Button } from "@mui/material";


export default function BackButton() {
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    };

    return (
        <Box className="box-back-button"
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: {xs: "90%", sm: "80%", md: "75%", lg: "70%"},
                margin: "0 auto"
            }}>
            <Button
                variant="text"
                onClick={handleClick}
            >
                Go Back    
            </Button>
        </Box>
    )
}
