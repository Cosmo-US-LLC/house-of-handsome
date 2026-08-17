import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ChevronDown, Paperclip } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { supabase } from "@/lib/supabase";
import heroBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

const MAX_FILE_SIZE = 500 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const EXPERIENCE_OPTIONS = ["Less than 1 year", "1-2 years", "3-5 years", "5+ years"];

const schema = yup.object().shape({
  fullName: yup.string().min(2, "Enter your full name").required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid-phone", "Please enter a valid phone number", (value) => {
      if (!value) return false;
      return value.replace(/\D/g, "").length >= 7;
    }),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ),
  yearsExperience: yup.string().required("Please select your experience level"),
  commute: yup.string().required("Please select an option"),
  portfolio: yup.string(),
  resume: yup
    .mixed()
    .test("required", "Resume is required", (value) => value && value.length > 0)
    .test(
      "fileSize",
      "File must be 500KB or smaller",
      (value) => !value?.[0] || value[0].size <= MAX_FILE_SIZE,
    )
    .test(
      "fileType",
      "Only PDF, DOC, or DOCX files are allowed",
      (value) => !value?.[0] || ALLOWED_FILE_TYPES.includes(value[0].type),
    ),
});

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const resumeFiles = watch("resume");
  const resumeFileName = resumeFiles?.[0]?.name;

  const onSubmit = async (data) => {
    try {
      setSubmitError("");

      const file = data.resume[0];
      const filePath = `${crypto.randomUUID()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("SpruceGroveResumes")
        .upload(filePath, file);
      if (uploadError) throw new Error(uploadError.message);

      const { error: insertError } = await supabase.from("spruce_grove_barber_applications").insert({
        full_name: data.fullName,
        phone: data.phone,
        email: data.email,
        years_experience: data.yearsExperience,
        commute_comfortable: data.commute === "yes",
        portfolio_link: data.portfolio || null,
        resume_path: filePath,
        resume_filename: file.name,
      });
      if (insertError) throw new Error(insertError.message);

      reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error?.message || "Something went wrong. Please try again.");
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded-lg border-[1.5px] bg-[#f5f5f5] px-3.5 py-3.5 font-['Urbanist'] text-[16px] text-[#333333] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
      hasError ? "border-red-500" : "border-[#ececec]"
    }`;

  return (
    <section
      id="top"
      className="relative w-full py-16 overflow-hidden bg-black bg-center bg-cover md:py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c]/95 via-[#1c1c1c]/90 to-[#141414]/95" />
      <div className="pointer-events-none absolute -left-[160px] -bottom-[160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(216,32,40,0.28),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-11 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-8">
        <div>
          <p className="mb-4 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
            Spruce Grove &middot; Now Hiring
          </p>
          <h1 className="mb-4.5 font-['Cairo'] text-[38px] font-bold leading-[1.15] text-white md:text-[60px]">
            Barber / <span className="text-[#d82028]">Hairstylist</span>, Spruce Grove.
          </h1>
          <p className="mb-6.5 max-w-[50ch] font-['Urbanist'] text-[16px] text-white/82">
            House of Handsome is expanding its team in Spruce Grove. If you take pride in
            your craft, we'd like to hear from you.
          </p>
          <ul className="flex flex-col gap-1">
            {[
              "Part of an award-winning, established Alberta brand",
              "Ongoing training and support as you grow with us",
            ].map((item) => (
              <li
                key={item}
                className="relative py-1.5 pl-[30px] font-['Urbanist'] text-[16px] text-white/85"
              >
                <span className="absolute left-0 font-bold text-[#d82028]">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-2xl bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:p-9">
            {!submitted ? (
              <>
                <h3 className="mb-1.5 font-['Cairo'] text-[22px] font-bold text-[#111111]">
                  Apply Now
                </h3>
                <p className="mb-6 font-['Urbanist'] text-[14px] text-[#6b6b6b]">
                  Takes about two minutes. We'll reach out if it's a fit.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {submitError && (
                    <div className="px-4 py-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="application-fullName"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Full Name
                    </label>
                    <input
                      id="application-fullName"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      {...register("fullName")}
                      className={inputClass(errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="application-phone"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Phone Number
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          defaultCountry="ca"
                          forceDialCode={true}
                          className={`w-full ${errors.phone ? "error" : ""}`}
                          inputClassName={`w-full !h-auto !bg-[#f5f5f5] !px-3.5 !py-3.5 !font-['Urbanist'] !text-[16px] !text-[#333333] transition-colors focus:!bg-white focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
                            errors.phone ? "!border-red-500" : "!border-[#ececec]"
                          }`}
                          countrySelectorStyleProps={{
                            buttonClassName:
                              "!bg-[#f5f5f5] !border-[1.5px] !px-2.5 !h-auto !py-3.5 border-r border-gray-200 rounded-l-lg",
                          }}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="application-email"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Email Address
                    </label>
                    <input
                      id="application-email"
                      type="email"
                      placeholder="you@email.com"
                      autoComplete="email"
                      {...register("email")}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="application-yearsExperience"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Years of Experience
                    </label>
                    <div className="relative">
                      <select
                        id="application-yearsExperience"
                        defaultValue=""
                        {...register("yearsExperience")}
                        className={`${inputClass(errors.yearsExperience)} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {EXPERIENCE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b6b6b]"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.yearsExperience && (
                      <p className="mt-1 text-sm text-red-500">{errors.yearsExperience.message}</p>
                    )}
                  </div>

                  <div>
                    <p className="mb-1.5 font-['Cairo'] text-[14px] font-semibold text-[#111111]">
                      Are you comfortable commuting for this job?
                    </p>
                    <div className="flex items-center gap-6">
                      <label className="flex cursor-pointer items-center gap-2 font-['Urbanist'] text-[16px] text-[#333333]">
                        <input
                          type="radio"
                          value="yes"
                          {...register("commute")}
                          className="h-4 w-4 accent-[#d82028]"
                        />
                        Yes
                      </label>
                      <label className="flex cursor-pointer items-center gap-2 font-['Urbanist'] text-[16px] text-[#333333]">
                        <input
                          type="radio"
                          value="no"
                          {...register("commute")}
                          className="h-4 w-4 accent-[#d82028]"
                        />
                        No
                      </label>
                    </div>
                    {errors.commute && (
                      <p className="mt-1 text-sm text-red-500">{errors.commute.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="application-portfolio"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Instagram Handle or Portfolio Link{" "}
                      <span className="font-normal text-[#6b6b6b]">(optional)</span>
                    </label>
                    <input
                      id="application-portfolio"
                      type="text"
                      placeholder="@yourhandle or link"
                      {...register("portfolio")}
                      className={inputClass(errors.portfolio)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="application-resume"
                      className="mb-1.5 block font-['Cairo'] text-[14px] font-semibold text-[#111111]"
                    >
                      Upload Resume
                    </label>
                    <label
                      htmlFor="application-resume"
                      className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg border-[1.5px] bg-[#f5f5f5] px-3.5 py-3.5 font-['Urbanist'] text-[16px] transition-colors hover:bg-white ${
                        errors.resume ? "border-red-500" : "border-[#ececec]"
                      }`}
                    >
                      <Paperclip className="h-4 w-4 shrink-0 text-[#6b6b6b]" aria-hidden="true" />
                      <span className={resumeFileName ? "text-[#333333]" : "text-[#6b6b6b]"}>
                        {resumeFileName || "Choose a file (PDF, DOC, DOCX — max 500KB)"}
                      </span>
                    </label>
                    <input
                      id="application-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register("resume")}
                      className="sr-only"
                    />
                    {errors.resume && (
                      <p className="mt-1 text-sm text-red-500">{errors.resume.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1.5 w-full rounded-lg bg-[#d82028] py-3.5 text-center font-['Urbanist'] text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219] disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-4 text-center">
                <div className="mb-3.5 text-[44px] leading-none">&#9986;&#65039;</div>
                <h3 className="mb-2 font-['Cairo'] text-[22px] font-bold text-[#111111]">
                  Application Received.
                </h3>
                <p className="font-['Urbanist'] text-[16px] text-[#6b6b6b]">
                  Thanks for applying. Our team will review your application and
                  reach out if it looks like a fit for the Spruce Grove team.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationForm;
