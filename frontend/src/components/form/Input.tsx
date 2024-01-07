import { InputHTMLAttributes, forwardRef } from "react";

type Props = {
  label: string;
  id: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, label, id, ...rest }, ref) => (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        {...rest}
      />
    </div>
  )
);
