import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ContactUs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form data: ", data);
    toast.success("We have received your message!");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-5">
      <h2 className="text-l mb-5">Send message to us: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-900">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-3 py-2 border  bg-stone-300 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-3 py-2 border  bg-stone-300 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-gray-900">
            Your message
          </label>
          <textarea
            id="message"
            type="message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 6,
                message: "Message must be at least 6 characters",
              },
            })}
            className={`w-full px-3 py-2 border  bg-stone-300 ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white py-2 rounded bg-gray-950 hover:bg-gray-500 text-xl font-bold px-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
