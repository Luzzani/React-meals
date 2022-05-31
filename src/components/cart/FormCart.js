import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Button from "../UI/Button";

import classes from "./FormCart.module.css";

const isEmpty = (value) => value.trim() === "";
const isMoreThanEightChars = (value) => value.trim().length > 8;

const FormCart = () => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const [idBuyer, setIdBuyer] = useState(false);
  const [id, setId] = useState("");

  const { cart, deletCart } = useCartContext();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  let totalCart = 0;

  cart.map((item) => (totalCart += item.total));

  const submitBuyHandler = (event) => {
    event.preventDefault();

    const nameInput = nameInputRef.current.value;
    const phoneInput = phoneInputRef.current.value;
    const emailInput = emailInputRef.current.value;

    const enteredNameIsValid = !isEmpty(nameInput);
    const enteredEmailIsValid = !isEmpty(emailInput);
    const enteredPhoneIsValid = isMoreThanEightChars(phoneInput);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
    });

    const formIsValid =
      enteredEmailIsValid && enteredNameIsValid && enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    const user = { name: nameInput, phone: phoneInput, email: emailInput };

    const orderCart = cart.map((item) => {
      return {
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: item.quantity,
      };
    });

    const order = {
      buyer: user,
      items: orderCart,
      total: totalCart,
    };

    const dataBase = getFirestore();

    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, order).then((response) => {
      if (response.id) {
        setId(response.id);
      }
      setIdBuyer(true);
      deletCart();
    });
  };

  return (
    <div>
      {idBuyer && (
        <div>
          <h2 className={classes.buyerId}>{`Your buyer id: ${id}`}</h2>
          <Link to='/'><Button className={classes.buuyerIdBtn}>Ok</Button></Link>
        </div>
      )}
      {!idBuyer && (
        <form className={classes.form} onSubmit={submitBuyHandler}>
          <div className={classes.decoCart}></div>
          <div
            className={`${classes.decoCartbottom} ${classes.decoCart}`}
          ></div>
          <div
            className={`${classes.decoCartMiddle} ${classes.decoCart}`}
          ></div>
          <div
            className={`${classes.control} ${
              formInputsValidity.name ? "" : classes.invalid
            }`}
          >
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputsValidity.name && <p>please enter a valid name</p>}
          </div>
          <div
            className={`${classes.control} ${
              formInputsValidity.email ? "" : classes.invalid
            }`}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
            {!formInputsValidity.email && <p>please enter a valid email</p>}
          </div>
          <div
            className={`${classes.control} ${
              formInputsValidity.phone ? "" : classes.invalid
            }`}
          >
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" ref={phoneInputRef} />
            {!formInputsValidity.phone && (
              <p>please enter a valid Phone Number</p>
            )}
          </div>
          <div className={classes.actions}>
            <Link to="/">
              <button type="button">Cancel</button>
            </Link>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormCart;
