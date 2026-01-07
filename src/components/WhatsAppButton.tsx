import whatsappLogo from "@/assets/whatsapp-logo.png";

const WhatsAppButton = () => {
  const phoneNumber = "917013570447";
  const message = "Hello Shiva Kumar, I want to know more about your Agri Clinic.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform duration-300 drop-shadow-lg">
        <img 
          src={whatsappLogo} 
          alt="WhatsApp"
          className="w-14 h-14 rounded-full"
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-border">
        <span className="text-sm font-medium">Chat with us!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-card" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
