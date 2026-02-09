import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ContactUsLocations from "./ContactUsLocations";
import SuccessDialog from "./SuccessDialog";

const HUBSPOT_FORM_GUID = "c90a6c17-c1d9-4304-907a-778073d646d1";
const HUBSPOT_PORTAL_ID = "244794377";

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
};

// Validation Schema
const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  // phone: yup
  //   .string()
  //   .matches(/^[0-9+\-() ]+$/, "Invalid phone number")
  //   .min(7, "Phone number is too short")
  //   .required("Phone number is required"),

  phone: yup
    .string()
    .required("Enter phone number")
    .test("is-valid-phone", "Please enter a valid phone number", (value) => {
      if (!value) return false;
      // Remove all non-digit characters except + for validation
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7;
    }),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const TakeFirstStepContactUs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setSubmitError("");

      const hutk = getCookie("hubspotutk");
      const context = {
        pageUri: window.location.href,
        pageName: document.title,
      };
      
      // Only include hutk if it exists and is not empty
      if (hutk && hutk.trim() !== "") {
        context.hutk = hutk;
      }

      const payload = {
        fields: [
          { name: "lastname", value: data.fullName },
          { name: "email", value: data.email },
          { name: "mobilephone", value: data.phone },
          { name: "message", value: data.message },
        ],
        context,
      };

      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await res.json();
      
      console.log("HubSpot API Response:", {
        status: res.status,
        statusText: res.statusText,
        data: responseData,
        submittedFields: payload.fields,
      });
      
      if (!res.ok) {
        console.error("HubSpot API Error - Full Response:", JSON.stringify(responseData, null, 2));
        console.error("HubSpot API Error - Submitted Payload:", JSON.stringify(payload, null, 2));
        
        let msg = "Something went wrong. Please try again.";
        if (responseData?.message) {
          msg = responseData.message;
        } else if (responseData?.errors && Array.isArray(responseData.errors)) {
          msg = responseData.errors.map(e => e.message || JSON.stringify(e)).join(", ");
        } else if (responseData?.invalidFields && Array.isArray(responseData.invalidFields)) {
          msg = `Invalid fields: ${responseData.invalidFields.map(f => f.name || JSON.stringify(f)).join(", ")}`;
        } else if (responseData?.errorType) {
          msg = `${responseData.errorType}: ${responseData.message || "Unknown error"}`;
        }
        throw new Error(msg);
      }
      
      console.log("HubSpot submission successful:", responseData);
      
      reset();
      
      setIsDialogOpen(true);
    } catch (error) {
      setSubmitError(error?.message || "Something went wrong. Please try again.");
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
              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}
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
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="us"
                    forceDialCode={true}
                    className={`w-full focus:ring-[#d82028] ${
                      errors.phone ? "error" : ""
                    }`}
                    inputClassName={`w-full !h-[51px] !px-4 !py-3 border rounded-lg 
                      text-[16px] focus:outline-none transition-all ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-200 focus:ring-2 focus:ring-[#d82028]"
                    }`}
                    countrySelectorStyleProps={{
                      buttonClassName: "!px-2 !h-[51px] !py-3 border-r border-gray-200 rounded-l-lg",
                    }}
                  />
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

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
