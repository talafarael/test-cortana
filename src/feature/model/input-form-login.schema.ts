import { IInputField } from "@/shared";
import { LoginValidType } from "../auth/model";

export const InputFormLoginSchema: IInputField<LoginValidType>[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address"
      }
    }
  },
  {
    name: "password",
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters"
      }
    }
  }
];

