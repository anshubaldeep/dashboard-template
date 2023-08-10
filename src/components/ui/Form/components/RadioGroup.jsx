import * as RadioGroup from "@radix-ui/react-radio-group";
import Label from "./Label";
import { cn } from "@/lib/utils";

const RadioGroupComp = ({
  className,
  options,
  optionClass,
  label,
  disabled = false,
  ...props
}) => (
  <>
    {label && <Label>{label}</Label>}
    <RadioGroup.Root
      className={cn(className)}
      defaultValue={null}
      aria-label="View density"
      disabled={disabled}
      {...props}
    >
      <div className="mt-3 space-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <RadioGroup.Item
              id={option.value}
              value={option.value}
              className={cn(
                "peer relative w-4 h-4 rounded-full",
                "border border-gray-700",
                "data-[state=checked]:bg-sky-500 data-[state=checked]:border-transparent",
                "data-[state=unchecked]:bg-white data-[state=unchecked]:border-gray-700",
                "focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800",
                optionClass
              )}
            >
              <RadioGroup.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </RadioGroup.Indicator>
            </RadioGroup.Item>
            <label
              htmlFor={option.value}
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </RadioGroup.Root>
  </>
);

RadioGroupComp.displayName = "RadioGroup";

export default RadioGroupComp;
