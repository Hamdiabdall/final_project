import { useFormik } from "formik";

const Register = () => {
  const validate = values => {
    const errors = {};
    const phoneRegex = /^\d{8}$/;

    if (!values.name) {
      errors.name = "Required";
    }
    
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid phone number format";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.rePassword) {
      errors.rePassword = "Required";
    } else if (values.rePassword !== values.password) {
      errors.rePassword = "Passwords must match";
    }

    return errors;
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: submitHandler,
  });

  function submitHandler() {
    console.log("Submit", formik.values);
  }

  return (
    <div className="w-75 mx-auto py-4 text-start">
      <form onSubmit={formik.handleSubmit}>
        <div className="my-3 form-group">
          <label htmlFor="name">Name :</label>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            id="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>
        <div className="my-3 form-group">
          <label htmlFor="phone">Phone :</label>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            type="tel"
            name="phone"
            id="phone"
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="text-danger">{formik.errors.phone}</div>
          )}
        </div>
        <div className="my-3 form-group">
          <label htmlFor="email">Email :</label>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            id="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        <div className="my-3 form-group">
          <label htmlFor="password">Password :</label>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>
        <div className="my-3 form-group">
          <label htmlFor="rePassword">RePassword :</label>
          <input
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            onBlur={formik.handleBlur}
            type="password"
            name="rePassword"
            id="rePassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="text-danger">{formik.errors.rePassword}</div>
          )}
        </div>

        <button type="submit" className="btn bg-main text-white my-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
