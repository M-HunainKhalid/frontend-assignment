import * as Yup from "yup";
import valid from "card-validator";

export const PizzaDetailSchema = Yup.object().shape({
  pizza: Yup.array().test({
    test: (arr) => !!arr,
  }),
});

export const ShippingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name must be at most 50 characters long")
    .required("Please enter your name"),
  streetName: Yup.string().required("Please enter street name"),
  city: Yup.string().min(2).required("Please enter city name"),
  houseNumber: Yup.string().min(1).required("Please enter house number"),
  postalCode: Yup.number().required("Please enter postal code"),
  phoneNumber: Yup.string()
    .max(20, "Phone number must be at most 20 characters")
    .min(7, "Phone number must be at least 7 characters")
    .required("Please enter a valid phone number")
    // eslint-disable-next-line
    .matches(/^\+?\d(\-?)(.[^+]*[0-9])?$/g, "Please enter valid phone number"),
});

export const PaymentDetailsFormSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .min(16, "Please enter a valid card number")
    .max(16, "Please enter a valid card number")
    .required("Please Enter a valid card number")
    .test(
      "test-number", // this is used internally by yup
      "Please Enter a valid card number", //validation message
      (value) => valid.number(value).isValid
    ) // return true false based on validation
    .required(),
  securityCode: Yup.string()
    .max(3, "Enter valid Code")
    .required("Please Enter a valid security code"),
  expiryMonth: Yup.number()
    .required("Please enter the expiry month of card")
    .test({
      test: (code) => Number(code) > new Date().getMonth(),
    }),
  expiryYear: Yup.number()
    .required("Please enter the expiry month of card")
    .test({
      test: (code) => Number(code) > new Date().getFullYear(),
    }),
});
