import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";

import FormikField from "../FormikField/FormikField";
import FormikSelect from "../FormikSelect/FormikSelect";
import { createTeacher, editTeacher } from '../../actions/teacherActions';

const countries = [
  { label: 'India', value: '91' },
  { label: 'USA', value: '1' },
  { label: 'Canada', value: '234' }
]

const initialValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  country_code: ""
};

const addUserSchema = Yup.object({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

export class TeacherForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInitialValue = this.setInitialValue.bind(this);
  }

  handleSubmit = (formValues, { resetForm }) => {
    if(this.props.user){
      this.props.editTeacher(formValues);
      this.props.closeModalHandler();
    }
    else{
      this.props.createTeacher(formValues);
      resetForm({});
    }
  };

  setInitialValue() {
    if(this.props.teacher)
      return this.props.teacher;
    return initialValues;
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

const mapStateToProps = ({ error }) => ({
  error
})

const mapDispatchToProps = (dispatch) => ({
  createTeacher: (formValues) => { dispatch(createTeacher(formValues)) },
  editTeacher: (userId) => dispatch(editTeacher(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeacherForm);