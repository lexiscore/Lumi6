
export default function Logo({ className = "w-16 h-16", textClassName = "text-2xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`relative bg-white rounded-xl p-2 shadow-sm border border-gray-200 group-hover:shadow-md transition-all duration-200 ${className}`}>
        <img 
          src="/lovable-uploads/0e185da3-59ad-4a3f-b64a-acd8f48992c8.png" 
          alt="Lumi6 Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-semibold text-gray-800 font-display ${textClassName}`}>
          Lumi6
        </span>
        <span className="text-xs text-gray-500 font-body uppercase tracking-wide">
          Assessment Platform
        </span>
      </div>
    </div>
  );
}
