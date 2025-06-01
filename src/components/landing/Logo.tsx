
export default function Logo({ className = "w-12 h-12", textClassName = "text-2xl" }: { className?: string; textClassName?: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`relative bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-sm border border-gray-200/50 group-hover:shadow-md transition-all duration-300 ${className}`}>
        <img 
          src="/lovable-uploads/6cc03eb9-5444-4785-9318-f149513e03c4.png" 
          alt="Lumi6 Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-gray-800 ${textClassName}`}>
          Lumi6
        </span>
      </div>
    </div>
  );
}
