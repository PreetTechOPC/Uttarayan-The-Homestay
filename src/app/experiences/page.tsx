import Link from "next/link";

export default function Experiences() {
  return (
    <>
      <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop text-center bg-surface">
        <div className="max-w-3xl mx-auto reveal">
          <span className="font-label-md text-label-md text-primary tracking-[0.2em] mb-4 block">CULTURAL CAPITAL OF KUMAON</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-8">Experience Almora</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Perched on a horse-saddle shaped ridge of the Himalayas, Almora is a labyrinth of ancient traditions, sacred temples, and cobblestone streets. From the mystical vibrations of Kasar Devi to the rhythmic echoes of the bazaar, discover the soulful heart of Uttarakhand.
          </p>
          <div className="mt-12 flex justify-center items-center">
            <div className="w-16 h-[1px] bg-outline-variant"></div>
            <span className="mx-4 text-[#8A2E1E] material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>nature_people</span>
            <div className="w-16 h-[1px] bg-outline-variant"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-margin-mobile md:px-margin-desktop border-t border-[#E7DCC3]">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 reveal">
          <h2 className="font-headline-lg text-headline-lg text-tertiary">Walking Distance</h2>
          <p className="font-label-md text-label-md text-on-surface-variant">0 - 2 KM FROM HOMESTAY</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="group cursor-pointer reveal">
            <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg bg-surface-container-low">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Nanda Devi Temple" src="/places/nanda.png" alt="Nanda Devi Temple" />
              <div className="absolute top-4 left-4 bg-secondary/10 backdrop-blur-sm text-secondary px-3 py-1 rounded-full font-label-md text-[10px]">SPIRITUAL</div>
            </div>
            <h3 className="font-title-lg text-title-lg mb-2">Nanda Devi Temple</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">A 1000-year-old sanctuary dedicated to the patron goddess of Kumaon kings, featuring magnificent stone carvings.</p>
            <div className="flex items-center text-primary font-label-md text-label-md tracking-wider">
              <span>LEARN MORE</span>
              <span className="material-symbols-outlined text-[18px] ml-2">trending_flat</span>
            </div>
          </div>
          
          <div className="group cursor-pointer reveal" style={{transitionDelay: "100ms"}}>
            <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg bg-surface-container-low">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Malla Mahal" src="/photos/IMG_5124.jpg" alt="Malla Mahal" />
              <div className="absolute top-4 left-4 bg-secondary/10 backdrop-blur-sm text-secondary px-3 py-1 rounded-full font-label-md text-[10px]">HISTORICAL</div>
            </div>
            <h3 className="font-title-lg text-title-lg mb-2">Malla Mahal</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">The former royal residence of the Chand dynasty, now a museum housing artifacts of the region's rich history.</p>
            <div className="flex items-center text-primary font-label-md text-label-md tracking-wider">
              <span>EXPLORE HISTORY</span>
              <span className="material-symbols-outlined text-[18px] ml-2">trending_flat</span>
            </div>
          </div>
          
          <div className="group cursor-pointer reveal" style={{transitionDelay: "200ms"}}>
            <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-lg bg-surface-container-low">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Almora Bazaar" src="/photos/IMG_5125.jpg" alt="Almora Bazaar" />
              <div className="absolute top-4 left-4 bg-secondary/10 backdrop-blur-sm text-secondary px-3 py-1 rounded-full font-label-md text-[10px]">CULTURAL</div>
            </div>
            <h3 className="font-title-lg text-title-lg mb-2">Almora Bazaar</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Walk through 200-year-old stone streets lined with copper smiths, traditional weavers, and local spice markets.</p>
            <div className="flex items-center text-primary font-label-md text-label-md tracking-wider">
              <span>WALK THE STREETS</span>
              <span className="material-symbols-outlined text-[18px] ml-2">trending_flat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 reveal">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-tertiary">Scenic Drives</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg">Breathtaking routes leading to the spiritual and natural peaks of the Almora district.</p>
          </div>
          <div className="mt-4 md:mt-0 px-4 py-2 border border-outline-variant font-label-md text-label-md text-primary">
            PRIVATE TRANSPORT AVAILABLE
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col md:flex-row gap-8 bg-surface-bright p-8 soft-elevation rounded-lg group reveal">
            <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Kasar Devi" src="/places/kasar.png" alt="Kasar Devi" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-secondary font-label-md text-[12px] mb-2 uppercase">Crank's Ridge</span>
              <h3 className="font-headline-md text-headline-md mb-4">Kasar Devi</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Known for its unique geomagnetic field, this temple has hosted seekers like Swami Vivekananda and Bob Dylan.</p>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>20 min drive</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 bg-surface-bright p-8 soft-elevation rounded-lg group reveal" style={{transitionDelay: "100ms"}}>
            <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Binsar Sanctuary" src="/places/binsar.png" alt="Binsar Sanctuary" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-secondary font-label-md text-[12px] mb-2 uppercase">Flora & Fauna</span>
              <h3 className="font-headline-md text-headline-md mb-4">Binsar Sanctuary</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">A dense forest of oak and rhododendron offering 360-degree views of the Nanda Devi and Trishul peaks.</p>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>50 min drive</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 bg-surface-bright p-8 soft-elevation rounded-lg group reveal">
            <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Katarmal Sun Temple" src="/photos/IMG_5130.jpg" alt="Katarmal Sun Temple" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-secondary font-label-md text-[12px] mb-2 uppercase">9th Century Heritage</span>
              <h3 className="font-headline-md text-headline-md mb-4">Katarmal Sun Temple</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">The second most important Sun temple in India, famous for its intricate architecture and wood-carved doors.</p>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>45 min drive</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 bg-surface-bright p-8 soft-elevation rounded-lg group reveal" style={{transitionDelay: "100ms"}}>
            <div className="w-full md:w-1/2 aspect-square rounded overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Chitai Golu Devta" src="/photos/IMG_5131.jpg" alt="Chitai Golu Devta" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="text-secondary font-label-md text-[12px] mb-2 uppercase">Temple of Justice</span>
              <h3 className="font-headline-md text-headline-md mb-4">Chitai Golu Devta</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Famed for the thousands of bells and letters left by devotees seeking justice from the local deity.</p>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-[12px]">
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>15 min drive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop border-b border-[#E7DCC3]">
        <div className="max-w-[1000px] mx-auto bg-surface p-12 rounded-lg border border-[#E7DCC3] relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8">
            <span className="material-symbols-outlined text-[120px] text-tertiary">temple_hindu</span>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <img className="w-full rounded-lg soft-elevation aspect-[3/4] object-cover" data-alt="Jageshwar Dham" src="/places/jageshwar.png" alt="Jageshwar Dham" />
            </div>
            <div className="w-full md:w-2/3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase mb-4 block">Half-Day Excursion</span>
              <h2 className="font-headline-lg text-headline-lg mb-6">Jageshwar Dham</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Located 36km from Almora, this cluster of 124 ancient stone temples dating back to the 9th-13th century is nestled in a dense Deodar forest. One of the 12 Jyotirlingas, it offers an unmatched atmosphere of peace and architectural grandeur.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <h4 className="font-label-md text-label-md text-tertiary mb-1">BEST TIME</h4>
                  <p className="font-body-md text-body-md">Morning Aarti (6:00 AM)</p>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-tertiary mb-1">DISTANCE</h4>
                  <p className="font-body-md text-body-md">36 KM (1.5 hrs Drive)</p>
                </div>
              </div>
              <button className="border-2 border-tertiary px-8 py-3 font-label-md text-label-md tracking-[0.2em] hover:bg-tertiary hover:text-on-tertiary transition-all">
                REQUEST A TOUR GUIDE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="text-center mb-16 reveal">
          <h2 className="font-headline-lg text-headline-lg mb-4">A Day in Almora</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Our suggested itinerary to make the most of your cultural retreat.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E7DCC3] -translate-x-1/2 hidden md:block"></div>
          
          <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between reveal">
            <div className="md:w-[45%] text-center md:text-right mb-6 md:mb-0 order-2 md:order-1">
              <h3 className="font-title-lg text-title-lg mb-2">Sunrise at Bright End Corner</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Witness the first light hitting the Himalayan peaks followed by a peaceful nature walk.</p>
            </div>
            <div className="z-10 bg-[#8A2E1E] text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold order-1 md:order-2 mb-6 md:mb-0">
              <span className="text-[12px]">06:00</span>
            </div>
            <div className="md:w-[45%] order-3"></div>
          </div>
          
          <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between reveal" style={{transitionDelay: "100ms"}}>
            <div className="md:w-[45%] order-1"></div>
            <div className="z-10 bg-[#8A2E1E] text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold order-2 mb-6 md:mb-0">
              <span className="text-[12px]">10:00</span>
            </div>
            <div className="md:w-[45%] text-center md:text-left order-3">
              <h3 className="font-title-lg text-title-lg mb-2">Spiritual Pilgrimage</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Visit the Nanda Devi temple and explore the historical Malla Mahal museum.</p>
            </div>
          </div>
          
          <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between reveal" style={{transitionDelay: "200ms"}}>
            <div className="md:w-[45%] text-center md:text-right mb-6 md:mb-0 order-2 md:order-1">
              <h3 className="font-title-lg text-title-lg mb-2">Kumaoni Lunch & Bazaar</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Enjoy a traditional lunch at the market and shop for local 'Aipan' art and copperware.</p>
            </div>
            <div className="z-10 bg-[#8A2E1E] text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold order-1 md:order-2 mb-6 md:mb-0">
              <span className="text-[12px]">13:00</span>
            </div>
            <div className="md:w-[45%] order-3"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between reveal" style={{transitionDelay: "300ms"}}>
            <div className="md:w-[45%] order-1"></div>
            <div className="z-10 bg-[#8A2E1E] text-on-primary w-12 h-12 rounded-full flex items-center justify-center font-bold order-2 mb-6 md:mb-0">
              <span className="text-[12px]">16:30</span>
            </div>
            <div className="md:w-[45%] text-center md:text-left order-3">
              <h3 className="font-title-lg text-title-lg mb-2">Magnetic Vibes at Kasar Devi</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Drive up to Kasar Devi for meditation and sunset views from the ridge.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
