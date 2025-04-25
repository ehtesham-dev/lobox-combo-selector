import { ChangeEvent } from "react";

type ValidFieldTypes = "text" | "number" | "password";
type ValidModelTypes = string | number;

export interface TextFieldProps {
  type?: ValidFieldTypes;
  name: string;
  model?: ValidModelTypes;
  placeholder?: string;
  prependIcon?: string;
  appendIcon?: string;
  isDisabled?: boolean;

  onInputHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterHandler?: (value: ValidModelTypes) => void;
}
