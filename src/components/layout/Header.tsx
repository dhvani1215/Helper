
import { Bell, Phone, Book, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Bell className="w-6 h-6 text-emergency transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emergency rounded-full animate-ping opacity-75"></span>
          </div>
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-emergency">Helper</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/tracker">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  <Phone className="w-4 h-4 mr-1" />
                  Number Tracker
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/laws">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  <Book className="w-4 h-4 mr-1" />
                  Indian Laws
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/documents">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  <FileText className="w-4 h-4 mr-1" />
                  Govt Documents
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/history">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  Call History
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} transition-all duration-200 hover:bg-gray-100`}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
