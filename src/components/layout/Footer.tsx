
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Emergency Call Tracker. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
