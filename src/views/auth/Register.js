import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  const handleNext = (e) => {
    e.preventDefault();
    history.push("/auth/createpin");
  };

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the code to submit the form data to the backend
    console.log(formData);
    handleNext(e);
  };

  return (
    <div
      className="container mx-auto px-4 h-screen flex items-center justify-center"
      style={{ maxHeight: "100vh", overflow: "hidden" }}
    >
      <div className="relative flex flex-col w-full lg:w-6/12 px-4">
        <div className="bg-white rounded-my shadow-lg p-8">
          <a
            className="relative left-90 text-black text-3xl font-bold font-weight-900"
            onClick={() => window.history.back()}
          >
            ←
          </a>
          <h2 className="text-2xl font-semibold mb-4 text-green text-aeonik">Create Account</h2>
          <p className="text-sm text-blueGray-500 mb-6 font-semibold">Enter your details below.</p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-black font-semibold text-aeonik">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="What should we call you?"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring focus:outline-none mb-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black font-semibold text-aeonik">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Where can we reach you?"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring focus:outline-none mb-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black font-semibold text-aeonik">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Make it strong, don't use 1-8"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring focus:outline-none mb-1"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-green text-white font-semibold p-3 rounded-my"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-blueGray-500">
              Already have an account?{" "}
              <Link to="/auth/login" className="hover:underline text-green font-bold">
                Sign In
              </Link>
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-blueGray-500 font-semibold">
              By using Swiftaza, you agree to our{" "}
              <Link to="/terms" className="hover:underline text-green font-semibold">
                Terms of Service
              </Link>,{" "}
              <Link to="/privacy" className="hover:underline text-green font-semibold">
                Privacy Policy
              </Link>, and{" "}
              <Link to="/cardholder" className="hover:underline text-green font-semibold">
                Card Holder Agreement
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
