import React from "react";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage, Field } from "formik";

import "./FormikField.css";

function FormikField({ label, name, required }) {
  return (
    <div className="FormikField">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type="text"
        helperText={<ErrorMessage name={name} />}
      ></Field>
    </div>
  );
}

export default FormikField;
