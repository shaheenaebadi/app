import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Employees/Members', href: '/employee' },
    { label: 'Forms', href: '/forms' },
    { label: 'Projects/Budgets', href: '/projects' },
    { label: 'Notice', href: '/maintenance' },
    { label: 'Contacts', href: '/maintenance' },
  ];

  const dropdownItems = [
    { label: 'Tenders', href: '/maintenance' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'News and Updates', href: '/maintenance' },
  ];

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    // Add your language switching logic here
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <img
                src="/api/placeholder/48/48"
                alt="Kaliakair Municipality Logo"
                className="h-12 w-12"
              />
              <h1 className="ml-3 text-xl font-bold hidden md:block">
                Kaliakair Municipality
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-gray-900">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {dropdownItems.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <Link href={item.href} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Selector */}
            <div className="border-l pl-6 flex items-center space-x-2">
              <button
                onClick={() => toggleLanguage('bn')}
                className={`${
                  language === 'bn' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                বাংলা
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => toggleLanguage('en')}
                className={`${
                  language === 'en' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {dropdownItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t flex space-x-4">
                <button
                  onClick={() => toggleLanguage('bn')}
                  className={`${
                    language === 'bn' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  বাংলা
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`${
                    language === 'en' ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;