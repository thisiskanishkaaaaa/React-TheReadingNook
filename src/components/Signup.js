import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const FormData = (e) => {
    e.preventDefault();
    const fromdatasub = {
      username: name,
      email: email,
      password: password,
      confirm_password: confirmpass,
    };

    axios
      .post("http://157.66.191.24:3003/api/signup", fromdatasub)
      .then((response) => {
        toast.success(response?.data?.msg || "Sign-up Successful!");
        localStorage.setItem("userid", response.data.data._id);

        // Redirect to Home Page after successful signup
        setTimeout(() => {
          navigate("/home");
        }, 1500);  // Delay to show success message before navigating
      })
      .catch((error) => {
        toast.error(error?.response?.data?.msg || "Sign-up failed.");
        console.error("Error during signup:", error);
      });
  };

  return (
    <>
      <Toaster />
      <div>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>
                        <form onSubmit={FormData} className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat Password"
                                onChange={(e) => setConfirmpass(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                              Register
                            </button>
                          </div>
                        </form>
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

export default Signup;
