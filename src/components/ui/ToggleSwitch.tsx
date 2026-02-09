interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function ToggleSwitch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className = '',
}: ToggleSwitchProps) {
  return (
    <label
      className={`flex min-h-[44px] cursor-pointer items-center gap-3 ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div
          className={`h-6 w-11 rounded-full transition-colors ${
            checked ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        />
        <div
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      <div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
      </div>
    </label>
  );
}
