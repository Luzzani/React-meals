import classes from './Button.module.css';
// proceso de futuro boton para reutilizar
const Button = (props) => {
  return <button
            type={props.type || "button"}
            className={`${props.className} ${classes.button}`}
            onClick={props.onEventClick}
  >
      {props.children}
      </button>;
};

export default Button;
