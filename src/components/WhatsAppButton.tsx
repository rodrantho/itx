
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Updated WhatsApp number
    const whatsappNumber = '+59897207084';
    const message = 'Hola ITX, me interesa conocer más sobre sus servicios.';
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-5 right-5 bg-gradient-to-r from-[#25D366] to-[#1EA756] text-white rounded-full p-4 shadow-lg shadow-green-900/30 z-50 transition-all duration-300 border border-green-500/50 ${
        isVisible 
          ? 'opacity-100 translate-y-0 hover:scale-110' 
          : 'opacity-0 translate-y-10'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M20.4023 3.5977C18.1598 1.3551 15.1721 0.0431 11.9911 0.0396C5.4341 0.0396 0.0944 5.3781 0.0909 11.9351C0.0899 14.0369 0.6306 16.0863 1.6648 17.8836L0 24L6.2318 22.3658C7.9651 23.3064 9.9576 23.7993 11.9849 23.8H11.9911C18.5469 23.8 23.8878 18.4603 23.8913 11.9045C23.8948 8.7271 22.6441 5.7397 20.4023 3.5977ZM11.9911 21.7893H11.9861C10.2028 21.7882 8.4543 21.3106 6.9278 20.4189L6.5609 20.1967L2.8383 21.1742L3.8321 17.5444L3.5881 17.1639C2.5982 15.5851 2.0792 13.7829 2.0804 11.9363C2.0834 6.4899 6.5446 2.0299 11.9961 2.0299C14.6716 2.0329 17.1796 3.1191 19.0421 4.9828C20.9046 6.8465 21.9883 9.3556 21.9858 12.0311C21.9828 17.4786 17.5216 21.7893 11.9911 21.7893ZM17.4208 14.4471C17.1224 14.2976 15.656 13.5788 15.3794 13.4795C15.1039 13.3789 14.9008 13.3293 14.6964 13.6277C14.4931 13.9273 13.9233 14.5954 13.7426 14.7986C13.5618 15.003 13.3823 15.0278 13.0827 14.8782C11.3578 14.0152 10.2006 13.3379 9.0398 11.3857C8.7378 10.8813 9.32621 10.9178 9.87241 9.8269C9.97181 9.6239 9.9218 9.4479 9.8477 9.2984C9.77361 9.1488 9.19921 7.6824 8.94601 7.0823C8.6988 6.4975 8.44921 6.5853 8.25921 6.5732C8.0784 6.5622 7.87531 6.5622 7.67101 6.5622C7.4667 6.5622 7.14051 6.6363 6.86501 6.9348C6.58951 7.2344 5.81811 7.9532 5.81811 9.4196C5.81811 10.8861 6.8902 12.3037 7.0392 12.508C7.1906 12.7112 9.18641 15.8197 12.2806 17.0979C14.3267 17.9536 15.1522 17.9989 16.1957 17.8321C16.8274 17.7306 18.0191 17.102 18.2735 16.4013C18.5267 15.7006 18.5267 15.1006 18.4514 14.9986C18.3773 14.8915 18.1742 14.8165 17.8746 14.6669L17.4208 14.4471Z" 
          fill="white"
        />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
