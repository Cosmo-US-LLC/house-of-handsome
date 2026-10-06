import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import SuccessDialog from "../ContactUs/SuccessDialog";
import franchiseHeroImage from "@/assets/images/franchise/franchise_hero/frame_2147227240.webp";
import { TIMELINE_OPTIONS, EXPERIENCE_OPTIONS } from "./data";

// Same HubSpot franchise form as the existing /franchise page
const HUBSPOT_FORM_GUID = "071de1c4-c247-4787-aefc-e4cc90138c78";
const HUBSPOT_PORTAL_ID = "244794377";

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
};

const schema = yup.object().shape({
  fullName: yup.string().min(3, "Full name must be at least 3 characters").required("Full name is required"),
  phone: yup
    .string()
    .required("Enter phone number")
    .test("is-valid-phone", "Please enter a valid phone number", (v) => !!v && v.replace(/\D/g, "").length >= 7),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"),
  city: yup.string().required("City or area is required"),
  timeline: yup.string().nullable(),
  experience: yup.string().nullable(),
  consent: yup.boolean(),
});

const inputClass = (err) =>
  `w-full rounded-lg border bg-white px-3.5 py-3 font-['Urbanist'] text-[16px] text-[#181818] focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
    err ? "border-red-500" : "border-[#c9c5bf]"
  }`;
const labelClass = "mb-1.5 block font-['Urbanist'] text-[14px] font-bold text-[#181818]";
const errClass = "mt-1 font-['Urbanist'] text-[13px] text-red-600";

function Pills({ name, options, register }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label key={o} className="relative cursor-pointer">
          <input type="radio" value={o} {...register(name)} className="peer sr-only" />
          <span className="inline-block rounded-full border border-[#c9c5bf] px-4 py-2.5 font-['Urbanist'] text-[15px] font-medium text-[#181818] transition-colors peer-checked:border-[#111111] peer-checked:bg-[#111111] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#d82028]">
            {o}
          </span>
        </label>
      ))}
    </div>
  );
}

function ApplyForm() {
  const [open, setOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      setSubmitError("");
      const hutk = getCookie("hubspotutk");
      const context = { pageUri: window.location.href, pageName: document.title };
      if (hutk) context.hutk = hutk;

      // The HubSpot form has no city/timeline/experience fields, so they travel in the message.
      const message = [
        `City or area of interest: ${data.city}`,
        `Preferred opening timeline: ${data.timeline || "Not specified"}`,
        `Barbering or salon experience: ${data.experience || "Not specified"}`,
        `Email consent: ${data.consent ? "Yes" : "No"}`,
      ].join("\n");

      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "lastname", value: data.fullName },
              { name: "email", value: data.email },
              { name: "mobilephone", value: data.phone },
              { name: "preffered_franchise_model", value: "Shop-in-Shop (Licensed Operator)" },
              { name: "message", value: message },
            ],
            context,
          }),
        },
      );
      const body = await res.json();
      if (!res.ok) throw new Error(body?.message || "Something went wrong. Please try again.");

      reset({ fullName: "", email: "", phone: undefined, city: "", timeline: null, experience: null, consent: false });
      setOpen(true);
    } catch (error) {
      setSubmitError(error?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="apply" className="bg-[#111111] py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-5">
          <h2 className="font-['Cairo'] text-[34px] font-bold leading-[1.1] md:text-[56px]">Franchise inquiry form</h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#d6d3ce] md:text-[18px]">
            Tell us a little about you and our franchise team will reach out within one business day.
          </p>
          <ul className="flex list-disc flex-col gap-2.5 pl-5 font-['Urbanist'] text-[16px] font-medium text-[#d6d3ce] marker:text-[#d82028]">
            <li>No obligation</li>
            <li>The full investment and revenue share explained</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4 rounded-xl bg-white p-5 text-[#111111] sm:p-8">
          {submitError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full name</label>
              <input {...register("fullName")} autoComplete="name" className={inputClass(errors.fullName)} />
              {errors.fullName && <p className={errClass}>{errors.fullName.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    defaultCountry="ca"
                    forceDialCode
                    className={`w-full !gap-0 rounded-lg border bg-white focus-within:ring-2 focus-within:ring-[#d82028] ${
                      errors.phone ? "!border-red-500" : "border-[#c9c5bf]"
                    }`}
                    inputClassName="!h-[50px] !flex-1 !min-w-0 !border-0 !rounded-r-lg !bg-transparent !pl-3 !pr-3.5 !font-['Urbanist'] !text-[16px] !text-[#181818] !outline-none"
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!h-[50px] !border-0 !border-r !border-[#c9c5bf] !rounded-l-lg !rounded-r-none !bg-transparent !px-3",
                      dropdownStyleProps: {
                        className: "!font-['Urbanist'] !text-[15px] !rounded-lg !shadow-lg",
                      },
                    }}
                  />
                )}
              />
              {errors.phone && <p className={errClass}>{errors.phone.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" {...register("email")} autoComplete="email" className={inputClass(errors.email)} />
              {errors.email && <p className={errClass}>{errors.email.message}</p>}
            </div>
            <div>
              <label className={labelClass}>City or area of interest</label>
              <input {...register("city")} placeholder="e.g. Calgary" className={inputClass(errors.city)} />
              {errors.city && <p className={errClass}>{errors.city.message}</p>}
            </div>
          </div>

          <fieldset>
            <legend className={labelClass}>When would you like to open?</legend>
            <Pills name="timeline" options={TIMELINE_OPTIONS} register={register} />
          </fieldset>
          <fieldset>
            <legend className={labelClass}>Barbering or salon experience</legend>
            <Pills name="experience" options={EXPERIENCE_OPTIONS} register={register} />
          </fieldset>

          <label className="flex items-start gap-2.5 font-['Urbanist'] text-[13px] leading-[20px] text-[#4a4744]">
            <input type="checkbox" {...register("consent")} className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#d82028]" />
            <span>I agree to receive emails about House of Handsome franchise opportunities. I can unsubscribe at any time.</span>
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-[10px] bg-[#d82028] px-6 py-4 font-['Urbanist'] text-[17px] font-bold text-white transition-colors hover:bg-[#b91219] disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="font-['Urbanist'] text-[13px] text-[#5e5a56]">Your details are only used to contact you about franchising.</p>
        </form>
      </div>

      <SuccessDialog
        open={open}
        onOpenChange={setOpen}
        image={franchiseHeroImage}
        buttonText="Back To Franchising"
        onButtonClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Thank you for your interest in franchising with us!"
        description="Our team will review your submission and contact you within 1 business day."
      />
    </section>
  );
}

export default ApplyForm;
