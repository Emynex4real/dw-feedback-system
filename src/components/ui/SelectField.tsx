import { forwardRef } from 'react';
import type { SelectHTMLAttributes } from 'react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly string[];
  placeholder?: string;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ options, placeholder = 'Select an option', className = '', ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`min-h-[44px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  },
);

SelectField.displayName = 'SelectField';
