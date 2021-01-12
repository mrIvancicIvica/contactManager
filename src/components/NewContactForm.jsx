import { useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { useFormik } from "formik";
import { ContactContext } from "../Contexts/ContactContext";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: 15,
    width: 400,
  },
  error :{
    color: deepOrange[400]
  }
}));

const NewContactForm = () => {
  const { dispatch } = useContext(ContactContext);
  let history = useHistory();
  const clasess = useStyles();
  const {
    handleSubmit,
    handleChange,
    values,
    resetForm,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Name must have minimal 5 characters ")
        .required("Required"),
      email: Yup.string().min(5, "Minimal 5 characters").required("Required"),
      phone: Yup.number()
        .min(6, "Please enter full number")
        .required("Required"),
    }),

    onSubmit: ({ name, email, phone }) => {
      dispatch({ type: "ADD_CONTACT", name, email, phone });
      console.log(name, email, phone); 
      resetForm({});

      {history.push('/')}
    
    },
  });
  return (
    <div className='container'>



    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined"
        label="name"
        variant="filled"
        onChange={handleChange}
        value={values.name}
        name="name"
        type="text"
        className={clasess.spacing}
      />
      {touched.name && errors.name ? <div className={clasess.error}>{errors.name}</div> : null}
      <br />
      <TextField
        id="outlined"
        label="email"
        variant="filled"
        onChange={handleChange}
        value={values.email}
        name="email"
        type="email"
        className={clasess.spacing}
      />
      {touched.email && errors.email ? <div className={clasess.error}>{errors.email}</div> : null}
      <br />
      <TextField
        id="outlined"
        label="phone"
        variant="filled"
        onChange={handleChange}
        value={values.phone}
        name="phone"
        type="number"
        className={clasess.spacing}
      />
      {touched.phone && errors.phone ? <div className={clasess.error}>{errors.phone}</div> : null}

      <br />
      <Button variant="contained" color="primary" type="submit">
        Add Contact
      </Button>
    </form>
    </div>

    
  );
};

export default NewContactForm;
