export type ResponseMessage = {
  status: "success" | "error";
  message?: string;
};

export const sanitizeFormData = (entryValue: FormDataEntryValue | null) => {
  if (entryValue === null) return entryValue;

  if (entryValue instanceof File) {
    throw new Error("Unable to accept file uploads. Please enter text.");
  } else {
    return entryValue;
  }
};

export const isValidEmail = (email: string | null) => {
  if (!email) return false;

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^([-\w_.]*[^.])(@\w+)(.\w+(.\w+)?[^.\W])/g;
  return email.match(emailRegex);
};
