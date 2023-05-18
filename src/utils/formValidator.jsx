import * as yup from "yup";

export const formValidator = yup.object().shape({
  userName: yup.string().trim().required("Must Provide Email"),
  userEmail: yup.string().trim().email().required("Must Provide Email "),
  userPhone: yup.string().trim().required("Must Provide phone number"),
  userDays: yup.string().trim().required("Must Provide days "),
});
