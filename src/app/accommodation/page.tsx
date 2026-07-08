import Link from "next/link";

export default function Accommodation() {
  return (
    <>
      <section className="relative bg-surface py-[120px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 space-y-6 z-10 reveal">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Sanctuary</span>
            <h1 className="font-display-lg text-display-lg text-tertiary">Wake Up to Nanda Devi</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Every window in our homestay is a frame for the majesty of the Himalayas. Experience the ethereal light of dawn touching the peaks of Nanda Devi from the comfort of your sanctuary.</p>
          </div>
          <div className="md:col-span-7 relative reveal" style={{transitionDelay: "200ms"}}>
            <div className="aspect-[4/3] overflow-hidden soft-elevation relative">
              <img className="w-full h-full object-cover brightness-[0.9] saturate-110 sepia-[0.1]" data-alt="A breathtaking view from a minimalist bedroom window" src="/photos/IMG_5089.jpg" alt="Mountain View" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-surface-container-highest opacity-50 -z-10"></div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-[100px]">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20 reveal">
            <h2 className="font-headline-lg text-headline-lg text-tertiary mb-4">Our Private Suites</h2>
            <div className="w-20 h-px bg-outline mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] mb-[120px] items-center">
            <div className="md:col-span-7 order-2 md:order-1 reveal">
              <div className="grid grid-cols-2 gap-4">
                <img className="w-full aspect-square object-cover" data-alt="Interior of the First Floor Suite" src="/photos/IMG_5090.jpg" alt="Suite Interior" />
                <img className="w-full aspect-square object-cover mt-8" data-alt="Kitchenette" src="/photos/IMG_5091.jpg" alt="Suite Kitchenette" />
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 space-y-6 reveal" style={{transitionDelay: "100ms"}}>
              <h3 className="font-headline-md text-headline-md text-primary">First Floor Suite</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Located on our lower level, this suite offers intimate proximity to our organic garden while maintaining an expansive view of the valley below.</p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">balcony</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Private Sunrise Balcony</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">kitchen</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Kitchenette</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">bed</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Premium Bedding</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">bathroom</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Modern Washroom</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[60px] items-center">
            <div className="md:col-span-5 space-y-6 reveal">
              <h3 className="font-headline-md text-headline-md text-primary">Second Floor Suite</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Our premium offering, situated at the highest point of the property. The vaulted ceilings and expansive glass panels offer an unobstructed 180-degree view of the Nanda Devi peaks.</p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">balcony</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Private Sunrise Balcony</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">kitchen</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Kitchenette</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">bed</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Premium Bedding</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">bathroom</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">Modern Washroom</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 reveal" style={{transitionDelay: "100ms"}}>
              <div className="relative">
                <img className="w-full h-[500px] object-cover soft-elevation" data-alt="Panoramic vista from Second Floor Suite" src="/photos/IMG_5092.jpg" alt="Second Floor Suite View" />
                <div className="absolute top-8 -right-8 w-1/2 h-2/3 border border-outline -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg text-tertiary mb-4">Space & Amenities</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Both suites feature identical premium amenities and layouts, offering independent living for couples, solo travelers, or groups booking both floors together.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-surface-container-low p-8 rounded-lg soft-elevation reveal border border-outline-variant/30">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: '"wght" 200'}}>kitchen</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-4">The Living Space & Kitchenette</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Each floor features a cozy, open-concept living room designed for relaxation. Integrated seamlessly within the living area is a practical, fully equipped kitchenette featuring:
              </p>
              <ul className="list-disc pl-5 font-body-md text-body-md text-on-surface-variant space-y-2">
                <li>An induction cooktop and essential utensils.</li>
                <li>Everything you need to comfortably brew your morning tea or coffee and prepare light meals.</li>
              </ul>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-lg soft-elevation reveal border border-outline-variant/30" style={{transitionDelay: "100ms"}}>
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: '"wght" 200'}}>bed</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-4">The Bedroom & Modern Comforts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-label-md text-label-md text-primary uppercase mb-1">Premium Sleep</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">A top-tier, high-quality mattress paired with plush bedding to guarantee deep, restorative sleep.</p>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary uppercase mb-1">Conveniences</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Ample wardrobe/cupboard storage for your luggage and a clothes iron to keep your travel wardrobe fresh.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-lg soft-elevation reveal border border-outline-variant/30" style={{transitionDelay: "200ms"}}>
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: '"wght" 200'}}>shower</span>
              <h3 className="font-title-lg text-title-lg text-tertiary mb-4">The Washroom</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A clean, contemporary bathroom featuring a 24/7 hot and cold shower facility to refresh you at any hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tertiary text-surface-bright py-[80px]">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop text-center max-w-2xl reveal">
          <span className="material-symbols-outlined text-4xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>leak_remove</span>
          <h2 className="font-headline-lg text-headline-lg mb-4">Winter Comforts</h2>
          <p className="font-body-lg text-body-lg opacity-90 mb-8">To keep you perfectly cozy during Almora's crisp winter months, room blowers and heaters are available for your comfort.</p>
          <div className="flex justify-center gap-6">
            <span className="bg-secondary/10 text-secondary-fixed-dim px-4 py-2 border border-secondary/30 font-label-md text-label-md rounded-full">Heaters Available (Nominal Charge)</span>
          </div>
        </div>
      </section>

      <section className="bg-surface py-[100px]">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-outline-variant pt-12">
            <div className="reveal">
              <h4 className="font-headline-md text-headline-md text-tertiary mb-8">House Rules</h4>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-surface-container-highest pb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant">CHECK-IN</span>
                  <span className="font-body-md text-body-md text-tertiary">12:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-surface-container-highest pb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant">CHECK-OUT</span>
                  <span className="font-body-md text-body-md text-tertiary">10:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-surface-container-highest pb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant">SMOKING</span>
                  <span className="font-body-md text-body-md text-tertiary">Designated outdoor areas only</span>
                </div>
                <div className="flex justify-between border-b border-surface-container-highest pb-4">
                  <span className="font-label-md text-label-md text-on-surface-variant">PETS</span>
                  <span className="font-body-md text-body-md text-tertiary">Kindly inquire beforehand</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-10 flex flex-col justify-center reveal" style={{transitionDelay: "200ms"}}>
              <h4 className="font-label-md text-label-md text-primary mb-4 uppercase tracking-[0.2em]">Guest Requirements</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">To ensure a safe and serene experience for everyone, we require a valid Government ID for all guests at the time of check-in. As we are in an ecologically sensitive zone, we encourage our guests to minimize plastic use during their stay.</p>
              <Link href="/policy" className="text-tertiary font-label-md text-label-md underline underline-offset-8 decoration-outline hover:text-primary transition-colors inline-block">View Full Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
