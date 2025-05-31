
export default function Logo({ className = "w-10 h-10", textClassName = "text-2xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-100/50 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative">
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Tech-inspired geometric logo */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            
            {/* Main hexagonal shape */}
            <polygon 
              points="16,2 26,8 26,20 16,26 6,20 6,8" 
              fill="url(#logoGradient)" 
              className="drop-shadow-sm"
            />
            
            {/* Inner circuit pattern */}
            <circle cx="16" cy="12" r="2" fill="white" opacity="0.9" />
            <circle cx="12" cy="18" r="1.5" fill="white" opacity="0.7" />
            <circle cx="20" cy="18" r="1.5" fill="white" opacity="0.7" />
            
            {/* Connection lines */}
            <path 
              d="M16 14 L12 18 M16 14 L20 18 M12 18 L20 18" 
              stroke="white" 
              strokeWidth="1.5" 
              opacity="0.6"
              strokeLinecap="round"
            />
            
            {/* Top accent */}
            <rect x="14" y="6" width="4" height="2" rx="1" fill="white" opacity="0.8" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent ${textClassName}`}>
          Lumi6
        </span>
      </div>
    </div>
  );
}
