import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Gallery() {
  // Read photos from public directory at runtime on server
  const photosDir = path.join(process.cwd(), "public", "photos");
  let photos: string[] = [];
  try {
    const files = fs.readdirSync(photosDir)
      .filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'))
      .map(f => '/photos/' + f);
    photos = Array.from(new Set(files));
  } catch (e) {
    console.error("Error reading photos directory:", e);
  }

  return (
    <>
      <section className="relative bg-surface py-[120px] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop text-center z-10 reveal">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Visual Journey</span>
          <h1 className="font-display-lg text-display-lg text-tertiary mt-4 mb-6">The Uttarayan Gallery</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A glimpse into the serene spaces, thoughtful details, and warm ambiance that await you at our homestay.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface-bright">
        <div className="max-w-[1400px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 reveal">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid mb-4 w-full inline-block overflow-hidden rounded-md soft-elevation group cursor-pointer">
                {/* We use a standard img tag because next/image requires width/height and we want a masonry masonry layout */}
                <img 
                  src={photo} 
                  alt={`Uttarayan Homestay Photo ${i + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
          {photos.length === 0 && (
            <p className="text-center font-body-md text-on-surface-variant">No photos currently available.</p>
          )}
        </div>
      </section>
      
      <section className="py-[100px] bg-surface text-center reveal">
        <div className="max-w-2xl mx-auto px-margin-mobile">
          <h2 className="font-headline-md text-headline-md text-tertiary mb-6">Ready to experience this in person?</h2>
          <Link href="/contact" className="inline-block bg-primary text-on-primary px-10 py-4 rounded-DEFAULT font-label-md text-label-md tracking-widest uppercase hover:bg-primary-container transition-all shadow-lg">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}
