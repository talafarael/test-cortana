import { IInputField } from "@/shared";
import { RegisterValidType } from "../auth/model";

export const InputFormRegistrationSchema: IInputField<RegisterValidType>[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    placeholderUa: "Введіть вашу електронну пошту"
  },
  {
    name: "password",
    placeholder: "Enter your password",
    placeholderUa: "Введіть ваш пароль"
  },
  {
    name: "username",
    placeholder: "Enter your username",
    placeholderUa: "Введіть ваше ім’я користувача"
  }
];

