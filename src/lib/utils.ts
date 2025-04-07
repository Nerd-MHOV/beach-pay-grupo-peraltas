import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cpfValidator(value: string) {
  // Validação simples de CPF (não é a validação completa)
  const digits = value.split("").map(Number);
  const sum = digits.slice(0, 9).reduce((acc, digit, index) => {
    return acc + digit * (10 - index);
  }, 0);
  const remainder = sum % 11;
  const checkDigit = remainder < 2 ? 0 : 11 - remainder;
  if (checkDigit !== digits[9]) {
    return false;
  }
  const sum2 = digits.slice(0, 10).reduce((acc, digit, index) => {
    return acc + digit * (11 - index);
  }, 0);
  const remainder2 = sum2 % 11;
  const checkDigit2 = remainder2 < 2 ? 0 : 11 - remainder2;
  return checkDigit2 === digits[10];
}