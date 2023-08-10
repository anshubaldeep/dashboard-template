import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import { Children } from "react";

const SelectDropdown = ({
  controlled,
  value,
  onValueChange,
  disabled = false,
  placeholder = "Select an option",
  options = [],
  className = {
    wrapper: "",
    trigger: "",
    contentWrapper: "",
    item: "",
  },
}) => {
  return (
    <Select
      className={className.wrapper}
      {...(controlled && { value, onValueChange })}
      disabled={disabled}
    >
      <SelectTrigger className={className.trigger}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={className.contentWrapper}>
        {Children.toArray(
          options.map((option) => (
            <SelectItem className={className.item} value={option.value}>
              {option.label}
            </SelectItem>
          ))
        )}
      </SelectContent>
    </Select>
  );
};

SelectDropdown.displayName = "SelectDropdown";

export default SelectDropdown;
