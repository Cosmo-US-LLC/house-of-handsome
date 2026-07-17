import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import heroBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

// TODO: wire this form to Klaviyo (embed form or API) before launch.
// It currently only validates client-side and swaps to the success panel.
const schema = yup.object().shape({
  name: yup.string().min(2, "Enter your full name").required("Name is required"),
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
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ),
});

function HeroEntry() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    setSubmitted(true);
  };

  return (
    <header
      className="relative w-full overflow-hidden bg-black bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c]/95 via-[#1c1c1c]/90 to-[#141414]/95" />
      <div className="pointer-events-none absolute -left-[160px] -bottom-[160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(216,32,40,0.28),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-11 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-8">
        <div>
          <p className="mb-4 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
            Red Deer &middot; Opening Soon
          </p>
          <span className="mb-5 inline-block rounded-md bg-[#d82028] px-3.5 py-1.5 font-['Urbanist'] text-[13px] font-bold uppercase tracking-[0.1em] text-white">
            Free To Enter &middot; No Purchase Necessary
          </span>
          <h1 className="mb-4.5 font-['Cairo'] text-[38px] font-bold leading-[1.15] text-white md:text-[60px]">
            Win Free Haircuts <span className="text-[#d82028]">For A Year.</span>
          </h1>
          <p className="mb-6.5 max-w-[50ch] font-['Urbanist'] text-[16px] text-white/82">
            House of Handsome is Alberta's award-winning barbershop, now
            bringing its seventh location to Red Deer.
          </p>
          <ul className="flex flex-col gap-1">
            {[
              "1 grand prize winner: 12 free haircuts, one every month",
              "10 runners-up: free first cut + hot towel shave",
              "Winners drawn live at our opening event",
            ].map((item) => (
              <li
                key={item}
                className="relative py-1.5 pl-[30px] font-['Urbanist'] text-[15.5px] text-white/85"
              >
                <span className="absolute left-0 font-bold text-[#d82028]">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            id="enter"
            className="rounded-2xl bg-white p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:p-9"
          >
            {!submitted ? (
              <>
                <h3 className="mb-1.5 font-['Cairo'] text-[22px] font-bold text-[#111111]">
                  Throw Your Name In.
                </h3>
                <p className="mb-6 font-['Urbanist'] text-[14.5px] text-[#6b6b6b]">
                  Free entry. We'll email you if you win. That's it.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="giveaway-name"
                      className="mb-1.5 block font-['Cairo'] text-[13.5px] font-semibold text-[#111111]"
                    >
                      Name
                    </label>
                    <input
                      id="giveaway-name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      {...register("name")}
                      className={`w-full rounded-lg border-[1.5px] bg-[#f5f5f5] px-3.5 py-3.5 font-['Urbanist'] text-[15.5px] text-[#333333] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
                        errors.name ? "border-red-500" : "border-[#ececec]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="giveaway-phone"
                      className="mb-1.5 block font-['Cairo'] text-[13.5px] font-semibold text-[#111111]"
                    >
                      Phone
                    </label>
                    <input
                      id="giveaway-phone"
                      type="tel"
                      placeholder="(403) 000-0000"
                      autoComplete="tel"
                      {...register("phone")}
                      className={`w-full rounded-lg border-[1.5px] bg-[#f5f5f5] px-3.5 py-3.5 font-['Urbanist'] text-[15.5px] text-[#333333] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
                        errors.phone ? "border-red-500" : "border-[#ececec]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="giveaway-email"
                      className="mb-1.5 block font-['Cairo'] text-[13.5px] font-semibold text-[#111111]"
                    >
                      Email
                    </label>
                    <input
                      id="giveaway-email"
                      type="email"
                      placeholder="you@email.com"
                      autoComplete="email"
                      {...register("email")}
                      className={`w-full rounded-lg border-[1.5px] bg-[#f5f5f5] px-3.5 py-3.5 font-['Urbanist'] text-[15.5px] text-[#333333] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d82028] ${
                        errors.email ? "border-red-500" : "border-[#ececec]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-1.5 w-full rounded-lg bg-[#d82028] py-3.5 text-center font-['Urbanist'] text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219] disabled:opacity-60"
                  >
                    Enter The Free Draw
                  </button>

                  <p className="mt-3.5 font-['Urbanist'] text-[12.5px] leading-[1.5] text-[#6b6b6b]">
                    Free entry. By entering you agree to the{" "}
                    <Link
                      to="/red-deer-giveaway-rules"
                      target="_blank"
                      rel="noopener"
                      className="font-semibold text-[#d82028] hover:underline"
                    >
                      official contest rules
                    </Link>{" "}
                    and to receive updates about the draw and our Red Deer
                    opening. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-4 text-center">
                <div className="mb-3.5 text-[44px] leading-none">&#127915;</div>
                <h3 className="mb-2 font-['Cairo'] text-[22px] font-bold text-[#111111]">
                  You're In.
                </h3>
                <p className="font-['Urbanist'] text-[15px] text-[#6b6b6b]">
                  Your entry is confirmed. Here's what happens next: entries
                  close [DATE TBC], winners are drawn live at our opening
                  event, and if your name comes up we email you within 48
                  hours. Good luck.
                </p>

                <div className="mt-6.5 rounded-xl border border-[#ececec] bg-[#f5f5f5] p-6 text-left">
                  <p className="mb-2 font-['Cairo'] text-[16px] font-bold text-[#111111]">
                    While you wait: The Founding 150
                  </p>
                  <p className="mb-4 font-['Urbanist'] text-[14px] text-[#6b6b6b]">
                    Our $100 lifetime membership is $50 for the first 150
                    members. 20% off every service forever, a free head
                    massage every visit, and priority booking. Once the spots
                    are gone, so is the price.
                  </p>
                  <Link
                    to="/red-deer-founding-membership"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#d82028] px-6 py-2.75 font-['Urbanist'] text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219]"
                  >
                    See The Membership
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroEntry;
