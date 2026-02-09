import { Loader2 } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

const variantClasses = {
  primary:
    'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500 disabled:bg-orange-300',
  secondary:
    'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  ghost:
    'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
};

export function Button({
  variant = 'primary',
  isLoading = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
}
