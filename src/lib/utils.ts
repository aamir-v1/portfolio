import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

console.log("dummy push");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
