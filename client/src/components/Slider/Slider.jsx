import { Paper, Button } from "@material-ui/core";
import "./Slider.css";

export default function Item(props) {
  return (
    <Paper className="banner">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.image} alt="banner" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
