import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // used to navigate after successful login

  // Handle form submission
  const FormData = (e) => {
    e.preventDefault();
    const formdata = {
      email: email,
      password: password,
    };

    // Send login request to the API
    axios
      .post("http://157.66.191.24:3003/api/login", formdata)
      .then((response) => {
        // If login is successful, show success toast
        if (response?.data?.data?._id) {
          toast.success(response?.data?.msg || "Login Successful!");
          
          // Save user ID to local storage
          localStorage.setItem("userid", response.data.data._id);

          // Navigate to the home page after 2 seconds (allow time for toast to show)
          setTimeout(() => {
            navigate("/home"); // Redirect to home page
          }, 2000);
        } else {
          toast.error(response?.data?.msg || "Invalid credentials.");
        }
      })
      .catch((error) => {
        // Handle error and show an appropriate message
        toast.error(error?.response?.data?.msg || "Login failed.");
      });
  };

  return (
    <>
      <Toaster />
      <div>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <h1 className="fw-bold mb-5">Login</h1>
                        <form onSubmit={FormData} className="mx-1 mx-md-4">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                          </div>

                          <div className="form-outline">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>

                          <div className="form-check d-flex justify-content-between mb-5">
                            <div>
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example3"
                              >
                                Remember me
                              </label>
                            </div>
                            <Link to="/forgot-password" style={{ fontSize: "0.9rem" }}>
                              Forgot Password?
                            </Link>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                        <div className="text-center mt-4">
                          <p>
                            Don't have an account?{" "}
                            <Link to="/signup">Sign Up</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </>
  );
};

export default Login;
