import { useState, type SubmitEventHandler } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";
import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import {
  isValidEmail,
  sanitizeFormData,
  // validateFormData,
  type ResponseMessage
} from "./validateFormData";
const emailjsData: {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Record<"name" | "time" | "email" | "message", null | string>;
} = {
  service_id: "default_service",
  template_id: "template_dafh6fg",
  user_id: "SnMDaRpoRU593vGjY",
  template_params: {
    name: null,
    time: null,
    message: null,
    email: null
  }
};

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] =
    useState<ResponseMessage | null>(null);

  const handleError = (message?: string) => {
    setResponseMessage({
      status: "error",
      message:
        message ??
        "There was an error while sending your message. Please try again later."
    });
  };

  const handleSuccess = () => {
    setResponseMessage({
      status: "success",
      message: "Your message has been sent successfully!"
    });
  };

  const clearErrors = () => {
    setNameError(null);
    setEmailError(null);
  };

  const getValidatedPayload = (
    formData: FormData
  ): (typeof emailjsData)["template_params"] | undefined => {
    const nameString = sanitizeFormData(formData.get("name"));
    const emailString = sanitizeFormData(formData.get("email"));
    if (!nameString) {
      setNameError("Name field is required.");
      setIsLoading(false);
      return;
    }

    if (!emailString) {
      setEmailError("Email field is required.");
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(emailString)) {
      console.log("invalid email: -->", emailString, "<--", "a", "space");
      setEmailError("Please enter a valid email.");
      setIsLoading(false);
      return;
    }

    return {
      name: nameString,
      time: new Date().toLocaleString(),
      email: emailString,
      message: sanitizeFormData(formData.get("message"))
    };
  };

  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault();
    clearErrors();
    setIsLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const payload = getValidatedPayload(formData);
    if (!payload) {
      setIsLoading(false);
      return;
    }

    emailjsData.template_params = payload;
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailjsData
      );
      if (response.status < 300) {
        handleSuccess();
      }
    } catch {
      handleError();
    }
    setIsLoading(false);
  };

  return (
    <>
      {responseMessage ? (
        <p>{responseMessage.message}</p>
      ) : (
        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="flex w-full flex-col gap-4 md:gap-6">
              <FormInput
                placeholder="Your name"
                name="name"
                error={nameError}
              />
              <FormInput
                placeholder="Your email"
                type="email"
                name="email"
                error={emailError}
              />
              <FormTextArea
                placeholder="Please type your message here"
                name="message"
                rows={4}
              />
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-fit rounded-md border px-4 py-2 uppercase"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};
