import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-variant w-full mt-auto border-t border-outline-variant dark:border-outline">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-gutter max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-[80px]">
        <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.jpg" alt="Uttarayan Logo" className="h-14 w-auto object-contain rounded-xl drop-shadow-sm" />
            <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">Uttarayan The Homestay</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80 mb-6">
            A soulful escape into nature, culture, and comfort in the heart of Almora. Rooted in the Himalayas.
          </p>
          <Link href="https://share.google/te6Pw51f69yD3pQRc" target="_blank" className="font-label-md text-label-md text-tertiary hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">location_on</span> Dharanaula, Almora, Uttarakhand 263601
          </Link>
        </div>
        
        <div>
          <h4 className="font-label-md text-label-md font-bold text-tertiary mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 font-label-md text-label-md text-on-surface-variant">
            <li><Link href="/about" className="hover:text-primary transition-colors underline-offset-4">Our Story</Link></li>
            <li><Link href="/accommodation" className="hover:text-primary transition-colors underline-offset-4">Accommodation</Link></li>
            <li><Link href="/experiences" className="hover:text-primary transition-colors underline-offset-4">Experiences</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors underline-offset-4">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors underline-offset-4">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-md text-label-md font-bold text-tertiary mb-6 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3 font-label-md text-label-md text-on-surface-variant">
            <li><Link href="/policy" className="hover:text-primary transition-colors underline underline-offset-4">Privacy Policy</Link></li>
            <li><Link href="/policy" className="hover:text-primary transition-colors underline underline-offset-4">Terms of Service</Link></li>
            <li><Link href="/policy" className="hover:text-primary transition-colors underline underline-offset-4">Cancellation Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-md text-label-md font-bold text-tertiary mb-6 uppercase tracking-wider">Follow Us</h4>
          <ul className="space-y-3 font-label-md text-label-md text-on-surface-variant">
            <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
            </Link></li>
            <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook
            </Link></li>
            <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">location_on</span> Google Business
            </Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/30 text-center flex justify-between items-center flex-wrap gap-4">
        <p className="font-label-md text-label-md text-on-surface-variant opacity-70">© 2026 Uttarayan The Homestay.</p>
        <div className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
          <span>Developed by</span>
          <a href="https://preettech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-tertiary transition-colors font-bold underline underline-offset-2">Preet Tech</a>
        </div>
      </div>
    </footer>
  );
}
