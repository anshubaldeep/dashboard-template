import { Controller, useFieldArray } from "react-hook-form";
import Label from "../components/Label";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2 } from "lucide-react";
import { cloneElement } from "react";

const MultiInput = ({
  control,
  name,
  label,
  customComponent,
  showAddIcon = true,
  showDeleteIcon = true,
  fieldOptions,
  rhfProps,
  maxRows = null,
  appendVal = {},
  errors = {},
}) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name}>{label}</Label>
      <ul className="flex flex-col gap-1 max-h-80 overflow-auto">
        {fields.map((item, index) => (
          <div key={item.id} className="flex gap-1">
            <Controller
              key={item.id}
              name={`${name}[${index}]`}
              control={control}
              render={(props) => {
                return cloneElement(customComponent, {
                  index,
                  key: props.id,
                  rhfProps,
                  fieldName: name,
                  update,
                  errors,
                  ...props,
                  ...fieldOptions,
                  ...customComponent.props,
                });
              }}
            />
            {index > 0 && showDeleteIcon && (
              <Button
                variant="ghost"
                className="text-primary"
                onClick={() => remove(index)}
              >
                <Trash2 size={18} />
              </Button>
            )}
          </div>
        ))}
      </ul>
      {showAddIcon && (!maxRows || fields.length < maxRows) && (
        <Button
          variant="ghost"
          className="text-primary w-10 p-0 justify-start px-2"
          onClick={() => append(appendVal)}
        >
          <Plus size={18} />
        </Button>
      )}
    </div>
  );
};

export default MultiInput;
