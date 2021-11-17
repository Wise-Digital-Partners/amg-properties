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
          (document.getElementById(
            "rental-analysis-form-ajax-response"
          ).innerHTML =
            "Thank you for your submission! We will get in touch with you shortly."),
        form.remove(),
        (window.dataLayer = window.dataLayer || []),
        window.dataLayer.push({
          event: "rentalAnalysisFormSubmission",
        })
      )
      .catch((error) => alert(error));
  };

  render() {
    return (
      <StyledForm>
        <div id="rental-analysis-form-ajax-response"></div>
        <form
          name="Rental Analysis"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Rental Analysis" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1"
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
            <div className="mb-6">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1"
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
            <div className="mb-6">
              <label
                className="font-body text-sm font-medium text-primary-900 block mb-1"
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

          <div className="mb-6">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1"
              htmlFor="what-can-we-help-you-with"
            >
              What Can We Help You With?
            </label>
            <select
              name="what-can-we-help-you-with"
              onBlur={this.handleChange}
              required={true}
            >
              <option value="">Select one...</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Sewer & Drain">Sewer & Drain</option>
              <option value="HVAC">HVAC</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="font-body text-sm font-medium text-primary-900 block mb-1"
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

          <ButtonSolid type="submit" text="Send Message" />
        </form>
      </StyledForm>
    );
  }
}