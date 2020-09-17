import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import React from "react";
import "./FormikSelect.css";

const MatUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onBlur,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        // defaultValue="91"
        value={value}
      >
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

function FormikSelect({ items, label, name }) {
  return (
    <div className="FormikSelect">
      <Field
        name={name}
        as={MatUISelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
}

export default FormikSelect;
