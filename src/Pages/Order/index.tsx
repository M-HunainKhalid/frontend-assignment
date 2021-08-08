import { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { Card, makeStyles, createStyles } from "@material-ui/core";
import {
  ActionBar,
  DisplayErrors,
  OrderForm,
  PaymentDetailsForm,
  ShippingDetailsForm,
  Stepper,
} from "Components";
import {
  PizzaDetailSchema,
  ShippingSchema,
  PaymentDetailsFormSchema,
} from "Utils";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 50,
    },
  })
);

const getSteps = () => {
  return ["Select Pizza", "Provide your details", "Add Payment method"];
};

const getStepContent = (stepIndex: number) => {
  switch (stepIndex) {
    case 0:
      return "Tell us how you like your pizza";
    case 1:
      return "Please provide all details to deliver your pizza";
    case 2:
      return "Please add your card details";
    default:
      return "Unknown stepIndex";
  }
};

export const Order = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const validationSchema = useMemo(() => {
    if (activeStep === 0) return PizzaDetailSchema;
    if (activeStep === 1) return ShippingSchema;
    if (activeStep === 2) return PaymentDetailsFormSchema;
  }, [activeStep]);

  const initialValues = {
    pizza: [],
    name: "",
    streetName: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    phoneNumber: "",
    cardNumber: "",
    securityCode: "",
    expiryMonth: "",
    expiryYear: "",
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { isValid, errors, values, handleChange, validateForm, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      isInitialValid: false,
      onSubmit: (values) => alert(JSON.stringify(values)),
    });

  const {
    pizza,
    name,
    streetName,
    houseNumber,
    postalCode,
    city,
    phoneNumber,
    cardNumber,
    securityCode,
    expiryMonth,
    expiryYear,
  } = values;

  useEffect(() => {
    validateForm();
  }, [activeStep, validateForm]);

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Stepper activeStep={activeStep} steps={steps} />
        {activeStep === 0 && <OrderForm pizza={pizza} onAdd={handleChange} />}
        {activeStep === 1 && (
          <>
            <ShippingDetailsForm
              shippingDetails={{
                name,
                streetName,
                houseNumber,
                postalCode,
                city,
                phoneNumber,
              }}
              onChange={handleChange}
            />
            <DisplayErrors errors={errors} />
          </>
        )}
        {activeStep === 2 && (
          <>
            <PaymentDetailsForm
              cardNumber={cardNumber}
              securityCode={securityCode}
              expiryMonth={expiryMonth}
              expiryYear={expiryYear}
              onChange={handleChange}
            />
            <DisplayErrors errors={errors} />
          </>
        )}
        <ActionBar
          activeStep={activeStep}
          steps={steps}
          getStepContent={getStepContent(activeStep)}
          handleBack={handleBack}
          handleNext={handleNext}
          disable={!isValid}
        />
      </form>
    </Card>
  );
};
