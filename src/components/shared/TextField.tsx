import * as React from "react";
import "@/assets/style/components/_text-field.scss";
import { TextFieldProps } from "@/types/components/TextField.ts";
import { IconLoader } from "@/components/shared/IconLoader.tsx";

export const TextField: React.FC<TextFieldProps> = ({
  model = "",
  prependIcon,
  appendIcon,
  name,
  placeholder,
  type,
  onInputHandler = () => {},
  onEnterHandler = () => {},
}) => {
  const handleEnterKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    onEnterHandler(event.currentTarget.value);
  };

  return (
    <div className="text-field">
      {prependIcon && <IconLoader name={prependIcon} className="text-field__prepend-icon" />}
      <input
        id={name}
        value={model}
        className="text-field__field"
        type={type}
        placeholder={placeholder}
        onInput={onInputHandler}
        onKeyUp={handleEnterKeyUp}
      />
      {appendIcon && <IconLoader name={appendIcon} className="text-field__append-icon" />}
    </div>
  );
};
