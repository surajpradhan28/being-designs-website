import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { serviceCategories } from "../data/services";

interface ContactFormValues {
  fullName: string;
  email: string;
  contactNumber: string;
  brandName: string;
  serviceRequired: string;
  brandDetails: string;
  budget: string;
}

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-navy-500 focus:ring-2 focus:ring-navy-100";

const labelClass = "mb-1.5 block text-sm font-semibold text-navy-800";

const errorClass = "mt-1.5 text-xs font-medium text-coral-500";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ mode: "onBlur" });

  const onSubmit = async () => {
    // No backend is wired up yet — this simulates a network round trip
    // so the form feels real. Swap this for a real API/email call later.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Let's talk
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Start your project
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Tell us a bit about your brand and what you need — we'll take it
            from there.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-900/5 sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-500/10 text-mint-500">
                  <CheckCircle2 size={32} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-navy-950">
                  Thanks — your brief is in!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-600">
                  We've received your project details and will reach out
                  soon to talk next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold text-navy-700 underline decoration-navy-300 underline-offset-4 hover:text-navy-900"
                >
                  Submit another brief
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    aria-invalid={!!errors.fullName}
                    className={inputClass}
                    {...register("fullName", { required: "Please share your name." })}
                  />
                  {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@brand.com"
                    aria-invalid={!!errors.email}
                    className={inputClass}
                    {...register("email", {
                      required: "Please share your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="contactNumber" className={labelClass}>
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.contactNumber}
                    className={inputClass}
                    {...register("contactNumber", {
                      required: "Please share a contact number.",
                      minLength: { value: 7, message: "That number looks too short." },
                    })}
                  />
                  {errors.contactNumber && (
                    <p className={errorClass}>{errors.contactNumber.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="brandName" className={labelClass}>
                    Brand / Company Name
                  </label>
                  <input
                    id="brandName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your brand name"
                    aria-invalid={!!errors.brandName}
                    className={inputClass}
                    {...register("brandName", { required: "Please share your brand name." })}
                  />
                  {errors.brandName && <p className={errorClass}>{errors.brandName.message}</p>}
                </div>

                <div>
                  <label htmlFor="serviceRequired" className={labelClass}>
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    defaultValue=""
                    aria-invalid={!!errors.serviceRequired}
                    className={inputClass}
                    {...register("serviceRequired", { required: "Please pick a service." })}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceCategories.map((category) => (
                      <optgroup key={category.id} label={category.title}>
                        {category.items.map((item) => (
                          <option key={item.name} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  {errors.serviceRequired && (
                    <p className={errorClass}>{errors.serviceRequired.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Budget
                  </label>
                  <select
                    id="budget"
                    defaultValue=""
                    aria-invalid={!!errors.budget}
                    className={inputClass}
                    {...register("budget", { required: "Please select a budget range." })}
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="brandDetails" className={labelClass}>
                    Explain Your Brand
                  </label>
                  <textarea
                    id="brandDetails"
                    rows={4}
                    placeholder="What do you do, who's it for, and what do you need help with?"
                    aria-invalid={!!errors.brandDetails}
                    className={`${inputClass} resize-none`}
                    {...register("brandDetails", {
                      required: "Tell us a little about your brand.",
                      minLength: { value: 20, message: "A few more details would help — 20+ characters." },
                    })}
                  />
                  {errors.brandDetails && (
                    <p className={errorClass}>{errors.brandDetails.message}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-navy-800 disabled:pointer-events-none disabled:opacity-70 sm:w-auto sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Your Brief
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
