
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <span className="text-xl font-bold text-itx-blue">ITX</span>
          </div>
          
          <p className="text-sm text-itx-gray mb-2">
            itxuy.com
          </p>
          
          <p className="text-sm text-itx-gray">
            Copyright © {currentYear} ITX - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
