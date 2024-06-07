import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSending(true);
    emailjs
      .sendForm(
        "service_ert0leoX",
        "template_nccfbq3",
        e.target,
        "hDfUIXlvtr5OsYZKg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setSubmissionCompleted(true);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  const validateForm = () => {
    if (!formState.fullName.trim()) {
      setValidationMessage("Name is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setValidationMessage("Invalid email address.");
      return false;
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(formState.phoneNumber)) {
      setValidationMessage("Invalid phone number.");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  if (submissionCompleted) {
    return (
      <div className="text-center text-black mt-24 text-xl mb-24">
        ✨🎉🎊🎉🎊✨ <p>Thank you for contacting us!</p>
        <p>We will get back to you soon.</p> ✨🎉🎊🎉🎊✨
      </div>
    );
  }

  return (
    <section class="bg-gray-100 ">
      <section class="flex items-center justify-center h-40 m-auto bg-fixed bg-center bg-cover bg-contact-pattern">
        <div class="p-5 text-5xl text-black bg-white bg-opacity-50">
          CONTACT US
        </div>
      </section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturers and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>
            <div class="mt-8">
              <a
                href="tel:5703900958"
                class="text-2xl font-bold text-amber-600"
              >
                570 390 0958
              </a>
              <address class="mt-2 not-italic">
                70 Circle Drive, Hawley PA
              </address>
            </div>
          </div>
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} class="space-y-4">
              <div>
                <label class="sr-only" for="fullName">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                />
              </div>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label class="sr-only" for="phoneNumber">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 border-2 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label class="sr-only" for="message">
                  Message
                </label>
                <textarea
                  class="w-full rounded-lg border-gray-200  border-2 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="text-red-600">{validationMessage}</div>
              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                >
                  <span class="font-medium">
                    {isSending ? "Sending..." : "Send Message"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
