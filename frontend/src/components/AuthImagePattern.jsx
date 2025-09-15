const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 transition-all duration-1000 ${
                i % 2 === 0 
                  ? "animate-pulse hover:animate-bounce" 
                  : "hover:animate-pulse"
              } hover:bg-primary/20 hover:scale-105`}
              style={{
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 animate-fade-in">{title}</h2>
        <p className="text-base-content/60 animate-fade-in" style={{animationDelay: '200ms'}}>{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;