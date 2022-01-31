import React, { useContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Form.css";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  if (!form.name.trim()) {
    errors.name = "Field 'Name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Field 'Name' only accepts letters ans blank spaces";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "Field 'Last Name' is required";
  } else if (!regexName.test(form.lastname.trim())) {
    errors.lastname = "Field 'Last Name' only accepts letters ans blank spaces";
  }

  if (!form.email.trim()) {
    errors.email = "Field 'e-mail' is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The e-mail is not valid";
  }

  if (!form.phone.trim()) {
    errors.phone = "Field 'Phone' is required";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "The phone number is not valid";
  }

  if (!form.address.trim()) {
    errors.address = "Field 'Address' is required";
  }

  return errors;
};

function Form() {
  const { form, errors, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const ValueContext = useContext(CartContext);

  const shoppingBasket = ValueContext.checkItems();

  const endPurchase = ValueContext.checkEndStatus();

  const totalToPay = ValueContext.cartTotal();

  const [orderId, setOrderId] = useState(0);

  const [buyerId, setBuyerId] = useState({});

  const [loading, setLoading] = useState(false);

  var today = new Date();

  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " @ " +
    today.getHours() +
    ":" +
    today.getMinutes();

  const handlePlace = (e) => {
    e.preventDefault();

    const name = e.target[0].value.trim();
    const lastname = e.target[1].value.trim();
    const mail = e.target[2].value.trim();
    const phone = e.target[3].value.trim();
    const address = e.target[4].value.trim();

    if (Object.keys(errors).length === 0) {
      setBuyerId(name);

      const buyer = {
        name: name,
        lastName: lastname,
        mail: mail,
        phone: phone,
        address: address,
      };

      const order = {
        buyer: buyer,
        items: shoppingBasket.map((p) => {
          return {
            id: p.id,
            quantiy: p.quantity,
            title: p.name,
            price: p.price,
          };
        }),
        date: date,
        total: totalToPay,
      };

      setLoading(true);

      const db = getFirestore();

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id);
        ValueContext.clear();
        ValueContext.resetCart();
      });

      shoppingBasket.map((p) => {
        const itemDoc = doc(db, "items", p.id);
        getDoc(itemDoc).then((snapshot) => {
          updateDoc(itemDoc, { stock: snapshot.data().stock - p.quantity });
        });
      });
    }
  };

  if (orderId == 0 && loading == true) {
    return (
      <div className="finish-detail">
        <div className="loading">Posting your order...</div>
        <div className="form-alert mt">
          Please don't close or refresh this page
        </div>
      </div>
    );
  }

  if (orderId != 0) {
    return (
      <div className="finish-detail">
        <h2 className="finish-title">Thank you for your purchase, {buyerId}</h2>
        <p>
          Your order ID is <span className="bold">{orderId}</span>
          <br />
          <span className="red">
            Please keep record of it for future reference
          </span>
        </p>
        <Link to={"/"}>
          <button className="finish-btn">Finish</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {endPurchase === true ? (
        <div className="form-detail">
          <h3 className="form-title">
            In order to complete your purchase, please complete your information
          </h3>
          <form className="buyerForm" onSubmit={handlePlace}>
            <label for="name">First Name:</label>
            <input
              className="buyerForm-input"
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.name}
              required
            />
            {errors.name && <p className="form-alert">{errors.name}</p>}
            <br />
            <label for="lastname">Last Name:</label>
            <input
              type="text"
              className="buyerForm-input"
              name="lastname"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.lastname}
              required
            />
            {errors.lastname && <p className="form-alert">{errors.lastname}</p>}
            <br />
            <label for="email">e-mail:</label>
            <input
              type="email"
              className="buyerForm-input"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            {errors.email && <p className="form-alert">{errors.email}</p>}
            <br />
            <label for="phone">Phone number:</label>
            <input
              type="text"
              className="buyerForm-input"
              name="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.phone}
              required
            />
            {errors.phone && <p className="form-alert">{errors.phone}</p>}
            <br />
            <label for="address">Adress:</label>
            <input
              type="text"
              className="buyerForm-input"
              name="address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.address}
              required
            />
            {errors.address && <p className="form-alert">{errors.address}</p>}
            <br />
            <input type="submit" className="form-submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div className="form-detail">
          <h2 className="form-title">
            Please finalize your purchase from your cart
          </h2>
          <Link to={"/Cart"}>
            <button>Go to cart!</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Form;
