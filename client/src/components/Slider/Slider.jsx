import { Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Slider.css";

export default function Item(props) {
  return (
    <Paper className="banner" variant="outlined">
      <Link className="productCardLink" to={props.item.link}>
        <h2 className="sliderH2">{props.item.name}</h2>
        <p className="sliderP">{props.item.description}</p>
        <div className="imgContainer">
          <img className="sliderImg" src={props.item.image} alt="banner" />
        </div>
        <Button className="sliderButton">{props.item.button}</Button>
      </Link>
    </Paper>
  );
}
