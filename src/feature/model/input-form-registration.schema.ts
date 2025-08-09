import { IInputField } from "@/shared";
import { RegisterValidType } from "../auth/model";

export const InputFormRegistrationSchema: IInputField<RegisterValidType>[] = [
  {
    name: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    placeholder: "Enter your password",
  },
  {
    name: "username",
    placeholder: "Enter your username",
  }
];

