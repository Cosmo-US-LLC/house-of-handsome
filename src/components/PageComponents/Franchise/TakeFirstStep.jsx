import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PrimaryCTA from "@/components/ui/PrimaryCTA";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .email("Enter a valid email address")
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

  franchiseModel: yup
    .string()
    .required("Please select a franchise model"),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function TakeFirstStep() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="bg-[#f4f4f4] md:py-20 py-10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-[800px] mx-auto text-center mb-6 md:mb-12">
          <h2 className="md:text-[48px] text-[36px] font-['Cairo'] font-bold text-[#181818] md:leading-[55px] leading-[40px] mb-4">
            Take the First Step Today
          </h2>
          <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px] mb-6">
            Ready to build your future with House of Handsome? Let's make it
            happen.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center">
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818]">
              Call us at{" "}
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

        <div
          className="bg-white rounded-2xl md:p-8 p-4 max-w-[1080px] mx-auto shadow-sm"
          id="franchiseForm"
        >
          <h3 className="md:text-[32px] text-[24px] font-['Cairo'] font-bold text-[#d82028] text-center mb-8">
            Franchise Inquiry Form
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block font-['Urbanist'] font-medium text-[18px] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("fullName")}
                placeholder="Enter full name"
                className={`w-full px-4 py-5 border rounded-lg text-[16px] focus:outline-none transition-all
                  ${errors.fullName ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-['Urbanist'] font-medium text-[18px] mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email")}
                placeholder="Enter email address"
                className={`w-full px-4 py-5 border rounded-lg text-[16px] focus:outline-none transition-all
                  ${errors.email ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-['Urbanist'] font-medium text-[18px] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone")}
                placeholder="Enter phone number"
                className={`w-full px-4 py-5 border rounded-lg text-[16px] focus:outline-none transition-all
                  ${errors.phone ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Franchise Model */}
            <div>
              <label className="block font-['Urbanist'] font-medium text-[18px] mb-2">
                Preferred Franchise Model <span className="text-red-500">*</span>
              </label>
              <select
                {...register("franchiseModel")}
                className={`w-full px-4 py-5 border rounded-lg text-[16px] bg-white focus:outline-none transition-all
                  ${errors.franchiseModel ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"}`}
              >
                <option value="">Select a franchise model</option>
                <option value="shop-in-shop">Shop-in-Shop (Licensed Operator)</option>
                {/* <option value="full-franchise">Full Franchise</option>
                <option value="master-franchise">Master Franchise</option> */}
              </select>
              {errors.franchiseModel && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.franchiseModel.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-['Urbanist'] font-medium text-[18px] mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message")}
                rows={6}
                placeholder="Tell us about your interest in franchising..."
                className={`w-full px-4 py-5 border rounded-lg resize-none text-[16px] focus:outline-none transition-all
                  ${errors.message ? "border-red-500" : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <PrimaryCTA disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </PrimaryCTA>
          </form>
        </div>
      </div>
    </section>
  );
}
