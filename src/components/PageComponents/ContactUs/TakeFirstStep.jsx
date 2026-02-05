import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactUsLocations from "./ContactUsLocations";
import SuccessDialog from "./SuccessDialog";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  // phone: yup
  //   .string()
  //   .matches(/^[0-9+\-() ]+$/, "Invalid phone number")
  //   .min(7, "Phone number is too short")
  //   .required("Phone number is required"),

  phone: yup
    .string()
    .required("Enter phone number")
    .matches(/^[0-9+\-() ]+$/, "Invalid phone number")
    .min(7, "Phone number is too short"),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const TakeFirstStepContactUs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted:", data);
      // TODO: Add your form submission logic here (e.g., API call)
      // await submitForm(data);
      
      // Clear form after successful submission
      reset();
      
      // Open success dialog
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error (you might want to show an error message)
    }
  };

  return (
    <section className="bg-[#fff] md:py-16 py-10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-[800px] mx-auto text-center mb-6 md:mb-12">
          <h2 className="md:text-[48px] text-[36px] font-['Cairo'] font-bold text-[#181818] md:leading-[55px] leading-[40px] mb-4">
            Take The First Step Today
          </h2>

          <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px] mb-6">
            Ready to build your future with House of Handsome? Let's make it
            happen.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818]">
              Call us at:{" "}
              <a href="tel:8774182541" className="font-bold text-[#d82028]">
                877-418-2541
              </a>
            </p>
            <div className="text-gray-400">|</div>
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818]">
              Or fill out our quick form below
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Form */}
          <div className="flex-1 p-6 bg-white rounded-2xl shadow-sm md:p-8">
            <h3 className="md:text-[32px] text-[24px] font-['Cairo'] font-bold text-[#d82028] mb-6">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("fullName")}
                  placeholder="Enter full name"
                  className={`w-full px-4 py-3 border rounded-lg text-[16px] focus:outline-none transition-all
                    ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"
                    }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("email")}
                  placeholder="Enter email address"
                  className={`w-full px-4 py-3 border rounded-lg text-[16px] focus:outline-none transition-all
                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("phone")}
                  placeholder="Enter phone number"
                  className={`w-full px-4 py-3 border rounded-lg text-[16px] focus:outline-none transition-all
                    ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"
                    }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-['Urbanist'] font-medium text-[16px] mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={8}
                  placeholder="Send your message..."
                  className={`w-full px-4 py-3 border rounded-lg text-[16px] resize-none focus:outline-none transition-all
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#d82028] hover:bg-[#b81820] text-white font-['Urbanist'] text-[16px] py-3 px-6 rounded-lg transition-colors disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Locations */}
          <ContactUsLocations classname="bg-[#d82028] rounded-2xl md:p-8 p-6 text-white md:max-w-[400px] text-center" />
        </div>
      </div>

      {/* Success Dialog */}
      <SuccessDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default TakeFirstStepContactUs;
