import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 parallax" style={{backgroundImage: "url('/photos/IMG_5093.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        </div>
        <div className="absolute inset-0 bg-on-background/30 z-10"></div>
        <div className="relative z-20 text-center text-white px-margin-mobile reveal">
          <p className="font-label-md text-label-md tracking-[0.4em] uppercase mb-4 opacity-90">Heritage & Hospitality</p>
          <h1 className="font-display-lg text-display-lg md:text-[72px] leading-tight mb-6">The Journey Northward</h1>
          <div className="w-16 h-[2px] bg-white/50 mx-auto"></div>
        </div>
      </section>

      <section className="py-[120px] max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 reveal">
            <span className="text-terracotta font-label-md text-label-md tracking-widest uppercase mb-4 block">01. Our Story</span>
            <h2 className="font-headline-lg text-headline-lg mb-8 text-on-surface">The Meaning of Uttarayan</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                In the quiet majesty of Almora, Uttarayan represents the sacred northward journey of the sun—a transition into a season of deeper light, warmth, and spiritual renewal. Our homestay is built upon this very essence: it is a sanctuary designed for clarity, comfort, and mindful living.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic border-l-2 border-[#E7DCC3] pl-6 py-2">
                We believe that travel should be an act of slowing down. Uttarayan is crafted to be a pause button for the modern soul—a space where you can step away from the chaos of the world and reconnect with the quiet rhythms of nature.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7 relative reveal">
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" src="/photos/IMG_5095.jpg" alt="Heritage architectural detail" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgba(62,90,58,0.1)] items-center justify-center p-8 hidden md:flex">
              <span className="material-symbols-outlined text-[#3E5A3A] text-6xl" data-icon="auto_awesome">auto_awesome</span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center py-8">
        <div className="w-24 h-[1px] bg-[#E7DCC3]"></div>
        <span className="material-symbols-outlined text-[#8A2E1E] px-4" data-icon="eco">eco</span>
        <div className="w-24 h-[1px] bg-[#E7DCC3]"></div>
      </div>

      <section className="py-[120px] bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16 reveal">
          <span className="text-[#8A2E1E] font-label-md text-label-md tracking-widest uppercase mb-4 block">02. Our Philosophy</span>
          <h2 className="font-display-lg text-display-lg">The Pillars of Stillness</h2>
        </div>
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 border border-[#E7DCC3] hover:bg-white transition-all duration-300 reveal">
            <div className="w-16 h-16 rounded-full bg-[rgba(62,90,58,0.1)] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#3E5A3A] text-3xl" data-icon="temple_hindu">temple_hindu</span>
            </div>
            <h3 className="font-title-lg text-title-lg mb-4">Mindful Hospitality</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Our philosophy extends seamlessly from our peaceful spaces into our kitchen. Uttarayan is a completely vegetarian haven, offering a mindful blend of traditional Kumaoni heritage and contemporary comfort food.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 border border-[#E7DCC3] hover:bg-white transition-all duration-300 reveal" style={{transitionDelay: "100ms"}}>
            <div className="w-16 h-16 rounded-full bg-[rgba(62,90,58,0.1)] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#3E5A3A] text-3xl" data-icon="nature_people">nature_people</span>
            </div>
            <h3 className="font-title-lg text-title-lg mb-4">Conscious Living</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">From solar energy to local organic harvests, our footprint is as light as a mountain breeze.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 border border-[#E7DCC3] hover:bg-white transition-all duration-300 reveal" style={{transitionDelay: "200ms"}}>
            <div className="w-16 h-16 rounded-full bg-[rgba(62,90,58,0.1)] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#3E5A3A] text-3xl" data-icon="hourglass_empty">hourglass_empty</span>
            </div>
            <h3 className="font-title-lg text-title-lg mb-4">The Luxury of a Pause</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">True luxury is not excess; it is time. We provide the space for the world to stop for a moment.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 z-0 parallax" style={{backgroundImage: "url('/photos/IMG_5097.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        </div>
        <div className="absolute inset-0 bg-on-background/20"></div>
      </section>

      <section className="py-[160px] max-w-[800px] mx-auto px-margin-mobile text-center reveal">
        <span className="text-[#8A2E1E] font-label-md text-label-md tracking-widest uppercase mb-8 block">03. Our Promise</span>
        <h2 className="font-display-lg text-display-lg mb-12 leading-tight">Finding peace amidst the eternal peaks.</h2>
        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
          <p>"We promise a sanctuary where the noise of the modern world fades into the rustle of deodar leaves. Here, you are not a visitor, but a part of the mountain's eternal story."</p>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4" data-icon="mountain_flag">mountain_flag</span>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Uttarayan The Homestay</p>
          <p className="font-body-md text-body-md text-outline">Dharanaula, Almora, Uttarakhand 263601</p>
        </div>
      </section>
    </>
  );
}
