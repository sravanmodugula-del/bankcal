import { 
  Info, 
  Check, 
  Calculator, 
  TrendingUp, 
  Home as HomeIcon, 
  PiggyBank, 
  Percent,
  Headphones,
  Phone,
  MessageSquare,
  Building2
} from "lucide-react";
import Header from "../components/header";
import CalculatorComponent from "../components/calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-roboto">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Section */}
          <CalculatorComponent />

          {/* Information Section */}
          <div className="space-y-8">
            {/* Usage Instructions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Info className="text-bank-primary text-xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900" data-testid="text-usage-title">
                  How to Use
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start" data-testid="text-usage-item-1">
                  <Check className="text-bank-accent mr-2 mt-1 text-sm flex-shrink-0" />
                  <span>Click number buttons or use your keyboard to input values</span>
                </li>
                <li className="flex items-start" data-testid="text-usage-item-2">
                  <Check className="text-bank-accent mr-2 mt-1 text-sm flex-shrink-0" />
                  <span>Use operation buttons (+, -, ×, ÷) for calculations</span>
                </li>
                <li className="flex items-start" data-testid="text-usage-item-3">
                  <Check className="text-bank-accent mr-2 mt-1 text-sm flex-shrink-0" />
                  <span>Press equals (=) or Enter key to see results</span>
                </li>
                <li className="flex items-start" data-testid="text-usage-item-4">
                  <Check className="text-bank-accent mr-2 mt-1 text-sm flex-shrink-0" />
                  <span>Use 'C' button to clear and start fresh</span>
                </li>
              </ul>
            </div>

            {/* Banking Services */}
            <div className="bg-bank-light rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calculator className="text-bank-primary text-xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-900" data-testid="text-services-title">
                  Financial Tools
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4" data-testid="card-investment-calculator">
                  <TrendingUp className="text-bank-primary text-2xl mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Investment Calculator</h4>
                  <p className="text-sm text-gray-600">Plan your investment returns</p>
                </div>
                <div className="bg-white rounded-lg p-4" data-testid="card-loan-calculator">
                  <HomeIcon className="text-bank-primary text-2xl mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Loan Calculator</h4>
                  <p className="text-sm text-gray-600">Calculate monthly payments</p>
                </div>
                <div className="bg-white rounded-lg p-4" data-testid="card-savings-planner">
                  <PiggyBank className="text-bank-primary text-2xl mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Savings Planner</h4>
                  <p className="text-sm text-gray-600">Track your savings goals</p>
                </div>
                <div className="bg-white rounded-lg p-4" data-testid="card-interest-calculator">
                  <Percent className="text-bank-primary text-2xl mb-2" />
                  <h4 className="font-medium text-gray-900 mb-1">Interest Calculator</h4>
                  <p className="text-sm text-gray-600">Compound interest calculations</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Headphones className="text-white text-xl mr-3" />
                <h3 className="text-xl font-semibold" data-testid="text-help-title">
                  Need Help?
                </h3>
              </div>
              <p className="text-gray-300 mb-4" data-testid="text-help-description">
                Our financial experts are available 24/7 to assist you with your calculations and banking needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="bg-bank-primary hover:bg-bank-dark px-6 py-2 rounded-lg transition-colors flex items-center justify-center"
                  data-testid="button-call-support"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </button>
                <button 
                  className="bg-transparent border border-gray-600 hover:border-gray-400 px-6 py-2 rounded-lg transition-colors flex items-center justify-center"
                  data-testid="button-live-chat"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-bank-primary text-white p-2 rounded">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold" data-testid="text-footer-brand">
                SecureBank
              </span>
            </div>
            <p className="text-gray-400 mb-4" data-testid="text-footer-description">
              Your trusted partner in financial calculations and banking services.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-privacy-policy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-terms-of-service"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-contact-us"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="hover:text-white transition-colors"
                data-testid="link-security"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
