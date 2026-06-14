import { useEffect } from 'react';

function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const timeout = window.setTimeout(onClose, 4500);
    return () => window.clearTimeout(timeout);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-[#0d0825]/96 backdrop-blur-xl border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(93,28,167,0.2)] max-w-[380px] w-[calc(100%-48px)] animate-fade-up"
      role="status"
      aria-live="polite"
    >
      {/* Check icon */}
      <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-orange-500/[0.12] border border-orange-500/25">
        <svg
          className="w-4 h-4 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <p className="flex-1 text-sm text-white/85 font-medium leading-snug">{message}</p>

      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar notificación"
        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-white/30 hover:text-white hover:bg-white/[0.07] transition-all duration-150"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default Toast;
