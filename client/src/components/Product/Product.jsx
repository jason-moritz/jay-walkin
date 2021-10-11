import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product(props) {
    const {
        _id,
        name,
        price,
        imgURL
    } = props;

    return (
        <>
            <img className="product-img" src={imgURL} alt={name} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <div className="product-name">{name}</div>
                <div className="product-price">{`$${price}`}</div>
            </Typography>
            <CardActions>
                <Button>
                    <Link className="product" to={`/products/${_id}`}>
                        <div>View</div>
                    </Link>  
                </Button>
            </CardActions>
        </>
    )
}
