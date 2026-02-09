import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PageContainer } from '@/components/layout/PageContainer';

interface ErrorScreenProps {
  message: string;
  onRetry: () => void;
  onStartOver: () => void;
}

export function ErrorScreen({ message, onRetry, onStartOver }: ErrorScreenProps) {
  return (
    <PageContainer>
      {/* Centered Container for the Glass Card */}
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        
        {/* Glass Card */}
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          
          {/* Decorative Top Line (Red to indicate error) */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-400 to-orange-500" />

          <div className="flex flex-col items-center text-center">
            {/* Animated/Glowing Error Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500 ring-8 ring-red-50/50 shadow-inner">
              <AlertTriangle className="h-10 w-10" strokeWidth={1.5} />
            </div>

            <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">
              Submission Failed
            </h1>
            
            <div className="mb-8 rounded-lg bg-red-50/50 border border-red-100 p-4 w-full">
              <p className="text-sm font-medium text-red-800">
                {message || "An unexpected error occurred while processing your request."}
              </p>
            </div>

            <div className="flex w-full flex-col gap-4">
              <Button 
                onClick={onRetry}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 border-none transition-all duration-300 py-6"
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Try Again
              </Button>
              
              <Button 
                variant="secondary" 
                onClick={onStartOver}
                className="w-full bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 hover:border-gray-300 py-6 transition-all"
              >
                <Home className="mr-2 h-4 w-4" /> Start Over
              </Button>
            </div>
            
            <p className="mt-6 text-xs text-gray-400">
              If the problem persists, please contact support.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}