import { Building2, Menu, Phone, MessageSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            {/* Bank logo */}
            <div className="bg-bank-primary text-white p-3 rounded-lg">
              <Building2 className="h-6 w-6" data-testid="logo-icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-bank-primary" data-testid="text-bank-name">
                SecureBank
              </h1>
              <p className="text-sm text-bank-secondary" data-testid="text-bank-tagline">
                Financial Calculator
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-bank-secondary hover:text-bank-primary transition-colors"
              data-testid="link-home"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-bank-secondary hover:text-bank-primary transition-colors"
              data-testid="link-services"
            >
              Services
            </a>
            <a 
              href="#" 
              className="text-bank-secondary hover:text-bank-primary transition-colors"
              data-testid="link-calculator"
            >
              Calculator
            </a>
            <a 
              href="#" 
              className="text-bank-secondary hover:text-bank-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden text-bank-secondary" data-testid="button-mobile-menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
