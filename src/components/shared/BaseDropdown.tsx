import { ExpansionContainer } from "@/components/shared/ExpansionContainer.tsx";
import { useState } from "react";
import * as React from "react";
import { BaseDropdownProp } from "@/types/components/BaseDropdown.ts";
import "@/assets/style/components/_base-dropdown.scss";
import TickIcon from "@/assets/icons/tick-square.svg?react";

export const BaseDropdown: React.FC<BaseDropdownProp> = ({ children, placeholder = "See Items", items }) => {
  const [isDropDownVisible, setDropDownVisibility] = useState(true);

  const ToggleDropDownVisibility = () => {
    setDropDownVisibility((value) => !value);
  };

  const isActiveItem = (item) => (item.isActive ? "list__item--active" : "");

  return (
    <div className="base-dropdown">
      <div className="base-dropdown__activator" onClick={ToggleDropDownVisibility}>
        {children ?? <span>{placeholder}</span>}
      </div>
      <ExpansionContainer isExpand={isDropDownVisible}>
        <ul className="dropdown__list list">
          {items.map((item) => (
            <li className={`list__item ${isActiveItem(item)}`} key={item.value}>
              <span className="list__item-name">{item.label}</span>
              {isActiveItem(item) && <TickIcon className="list__item-icon" />}
            </li>
          ))}
        </ul>
      </ExpansionContainer>
    </div>
  );
};
