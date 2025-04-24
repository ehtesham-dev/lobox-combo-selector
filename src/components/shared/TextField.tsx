import * as React from "react";
import "@/assets/style/components/_text-field.scss";
import { TextFieldProps } from "@/types/components/TextField.ts";
import { IconLoader } from "@/components/shared/IconLoader.tsx";

export const TextField: React.FC<TextFieldProps> = ({
  prependIcon,
  appendIcon,
  name,
  placeholder,
  type,
  onInputHandler,
}) => {
  return (
    <div className="text-field">
      {prependIcon && (
        <IconLoader name={prependIcon} className="text-field__prepend-icon">
          {prependIcon}
        </IconLoader>
      )}
      <input
        id={name}
        className="text-field__field"
        type={type}
        placeholder={placeholder}
        onInput={onInputHandler}
      />
      {appendIcon && (
        <IconLoader name={appendIcon} className="text-field__append-icon">
          {appendIcon}
        </IconLoader>
      )}
    </div>
  );
};
