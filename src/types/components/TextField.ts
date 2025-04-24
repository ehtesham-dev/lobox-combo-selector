import { ChangeEvent } from "react";

type ValidFieldTypes = "text" | "number" | "password";

export interface TextFieldProps {
  type?: ValidFieldTypes;
  name: string;
  placeholder?: string;
  prependIcon?: string;
  appendIcon?: string;
  isDisabled?: boolean;

  onInputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
