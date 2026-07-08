import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 parallax">
          <img className="w-full h-full object-cover brightness-[0.8] contrast-110 saturate-[1.1]" data-alt="Panoramic view of Almora" src="/hero_new.png" alt="Hero Background"/>
          <div className="absolute inset-0 hero-gradient opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display-lg text-display-lg text-surface-bright mb-6 drop-shadow-lg">
            A Journey Northward.<br/>A Return to Self.
          </h1>
          <p className="font-body-lg text-body-lg text-surface-bright/90 mb-10 tracking-wide">
            Experience the quiet dignity of a mountain retreat in the heart of Almora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-DEFAULT font-label-md text-label-md tracking-widest uppercase hover:bg-primary-container transition-all shadow-lg">
              Book Your Stay
            </Link>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-surface-bright/10 backdrop-blur-md border border-surface-bright/30 text-surface-bright px-6 py-4 rounded-DEFAULT flex items-center gap-2 hover:bg-surface-bright/20 transition-all">
                <span className="material-symbols-outlined text-sm">call</span>
                <span className="font-label-md text-label-md">Call</span>
              </Link>
              <Link href="/contact" className="bg-surface-bright/10 backdrop-blur-md border border-surface-bright/30 text-surface-bright px-6 py-4 rounded-DEFAULT flex items-center gap-2 hover:bg-surface-bright/20 transition-all">
                <span className="material-symbols-outlined text-sm">chat</span>
                <span className="font-label-md text-label-md">WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-surface-bright text-4xl font-light">keyboard_double_arrow_down</span>
        </div>
      </section>
      
      <section className="py-[120px] bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 reveal">
            <div className="w-20 h-0.5 bg-primary mb-8"></div>
            <h2 className="font-headline-lg text-headline-lg text-tertiary mb-8">Welcome to Uttarayan The Homestay</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Uttarayan implies a northward journey or a transition to brightness and sunlight. We offer a blend of comfort, cultural warmth, and serenity. Situated on the outskirts of Almora, our homestay provides a tranquil escape from the hustle and bustle while keeping you perfectly connected to the city.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant italic border-l-4 border-surface-container-highest pl-6 py-2">
              "Here, the air is thinner but the spirit is fuller. Every sunrise is a meditation, every peak a silent teacher."
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 relative reveal" style={{transitionDelay: "200ms"}}>
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg shadow-xl">
              <img className="w-full h-full object-cover" data-alt="An elegant interior shot" src="/photos/IMG_5078.jpg" alt="Interior" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary-fixed rounded-lg -z-10 hidden md:block opacity-30"></div>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 reveal">
            <span className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase">Unique Selling Points</span>
            <h2 className="font-headline-lg text-headline-lg text-tertiary mt-2">The Best of Both Worlds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>landscape</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">City Proximity, Suburban Peace</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Situated on the outskirts of Almora, offering a tranquil escape while keeping you perfectly connected. Be in the city, yet entirely outside its chaotic core.</p>
            </div>
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30" style={{transitionDelay: "100ms"}}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>location_on</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">Prime Accessibility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Located just a convenient 10-minute walk from the historic Nanda Devi Temple, making cultural exploration and local markets effortlessly accessible.</p>
            </div>
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30" style={{transitionDelay: "200ms"}}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>restaurant</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">Gourmet Kumaoni Delicacies</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Indulge in authentic Pahadi cuisine with flavors like Bhatt ki Churkani and Aloo ke Gutke, tailored to a wholesome vegetarian palate.</p>
            </div>
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30" style={{transitionDelay: "300ms"}}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>park</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">Serene Himalayan Environment</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Enjoy a peaceful, pristine environment with crisp mountain air, perfect for creative minds, families, or anyone looking to unwind.</p>
            </div>
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30" style={{transitionDelay: "400ms"}}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>bed</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">Comfortable Stay</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Spacious suites with premium linens, artisanal decor, and modern amenities for a cozy retreat, perfect for a workcation.</p>
            </div>
            <div className="bg-surface-bright p-10 reveal hover:shadow-md transition-all border border-outline-variant/30" style={{transitionDelay: "500ms"}}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{fontVariationSettings: '"wght" 200'}}>groups</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-3">Perfect for Everyone</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Whether you are a family looking for a retreat, a solo traveler seeking peace, or a remote worker, Uttarayan welcomes you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-xl">
              <span className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase">Private Sanctuaries</span>
              <h2 className="font-headline-lg text-headline-lg text-tertiary mt-2">Suites for Every Seeker</h2>
            </div>
            <Link href="/accommodation" className="hidden md:block text-primary border-b border-primary pb-1 font-label-md text-label-md hover:text-primary-container transition-colors">
              View All Accommodations
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            <div className="group cursor-pointer reveal">
              <div className="overflow-hidden mb-6 relative">
                <img className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" src="/photos/IMG_5083.jpg" alt="First Floor Suite"/>
                <div className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur px-4 py-1 font-label-md text-label-md text-primary">First Floor</div>
              </div>
              <h3 className="font-headline-md text-headline-md text-tertiary mb-2">The Celestial Suite</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">A sprawling suite with a private wooden balcony offering 180-degree mountain views and a cozy fireplace corner.</p>
              <button className="border border-tertiary px-6 py-2 font-label-md text-label-md hover:bg-tertiary hover:text-on-primary transition-all">View Details</button>
            </div>
            <div className="group cursor-pointer reveal" style={{transitionDelay: "200ms"}}>
              <div className="overflow-hidden mb-6 relative">
                <img className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" src="/photos/IMG_5084.jpg" alt="Second Floor Suite"/>
                <div className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur px-4 py-1 font-label-md text-label-md text-primary">Second Floor</div>
              </div>
              <h3 className="font-headline-md text-headline-md text-tertiary mb-2">The Valley Vista Room</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Intimate and quiet, this room is perfect for solo travelers or couples looking for a focused, meditative space.</p>
              <button className="border border-tertiary px-6 py-2 font-label-md text-label-md hover:bg-tertiary hover:text-on-primary transition-all">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tertiary py-[120px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="relative reveal order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img className="w-full aspect-square object-cover rounded-sm" src="/photos/IMG_5085.jpg" alt="Food 1"/>
              <img className="w-full aspect-square object-cover mt-8 rounded-sm" src="/photos/IMG_5087.jpg" alt="Food 2"/>
            </div>
          </div>
          <div className="reveal order-1 lg:order-2 lg:pl-16">
            <span className="font-label-md text-label-md text-primary-fixed tracking-[0.2em] uppercase">Culinary Soul</span>
            <h2 className="font-headline-lg text-headline-lg text-surface-bright mt-4 mb-8">Traditional Kumaoni Flavors</h2>
            <p className="font-body-lg text-body-lg text-surface-bright/80 mb-8 leading-relaxed">
              Our kitchen follows a strict vegetarian and sattvic philosophy. We celebrate the rich culinary heritage of Kumaon, using ingredients sourced directly from local farmers and our own kitchen garden.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4 text-surface-bright/90">
                <span className="material-symbols-outlined text-secondary-fixed">done_all</span>
                <span className="font-body-md text-body-md">Sattvic & Vegetarian</span>
              </li>
              <li className="flex items-center gap-4 text-surface-bright/90">
                <span className="material-symbols-outlined text-secondary-fixed">done_all</span>
                <span className="font-body-md text-body-md">Organic Farm-to-Table Experience</span>
              </li>
              <li className="flex items-center gap-4 text-surface-bright/90">
                <span className="material-symbols-outlined text-secondary-fixed">done_all</span>
                <span className="font-body-md text-body-md">Traditional Brass Plate Service</span>
              </li>
            </ul>
            <button className="bg-primary-fixed text-on-primary-fixed-variant px-8 py-3 font-label-md text-label-md hover:bg-surface-bright transition-all">Explore Menu</button>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-bright">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg text-tertiary">Local Experiences Around Uttarayan</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">Discover the ancient spiritual legacy and natural wonders that surround our homestay.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-[3/4] overflow-hidden reveal">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/places/kasar.png" alt="Kasar Devi"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-title-lg text-title-lg mb-1">Kasar Devi</h4>
                <p className="font-label-md text-xs opacity-80 uppercase tracking-widest">3 KM Away</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden reveal" style={{transitionDelay: "100ms"}}>
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/places/nanda.png" alt="Nanda Devi Temple"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-title-lg text-title-lg mb-1">Nanda Devi Temple</h4>
                <p className="font-label-md text-xs opacity-80 uppercase tracking-widest">5 KM Away</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden reveal" style={{transitionDelay: "200ms"}}>
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/places/binsar.png" alt="Binsar Forest"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-title-lg text-title-lg mb-1">Binsar Forest</h4>
                <p className="font-label-md text-xs opacity-80 uppercase tracking-widest">15 KM Away</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden reveal" style={{transitionDelay: "300ms"}}>
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/places/jageshwar.png" alt="Jageshwar Dham"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-title-lg text-title-lg mb-1">Jageshwar Dham</h4>
                <p className="font-label-md text-xs opacity-80 uppercase tracking-widest">35 KM Away</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-container">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter text-center reveal">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">wifi</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">High Speed Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">local_parking</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">Secure Parking</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">balcony</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">Private Balcony</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">fireplace</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">Living Fireplace</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">potted_plant</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">Zen Garden</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-primary">library_books</span>
              <span className="font-label-md text-label-md text-tertiary uppercase">Curated Library</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-bright">
        <div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop text-center reveal">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
          <div className="relative">
            <p className="font-headline-md text-headline-md text-tertiary mb-10 italic leading-relaxed">
              "Uttarayan is not just a homestay; it's a profound experience. The silence of the mountains, the incredible Kumaoni food, and the warmth of the hosts made me feel at peace for the first time in years."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-outline-variant"></div>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Anjali Sharma, Travel Writer</span>
              <div className="w-12 h-0.5 bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-container-highest" id="booking">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-bright p-12 md:p-20 shadow-xl flex flex-col lg:flex-row gap-12 items-center reveal">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-headline-lg text-headline-lg text-tertiary mb-6">Begin Your Journey Northward</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-0">Rooms are filling fast for the coming season. Reserve your mountain sanctuary today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-DEFAULT font-label-md text-label-md tracking-widest uppercase hover:bg-primary-container transition-all text-center">Book Online</Link>
              <Link href="/contact" className="border border-primary text-primary px-10 py-4 rounded-DEFAULT font-label-md text-label-md tracking-widest uppercase hover:bg-primary/5 transition-all text-center">Enquire on WhatsApp</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
