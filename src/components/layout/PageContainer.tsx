import type { ReactNode } from 'react';

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F2F4F7] px-4 py-8 font-['Inter'] antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Abstract Background Blur for subtle depth */}
      <div className="fixed top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orange-200/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-200/10 blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-lg z-10">
        {children}
      </div>
    </div>
  );
}