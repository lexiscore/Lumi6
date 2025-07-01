
export default function Logo({ className = "w-20 h-20", textClassName = "text-3xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-gray-200/50 group-hover:shadow-xl transition-all duration-300 ${className}`}>
        <img 
          src="/lovable-uploads/0e185da3-59ad-4a3f-b64a-acd8f48992c8.png" 
          alt="Lumi6 Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-gray-800 font-display ${textClassName}`}>
          Lumi6
        </span>
        <span className="text-sm text-gray-600 font-body">
          EQ & Language Assessment
        </span>
      </div>
    </div>
  );
}
