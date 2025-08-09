import { Path } from "react-hook-form";

export interface IInputField<T> {
  name: Path<T>;
  placeholder: string;
};
