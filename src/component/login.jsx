import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import logo from "../assets/logo.webp";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = (data) => {
    setFormError("");
    try {
      if (data) {
        dispatch({ type: "LOGIN", payload: data });
        navigate("/");
      }
    } catch (error) {
      setFormError(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-orange-100 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center gap-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="logo" className="h-60 w-auto" />
        </div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit(login)}
          className="space-y-4 w-full max-w-md p-6 bg-gray-100 rounded-xl text-black shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Hi, Welcome back</h2>

          <Input
            label="Email:"
            placeholder="Enter email address"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
            {...register("password", {
              required: "Password is required",
              validate: {
                matchPattern: (value) =>
                  /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value) ||
                  "Password must be at least 6 characters, include one uppercase letter and one number",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" {...register("rememberMe")} />
              Remember Me
            </label>

            <p className="text-sm text-blue-400 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {formError && <p className="text-red-500">{formError}</p>}

          <div className="flex justify-center">
            <Button className="w-40" label="Login" type="submit" />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={() => console.log("Google login")}
              className="w-full bg-white text-black rounded-md py-2 hover:bg-gray-100 transition"
            >
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => console.log("Facebook login")}
              className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
            >
              Continue with Facebook
            </button>
          </div>

          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:text-blue-600 font-medium transition"
            >
              Sign up
            </Link>
          </p>
        </form>

        {/* Text */}
        <div className="max-w-sm text-orange-900 font-semibold text-xl space-y-4">
          <h3>Welcome to Crypto Price Tracker</h3>
          <p className="font-normal text-base text-orange-800">
            Stay updated with real-time cryptocurrency prices, market trends,
            and insightful analytics—all in one easy-to-use platform designed to
            help you make informed investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
