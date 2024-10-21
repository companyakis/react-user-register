// import React from "react";
import { useFormik } from "formik";
import { UserRegisterSchemas} from '../schemas/UserRegisterSchemas'

function UserRegisterForm() {

  // submit function

  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm()
    }, 3000)
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      retypePassword: "",
      term: "",
    },

    // yup validation!
    validationSchema: UserRegisterSchemas,
    onSubmit: submit
  });

  return (
    <div>
      <div className="user-register-form">
        <form onSubmit={handleSubmit} className="form">
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
            {errors.email && <p>{errors.email}</p>}
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
            {errors.age && <p>{errors.age}</p>}
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
            {errors.password && <p>{errors.password}</p>}
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
            {errors.retypePassword && <p>{errors.retypePassword}</p>}
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
          {errors.term && <p>{errors.term}</p>}
          <button type="submit" className="accept-button">Accept</button>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
