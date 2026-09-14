import DOMPurify from "dompurify";

export type ResponseMessage = {
  status: "success" | "error";
  message?: string;
};

export const sanitizeFormData = (entryValue: FormDataEntryValue | null) => {
  if (entryValue === null) return entryValue;

  if (entryValue instanceof File) {
    throw new Error("Unable to accept file uploads. Please enter text.");
  } else {
    return DOMPurify.sanitize(entryValue);
  }
};

export const isValidEmail = (email: string | null) => {
  if (!email) return false;

  const emailRegex = /^([-\w_.]*[^.])(@\w+)(.\w+(.\w+)?[^.\W])/g;
  return email.match(emailRegex);
};
