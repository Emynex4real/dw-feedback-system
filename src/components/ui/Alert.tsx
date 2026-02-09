import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface AlertProps {
  variant: 'error' | 'success' | 'info';
  message?: string | null;
}

const config = {
  error: {
    icon: AlertCircle,
    bg: 'bg-red-50 border-red-200',
    text: 'text-red-800',
    iconColor: 'text-red-500',
  },
  success: {
    icon: CheckCircle2,
    bg: 'bg-green-50 border-green-200',
    text: 'text-green-800',
    iconColor: 'text-green-500',
  },
  info: {
    icon: Info,
    bg: 'bg-blue-50 border-blue-200',
    text: 'text-blue-800',
    iconColor: 'text-blue-500',
  },
};

export function Alert({ variant, message }: AlertProps) {
  if (!message) return null;

  const { icon: Icon, bg, text, iconColor } = config[variant];

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-3 ${bg}`}
      role="alert"
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
      <p className={`text-sm ${text}`}>{message}</p>
    </div>
  );
}
