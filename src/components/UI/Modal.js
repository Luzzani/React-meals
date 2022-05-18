import { Link } from "react-router-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <Link to='/'><div className={classes.backdrop}></div></Link>
      <Card className={`${classes.modal} ${classes["invisible-scrollbar"]}`}>
        <Link to='/'><span className={classes.exit}>X</span></Link>
        {props.children}
      </Card>
      ;
    </div>
  );
};

export default Modal;
