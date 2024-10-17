import React from "react";
import { useFormik } from "formik";

function UserRegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      retypePassword: "",
      term: "",
    },
  });

  return (
    <div>
      <div className="user-register-form">
        <form className="form">
          <div className="div-parts">
            <label className="register-label">E-mail</label>
            <input
              className="register-input"
              type="text"
              id="email"
              placeholder="Type your e-mail"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="div-parts">
            <label className="register-label">Age</label>
            <input
              className="register-input"
              type="number"
              id="age"
              placeholder="Type your age"
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <div className="div-parts">
            <label className="register-label">Password</label>
            <input
              className="register-input"
              type="password"
              id="password"
              placeholder="Type your password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="div-parts">
            <label className="register-label">Retype Password</label>
            <input
              className="register-input"
              type="password"
              id="retypePassword"
              placeholder="Retype your password"
              value={values.retypePassword}
              onChange={handleChange}
            />
          </div>
          <div className="div-checkbox">
            <input
              className="checkbox-input"
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label className="register-label">I agree to Terms and Conditions</label>
          </div>
          <button className="accept-button">Accept</button>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
