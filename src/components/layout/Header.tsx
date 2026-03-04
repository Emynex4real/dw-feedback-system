import { GraduationCap } from 'lucide-react';

// Updated
export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 px-6 py-4 shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/20">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            Tech Academy
          </h1>
          <p className="text-xs font-medium text-orange-600">
            Student Feedback sPortal
          </p>
        </div>
      </div>
      
      <div className="hidden md:block">
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 border border-orange-100">
          Secure Form
        </span>
      </div>
    </header>
  );
}