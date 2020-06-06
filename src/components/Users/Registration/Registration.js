import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField, maxLengthCreator } from "../../../utils/validators";
import { Input } from "../../commons/FormsControls";
import axios from "axios";

class FieldFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value },
    } = this.props;
    const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

const Registration = (props) => {
  const onSubmit = async (formData) => {
    const token = await axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
      .then((response) => {
        return response.data.token;
      });

    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: {
          Token: token, // get token with GET api/v1/token method
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.success) {
          // process success response
        } else {
          // proccess server errors
        }
      })
      .catch(function (error) {
        // proccess network errors
      });

    // axios
    //   .post(
    //     "https://frontend-test-assignment-api.abz.agency/api/v1/users",
    //     formData,
    //     token
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });

    console.log(response);
  };

  return (
    <div>
      <h2>Register to get a work</h2>
      <RegistrationReduxForm
        positions={props.positions}
        onSubmit={FieldFileInput}
      />
    </div>
  );
};

const maxLengt = maxLengthCreator(60);

const RegistrationForm = (props) => {
  // Validation functions

  // Image wweight validation
  // const validateImageWeight = (imageFile) => {
  //   if (imageFile && imageFile.size) {
  //     // Get image size in kilobytes
  //     const imageFileKb = imageFile.size / 1024;
  //     const { maxWeight } = this.props;
  //     if (imageFileKb > maxWeight) {
  //       return `Image size must be less or equal to ${maxWeight}kb`;
  //     }
  //   }
  // };

  // const validateImageFormat = (imageFile) => {
  //   if (imageFile) {
  //     const { mimeType } = this.props;
  //     if (!mimeType.includes(imageFile.type)) {
  //       return `Image mime type must be ${mimeType}`;
  //     }
  //   }
  // };

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Your name"}
          component={Input}
          name={"name"}
          validate={[requiredField, maxLengt]}
        />
      </div>
      <div>
        <Field
          placeholder={"Your email"}
          component={Input}
          type={"email"}
          name={"email"}
        />
      </div>
      <div>
        <Field
          placeholer={"+380 XX XXX XX XX"}
          component={Input}
          type={"tel"}
          name={"phone"}
        />
      </div>
      {props.positions.map((position) => {
        return (
          <div key={position.id}>
            <label>
              <Field
                component={"input"}
                type={"radio"}
                name={"position"}
                value={position.name}
              />
              {position.name}
            </label>
          </div>
        );
      })}
      <div>
        <Field value="" type="file" name="photo" component={FieldFileInput} />
      </div>
      <div>
        <button>Sign up now</button>
      </div>
    </form>
  );
};

const RegistrationReduxForm = reduxForm({
  form: "registration",
})(RegistrationForm);

export default Registration;
