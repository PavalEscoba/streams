import React from "react";
import { Field, reduxForm } from "redux-form";


class StreamForm extends React.Component {
  renderInput = ({ input, label, htmlFor, type, meta }) => {
    return (
      <div className="form-group mb-4">
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
        <input type={type} {...input} id={htmlFor} className="form-control" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <p className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </p>
      );
    }
  };

  render() {
    return (
      <form
        className="form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
          htmlFor="title-field"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
          htmlFor="description-field"
        ></Field>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter title";
  }

  if (!formValues.description) {
    errors.description = "You must enter description";
  }
  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);

