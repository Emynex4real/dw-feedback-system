import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  currentLength?: number;
  maxLength?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ currentLength = 0, maxLength = 1000, className = '', ...props }, ref) => {
    const percentage = maxLength > 0 ? (currentLength / maxLength) * 100 : 0;
    const counterColor =
      percentage >= 95
        ? 'text-red-600'
        : percentage >= 80
          ? 'text-amber-600'
          : 'text-gray-400';

    return (
      <div>
        <textarea
          ref={ref}
          maxLength={maxLength}
          rows={4}
          className={`w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-base text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-100 ${className}`}
          {...props}
        />
        <div className={`mt-1 text-right text-xs ${counterColor}`}>
          {currentLength}/{maxLength}
        </div>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
