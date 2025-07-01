
export default function Logo({ className = "w-20 h-20", textClassName = "text-3xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className={`relative bg-white rounded-2xl p-3 shadow-lg border border-slate-200/50 group-hover:shadow-xl transition-all duration-300 ${className}`}>
        <img 
          src="/lovable-uploads/0e185da3-59ad-4a3f-b64a-acd8f48992c8.png" 
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
