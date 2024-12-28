import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import Image from "next/image";

interface IBaseInputProps {
  icon?: string;
  error?: string | boolean;
  bgColor?: string;
  textColor?: string;
  placeholderColor?: string;
}

// Interface para Input
interface IInputProps
  extends IBaseInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  isTextarea?: false;
}

// Interface para Textarea
interface ITextareaProps
  extends IBaseInputProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  isTextarea: true;
}

type InputOrTextareaProps = IInputProps | ITextareaProps;

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  InputOrTextareaProps
> = (
  {
    isTextarea = false,
    icon,
    error,
    bgColor,
    textColor,
    placeholderColor,
    ...rest
  },
  ref
) => {
  const divInputClasses = `
    flex
    w-full
    rounded-lg
    ${icon ? "pl-4" : ""}
    ${bgColor ? bgColor : "bg-blue-900"}
    ${error ? "border border-red-500" : ""}
  `;

  const inputClasses = `
    w-full
    px-3
    py-2
    text-xs
    placeholder:${error ? "text-red-500" : placeholderColor || "text-white"}
    bg-transparent
    outline-none
    ${textColor || "text-white"}
  `;

  return (
    <div className="w-full">
      <div className={divInputClasses}>
        {icon && <Image src={icon} alt="icon" width={24} height={22} />}
        {isTextarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={`${inputClasses} h-10`}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
      {error && <div className="text-red-500 px-2 pt-1 text-xs">{error}</div>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
