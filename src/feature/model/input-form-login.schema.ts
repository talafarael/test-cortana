import { IInputField } from "@/shared";
import { LoginValidType } from "../auth/model";

export const InputFormLoginSchema: IInputField<LoginValidType>[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    placeholderUa: "Введіть вашу електронну пошту"
  },
  {
    name: "password",
    placeholder: "Enter your password",
    placeholderUa: "Введіть ваш пароль"
  }
];

