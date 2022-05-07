const Button = (props) => {
  return <button
            type={props.type || "button"}
            className={`${props.className} button`}
            onClick={props.onEventClick}
            disable={props.disableBtn}
  >
      {props.children}
      </button>;
};

export default Button;
