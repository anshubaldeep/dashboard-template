import Input from "../components/Input";
import MultiInput from "./MultiInput";

const InputComp = ({
  placeholder,
  index,
  rhfProps,
  fieldOptions,
  fieldName,
}) => {
  return (
    <Input
      placeholder={placeholder}
      className="w-10/12"
      {...rhfProps.register(`${fieldName}[${index}]`, {
        ...fieldOptions,
      })}
    />
  );
};

const MultiTextInput = ({
  control,
  name,
  label,
  placeholder,
  fieldOptions,
  rhfProps,
  errors,
  maxRows = null,
}) => {
  return (
    <MultiInput
      appendVal=""
      control={control}
      rhfProps={rhfProps}
      errors={errors}
      name={name}
      label={label}
      fieldOptions={fieldOptions}
      maxRows={maxRows}
      customComponent={
        <InputComp placeholder={placeholder} fieldOptions={fieldOptions} />
      }
    />
  );
};

MultiTextInput.displayName = "MultiTextInput";

export default MultiTextInput;
