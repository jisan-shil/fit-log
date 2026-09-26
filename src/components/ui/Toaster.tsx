"use client";
 
import { CheckCircle2, X } from "lucide-react";
import { useToast } from "@/hooks/useToast";
 
export default function Toaster() {
  const { toasts, dismissToast } = useToast();
 
  if (toasts.length === 0) return null;
 
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#14161d] px-4 py-3 text-sm text-white shadow-lg shadow-black/40"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ccff00]" />
          <span>{toast.message}</span>
          <button
            onClick={() => dismissToast(toast.id)}
            className="ml-2 text-white/40 transition-colors hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}