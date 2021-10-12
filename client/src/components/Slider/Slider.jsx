import { Paper, Button } from "@material-ui/core";
import "./Slider.css";

export default function Item(props) {
  return (
    <Paper className="banner" variant="outlined">
      <h2 className="sliderH2">{props.item.name}</h2>
      <p className="sliderP">{props.item.description}</p>
      <div className="imgContainer">
        <img className="sliderImg" src={props.item.image} alt="banner" />
      </div>
      <Button className="sliderButton">Shop Now</Button>
    </Paper>
  );
}
