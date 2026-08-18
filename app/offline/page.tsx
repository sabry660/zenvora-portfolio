'use client'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0c0a]">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-[#c8e6d9]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
        </div>
        
        <h1 className="font-brand text-3xl font-black text-white mb-4">
          You're Offline
        </h1>
        
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Some ZENVORA content may be unavailable until your connection is restored.
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center rounded-full bg-[#c8e6d9] px-8 py-3 text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
        >
          Try Again
        </button>
        
        <p className="mt-12 text-xs text-white/40">
          © 2026 Zenvora Technologies
        </p>
      </div>
    </div>
  )
}
