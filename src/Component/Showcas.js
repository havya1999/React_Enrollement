import React, { useState } from "react";

function Showcas() {
  const register = { firstname: "", lastname: "", email: "", phone: "" };
  const [values, setvalues] = useState(register);
  const [errors, setvalidation] = useState({});
  const handlechange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setvalues(newObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      setTimeout(() => {
        alert("Registration successful! Redirecting...");
        // Navigate('/Success'); // Redirect to another page
      }, 1000);
    } else {
      alert("Please fill in the required fields correctly");
    }
  };
  const validation = () => {
    const errors = {};

    if (values.firstname === "") {
      errors.firstname = "Firstname is Reqiures";
    }
    if (values.lastname === "") {
      errors.lastname = "Lastname is Reqiures";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (values.phone === "") {
      errors.phone = "Phone is Reqiures";
    }
    setvalidation(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <>
      <section class="bg-dark text-light p-5 pg-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span class="text-warning">Wep Developer</span>
              </h1>
              <p class="lead">
                We focus on teaching our student the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                Start The Enrollment
              </button>
            </div>
            <img
              class="img-fluid w-50 p-3 d-none d-sm-block"
              src="./assets/develpment.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="enrollLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <p class="lead">
                  Fill out this form and we will get back to you
                </p>
                <div class="mb-3">
                  <label class="col-form-label" for="firstname">
                    First Name:
                  </label>
                  <input
                    name="firstname"
                    value={values.firstname}
                    onChange={handlechange}
                    type="text"
                    class="form-control"
                    
                  />
                  {errors.firstname && (
                    <p style={{ color: "red" }}>{errors.firstname}</p>
                  )}
                </div>
                <div class="mb-3">
                  <label class="col-form-label" for="lastname">
                    Last Name:
                  </label>
                  <input
                    name="lastname"
                    onChange={handlechange}
                    value={values.lastname}
                    type="text"
                    class="form-control"
                   
                  />
                  {errors.lastname && (
                    <p style={{ color: "red" }}>{errors.lastname}</p>
                  )}
                </div>
                <div class="mb-3">
                  <label class="col-form-label" for="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handlechange}
                    value={values.email}
                    class="form-control"
                    
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>
                <div class="mb-3">
                  <label class="col-form-label" for="phone">
                    Phone:
                  </label>
                  <input
                    name="phone"
                    onChange={handlechange}
                    value={values.phone}
                    type="tel"
                    class="form-control"
                    
                  />
                  {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone}</p>
                  )}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                
                type="button"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcas;
