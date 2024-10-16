import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanString(str: string) {
  const tempElement = document.createElement("div");

  tempElement.innerHTML = str;

  const decodedString = tempElement.textContent || tempElement.innerText || "";

  // Remove unwanted non-printable ASCII characters and keep common printable characters
  const cleanedString = decodedString.replace(/[^\x20-\x7E]/g, "");

  return cleanedString;
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
