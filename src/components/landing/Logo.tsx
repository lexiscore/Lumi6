
export default function Logo({ className = "w-20 h-20", textClassName = "text-3xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 group">
      <div className={`relative ${className}`}>
        <img 
          src="/lumi6_logo_final.png" 
          alt="Lumi6 Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display ${textClassName}`}>
          Lumi6
        </span>
      </div>
    </div>
  );
}
