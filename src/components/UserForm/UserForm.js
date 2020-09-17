import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";

import FormikField from "../FormikField/FormikField";
import FormikSelect from "../FormikSelect/FormikSelect";
import { createUser, editUser } from '../../actions';

const countries = [
  { label: 'India', value: '91' },
  { label: 'USA', value: '1' },
  { label: 'Canada', value: '234' }
]

const addUserSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

export class UserForm extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setValue = this.setValue.bind(this);
    this.setInitialValue = this.setInitialValue.bind(this);
  }

  handleSubmit = (formValues) => {
    if(this.props.user){
      this.props.editUser(formValues);
      this.props.closeModalHandler();
    }
    else{
      this.props.createUser(formValues);
    }
  };

  // setValue(valName) {
  //   if(this.props.user){
  //     return this.props.user[valName];
  //   }
  // }

  setInitialValue() {
    if(this.props.user)
      return this.props.user;
    return this.props.newUser;
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Formik initialValues={this.setInitialValue()} onSubmit={this.handleSubmit} validationSchema={addUserSchema}>
          {({ dirty, isValid }) => {
            return (
              <Form>
                <FormikField name="name" label="Name" required={true}></FormikField>
                <FormikField name="email" label="Email" required={true}></FormikField>
                <FormikField name="phone" label="Phone" required={true}></FormikField>
                <FormikField name="city" label="City" required={true}></FormikField>
                <FormikField name="state" label="State" required={true}></FormikField>
                <FormikSelect items={countries} label="Country Code" name="country_code"/>
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
}

const mapStateToProps = ({ newUser, error }) => ({
  newUser,
  error
})

const mapDispatchToProps = (dispatch) => ({
  createUser: (formValues) => { dispatch(createUser(formValues)) },
  editUser: (userId) => dispatch(editUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);