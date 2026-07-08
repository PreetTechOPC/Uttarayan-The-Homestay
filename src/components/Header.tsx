"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="bg-surface-bright dark:bg-surface-dim shadow-sm dark:shadow-none w-full sticky top-0 z-50 border-b border-surface-container-highest dark:border-outline-variant">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-unit h-20">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img src="/logo.jpg" alt="Ottarayan Logo" className="h-12 w-auto md:h-16 object-contain rounded-xl drop-shadow-sm" />
          <div className="font-headline-md md:font-headline-lg text-primary dark:text-primary-fixed-dim tracking-tight hidden sm:block">
            Uttarayan The Homestay
          </div>
        </Link>
        
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-label-md text-label-md transition-colors ${
                  isActive 
                    ? "text-primary dark:text-primary-fixed-dim border-b-2 border-primary font-bold pb-1" 
                    : "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary-container transition-all scale-95 hover:scale-100 hover:shadow-lg text-center">
            Book Now
          </Link>
          <button 
            className="lg:hidden text-primary p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-surface-bright dark:bg-surface-dim z-40 flex flex-col items-center pt-12 space-y-8 animate-fadeIn border-t border-outline-variant/30">
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-headline-md transition-colors ${
                  isActive 
                    ? "text-primary dark:text-primary-fixed-dim font-bold" 
                    : "text-on-surface-variant dark:text-surface-variant"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-primary text-on-primary px-8 py-3 rounded-DEFAULT font-label-md text-label-md shadow-lg w-3/4 max-w-xs mx-auto text-center block">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
