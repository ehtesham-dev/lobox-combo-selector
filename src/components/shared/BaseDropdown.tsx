import { ExpansionContainer } from "@/components/shared/ExpansionContainer.tsx";
import { useState } from "react";
import * as React from "react";
import { BaseDropdownProp } from "@/types/components/BaseDropdown.ts";
import "@/assets/style/components/_base-dropdown.scss";

export const BaseDropdown: React.FC<BaseDropdownProp> = ({ children, placeholder = "See Items", items }) => {
  const [isDropDownVisible, setDropDownVisibility] = useState(true);

  const ToggleDropDownVisibility = () => {
    setDropDownVisibility((value) => !value);
  };

  const isSelectedItem = (item) => (item.isActive ? "list__item--active" : "");

  return (
    <div className="base-dropdown">
      <div className="base-dropdown__activator" onClick={ToggleDropDownVisibility}>
        {children ?? <span>{placeholder}</span>}
      </div>
      <ExpansionContainer isExpand={isDropDownVisible}>
        <ul className="dropdown__list list">
          {items.map((item) => (
            <li className={`list__item ${isSelectedItem(item)}`} key={item.value}>
              {item.label}
            </li>
          ))}
        </ul>
      </ExpansionContainer>
    </div>
  );
};
