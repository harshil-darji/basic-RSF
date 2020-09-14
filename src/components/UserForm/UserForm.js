import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "../FormikField/FormikField";
import FormikSelect from "../FormikSelect/FormikSelect";
import { Button } from "@material-ui/core";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  country: '',
};

const countries = [
    { label: 'India', value: 'india'},
    { label: 'USA', value: 'USA'},
    { label: 'Canada', value: 'canada'}
]

const addUserSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
});

const handleSubmit = (formValues) => {
  console.log(formValues);
};

function UserForm() {
  return (
    <div>
      <h1>Add new user</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={addUserSchema}>
        {({dirty, isValid}) => {
          return (
            <Form>
                <FormikField name="name" label="Name" required={true}></FormikField>
                <FormikField name="email" label="Email" required={true}></FormikField>
                <FormikField name="phone" label="Phone" required={true}></FormikField>
                <FormikField name="gender" label="Gender" required={false}></FormikField>
                <FormikSelect items={countries} label="Country" name="country"/>
                <Button disabled={!dirty || !isValid} variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UserForm;