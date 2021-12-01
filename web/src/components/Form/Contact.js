import React, { Component } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ButtonSolid from "../Button/ButtonSolid";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const StyledForm = styled.div`
  [multiple],
  [type="date"],
  [type="datetime-local"],
  [type="email"],
  [type="month"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="time"],
  [type="url"],
  [type="week"],
  select,
  textarea {
    ${tw`text-sm w-full bg-white px-4 py-2.5 border border-solid border-gray-200 rounded-sm focus:border-transparent focus:outline-none focus:ring-3 focus:ring-primary-500 focus:ring-opacity-30 transition-colors duration-300 ease-linear`}
  }
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  changeFormName = (e) => {
    // The value of the subject field.
    var value = e.target.value;
    // The name we want to apply to the form, based on the value.
    var name = "Contact-" + value;
    // The form element in the DOM.
    var form = document.querySelector("#conditional-form");
    // Apply the new name to the form's [name] attribute.
    if (form) form.setAttribute("name", name);
    // The [name="form-name] field in the DOM.
    var formName = document.querySelector(
      '#conditional-form [name="form-name"]'
    );
    // Apply the new name to the [name="form-name"] field within the form.
    if (formName) formName.setAttribute("value", name);

    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(
        () =>
          (document.getElementById("contact-form-ajax-response").innerHTML =
            "Thank you for contacting us! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "contactFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="contact-form-ajax-response"></div>
        <form
          name="Contact-Landlord or Investors"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          id="conditional-form"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input
            type="hidden"
            name="form-name"
            value="Contact-Landlord or Investors"
          />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="mb-5">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1.5"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-5">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1.5"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                required={true}
              />
            </div>
            <div className="mb-5">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="mb-5">
            <fieldset>
              <legend className="font-body text-sm font-medium text-primary-900 block mb-1.5">
                Are you an owner or a renter?
              </legend>
              <div className="flex flex-col space-y-2 mt-2">
                <label className="relative pl-7 mb-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="are-you-an-owner-or-a-renter"
                    value="Landlord or Investors"
                    onChange={this.changeFormName}
                    required={true}
                  />
                  Landlord or Investors
                  <span className="radio-custom"></span>
                </label>
                <label className="relative pl-7 mb-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="are-you-an-owner-or-a-renter"
                    onChange={this.changeFormName}
                    value="Residents"
                  />
                  Residents
                  <span className="radio-custom"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mb-5">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1.5"
              htmlFor="message"
            >
              Message (optional)
            </label>
            <textarea
              className="textarea"
              name="message"
              onChange={this.handleChange}
              rows="4"
              required={false}
            />
          </div>

          <ButtonSolid type="submit" text="Send" />
        </form>

        <form
          name="Contact-Residents"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className="hidden"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Contact-Residents" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          {/* <div className="mb-5"> */}
          {/* <label
              className="font-body text-sm font-medium text-primary-900 block mb-1.5"
              htmlFor="name"
            >
              Name
            </label> */}
          <input type="text" name="name" />
          {/* </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 w-full">
            <div className="mb-5">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1.5"
                htmlFor="phone"
              >
                Phone Number
              </label> */}
          <input type="tel" name="phone" />
          {/* </div> */}
          {/* <div className="mb-5">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label> */}
          <input type="email" name="email" />
          {/* </div>
          </div> */}
          {/* <div className="mb-5">
            <fieldset>
              <legend className="font-body text-sm font-medium text-primary-900 block mb-1.5">
                Are you an owner or a renter?
              </legend>
              <div className="flex flex-col space-y-2 mt-2">
                <label className="relative pl-7 mb-2 cursor-pointer text-sm"> */}
          <input
            type="radio"
            name="are-you-an-owner-or-a-renter"
            // value="Landlord or Investors"
            // onChange={this.changeFormName}
            // required={true}
          />
          {/* Landlord or Investors */}
          {/* <span className="radio-custom"></span> */}
          {/* </label> */}
          {/* <label className="relative pl-7 mb-2 cursor-pointer text-sm"> */}
          <input
            type="radio"
            name="are-you-an-owner-or-a-renter"
            // onChange={this.changeFormName}
            // value="Residents"
          />
          {/* Residents
            <span className="radio-custom"></span>
          </label> */}
          {/* </div>
            </fieldset>
          </div> */}
          {/* <div className="mb-5">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1.5"
              htmlFor="message"
            >
              Message (optional)
            </label> */}
          <textarea
            className="textarea"
            name="message"
            // onChange={this.handleChange}
            rows="4"
            // required={false}
          />
          {/* </div> */}
        </form>
      </StyledForm>
    );
  }
}
