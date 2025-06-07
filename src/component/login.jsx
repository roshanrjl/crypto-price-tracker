import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">First Name</label>
          <input
            {...register("firstName")}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.lastName ? "border-red-500 ring-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">Last name is required.</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Age</label>
          <input
            {...register("age", { pattern: /^\d+$/ })}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.age ? "border-red-500 ring-red-500" : "focus:ring-blue-500"
            }`}
            placeholder="Enter age"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">Please enter a number for age.</p>
          )}
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
        />
      </form>
    </div>
  );
}

export default Login;
