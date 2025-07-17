
export default function Logo({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <div className="flex items-center group">
      <div className={`relative ${className}`}>
        <img 
          src="/lumi6_logo_final.png" 
          alt="Lumi6 Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
