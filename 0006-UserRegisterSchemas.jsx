import * as yup from "yup";

export const UserRegisterSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Please, enter a valid email address!")
    .required("Email is required!"),

  age: yup
    .number()
    .integer("Please, enter an integer number.")
    .positive("Age value must be non-negative!")
    .required("Age info is compulsory!"),

  password: yup.string().required("Password info is compulsory!"),

  retypePassword: yup
    .string()
    .required("Retype password info is compulsory!")
    .oneOf([yup.ref("password")], "The passwords you entered do not match"),

  term: yup.boolean().required("Please, confirm!"),
});
