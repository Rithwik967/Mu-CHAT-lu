import { MessageCircle, Users, Zap } from 'lucide-react';

const ChatLogo = ({ size = "default" }) => {
  const sizeClasses = {
    small: "size-8",
    default: "size-12", 
    large: "size-16"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:from-primary/90 group-hover:to-primary/70 transition-all duration-300 shadow-lg`}>
      <div className="relative">
        <MessageCircle className={`${size === "small" ? "size-4" : size === "large" ? "size-8" : "size-6"} text-white`} />
        <div className="absolute -top-1 -right-1">
          <Zap className={`${size === "small" ? "size-2" : size === "large" ? "size-4" : "size-3"} text-yellow-300`} />
        </div>
      </div>
    </div>
  );
};

export default ChatLogo;
