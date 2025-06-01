
export default function Logo({ className = "w-12 h-12", textClassName = "text-2xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-blue-200/30 backdrop-blur-sm ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EF4444" />
              </linearGradient>
              <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#F472B6" />
              </linearGradient>
            </defs>
            
            {/* Globe/World outline */}
            <circle 
              cx="20" 
              cy="18" 
              r="14" 
              stroke="url(#logoGradient)" 
              strokeWidth="2.5" 
              fill="none"
              className="drop-shadow-sm"
            />
            
            {/* Globe lines */}
            <path 
              d="M6 18 Q20 8 34 18 M6 18 Q20 28 34 18 M20 4 L20 32 M10 18 L30 18" 
              stroke="url(#logoGradient)" 
              strokeWidth="1.5" 
              fill="none"
              opacity="0.7"
            />
            
            {/* Book/Learning element at bottom */}
            <path 
              d="M12 28 Q20 24 28 28 L28 35 Q20 31 12 35 Z" 
              fill="url(#bookGradient)" 
              className="drop-shadow-sm"
            />
            
            {/* Book pages */}
            <path 
              d="M20 24 L20 31 M16 26 L24 26 M16 29 L24 29" 
              stroke="white" 
              strokeWidth="1" 
              opacity="0.9"
            />
            
            {/* Accent dots */}
            <circle cx="14" cy="12" r="1.5" fill="url(#logoGradient)" opacity="0.8" />
            <circle cx="26" cy="12" r="1.5" fill="url(#logoGradient)" opacity="0.8" />
            <circle cx="20" cy="8" r="1" fill="url(#logoGradient)" opacity="0.6" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${textClassName}`}>
          Lumi6
        </span>
      </div>
    </div>
  );
}
