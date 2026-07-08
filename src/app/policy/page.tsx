import Link from "next/link";

export default function Policy() {
  return (
    <>
      <section className="bg-surface py-20 border-b border-outline-variant">
        <div className="max-w-[800px] mx-auto px-margin-mobile md:px-0 text-center">
          <span className="font-label-md text-label-md text-primary tracking-[0.2em] uppercase mb-4 block">Legal & Policies</span>
          <h1 className="font-display-lg text-display-lg text-tertiary">Uttarayan The Homestay</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">Cancellation, Refund, and House Rules</p>
        </div>
      </section>

      <section className="py-20 bg-surface-bright">
        <div className="max-w-[800px] mx-auto px-margin-mobile md:px-0 space-y-16">
          
          <div>
            <h2 className="font-headline-lg text-headline-lg text-tertiary mb-6 border-b border-surface-container-highest pb-4">Cancellation and Refund Policy</h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>All cancellations must be communicated in writing or by message to the property.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>30 Days or More:</strong> If cancelled 30 days or more before the scheduled arrival date, 90% of the booking amount will be refunded.</li>
                <li><strong>15 to 29 Days:</strong> If cancelled between 15 and 29 days before arrival, 50% of the booking amount will be refunded.</li>
                <li><strong>Within 14 Days:</strong> If cancelled within 14 days of check-in, no refund will be applicable.</li>
                <li><strong>No-Shows:</strong> No-shows will be treated as non-refundable cancellations without notice.</li>
              </ul>
              <p>Refunds, if applicable, will be processed to the original payment source within 7 to 14 working days.</p>
              
              <h3 className="font-title-lg text-title-lg text-tertiary mt-8 mb-4">Rescheduling</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>One date change may be allowed subject to availability and prior notice of at least 48 hours.</li>
                <li>Rescheduling requests made within 48 hours of check-in may be treated as a cancellation.</li>
              </ul>

              <h3 className="font-title-lg text-title-lg text-tertiary mt-8 mb-4">Force Majeure</h3>
              <p>If travel is affected by natural calamity, road blockage, government restriction, strike, or other events beyond our control, the booking may be rescheduled subject to availability or handled as per management discretion.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline-lg text-headline-lg text-tertiary mb-6 border-b border-surface-container-highest pb-4">Rules and Regulations</h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <h3 className="font-title-lg text-title-lg text-tertiary mt-6 mb-4">Check-in and Stay</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Check-in time:</strong> 12:00 PM.</li>
                <li><strong>Check-out time:</strong> 10:00 AM.</li>
                <li>Early check-in and late check-out are subject to availability and may carry additional charges.</li>
              </ul>

              <h3 className="font-title-lg text-title-lg text-tertiary mt-6 mb-4">Guest Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>A valid government photo ID is required for every guest at check-in.</li>
                <li>The booking must include the correct number of guests, including children and extra persons.</li>
                <li>Any extra person, mattress, or child charge will be applied as per the tariff communicated at booking.</li>
              </ul>

              <h3 className="font-title-lg text-title-lg text-tertiary mt-6 mb-4">Conduct and Property Use</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Guests must maintain decorum, avoid loud music, and respect quiet hours from 10:00 PM to 7:00 AM.</li>
                <li>Smoking is not permitted inside rooms and is allowed only in designated outdoor areas.</li>
                <li>Parties, illegal activities, and disturbing behavior are strictly not allowed.</li>
                <li>Guests are responsible for any damage caused to property, furniture, fixtures, or equipment and may be charged for repairs or replacement.</li>
              </ul>

              <h3 className="font-title-lg text-title-lg text-tertiary mt-6 mb-4">Safety and Compliance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Guests must follow all fire safety, parking, and property instructions.</li>
                <li>Management may refuse admission or ask guests to leave without refund in case of misconduct, rule violation, or safety concerns.</li>
                <li>Pets are allowed only if stated in advance and approved by management, with any applicable pet fee clearly informed beforehand.</li>
              </ul>

              <h3 className="font-title-lg text-title-lg text-tertiary mt-6 mb-4">Management Rights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Management reserves the right to modify tariffs, booking terms, or house rules when necessary.</li>
                <li>The homestay may request additional verification or information to ensure compliance with local tourism rules.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-surface-container p-6 rounded-lg border-l-4 border-primary">
            <p className="font-body-md text-body-md text-tertiary italic font-medium">
              “Cancellation and refunds are subject to the property’s cancellation policy; cancellations within the final cut-off period and no-shows are non-refundable.”
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
