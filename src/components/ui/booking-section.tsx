const CONTACTS = [
  {
    label: "Company Email",
    value: "divfixer.com@gmail.com",
    href: "mailto:divfixer.com@gmail.com",
  },
  {
    label: "Devansh",
    value: "devanshdave0777@gmail.com",
    href: "mailto:devanshdave0777@gmail.com",
  },
  {
    label: "Rohit",
    value: "orion.meta27@gmail.com",
    href: "mailto:orion.meta27@gmail.com",
  },
  {
    label: "Rohit Mobile",
    value: "+91 7086188997",
    href: "tel:+917086188997",
  },
  {
    label: "Devansh Mobile",
    value: "+91 9929280449",
    href: "tel:+919929280449",
  },
] as const;

const CALENDLY_URL = "https://calendly.com/div-fixer/30min";

export default function BookingSection() {
  return (
    <section id="booking" className="relative w-full bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Copy + contact */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
              Free clarity call
            </div>

            <h2 className="mt-4 text-left text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Want to start a project with us?
            </h2>
            <p className="mt-4 max-w-xl text-left text-base leading-relaxed text-neutral-600 sm:text-lg">
              Book a free clarity call now with us to discuss your project and needs.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONTACTS.map((c, idx) => (
                <a
                  key={`${c.label}-${c.value}-${idx}`}
                  href={c.href}
                  className="group rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors hover:border-neutral-300"
                >
                  <div className="text-xs font-medium text-neutral-500">{c.label}</div>
                  <div className="mt-1 break-all text-sm font-semibold text-neutral-900 group-hover:underline">
                    {c.value}
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Prefer WhatsApp? Message us on either mobile number above.
            </p>
          </div>

          {/* Right: Calendly embed */}
          <div className="lg:col-span-7">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-3 shrink-0">
                <div className="text-sm font-semibold text-neutral-900">Pick a time</div>
                <a
                  className="text-xs font-medium text-neutral-600 hover:underline"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in a new tab
                </a>
              </div>
              <div className="relative w-full overflow-hidden" style={{ height: '630px' }}>
                <iframe
                  title="Calendly - Div Fixer 30min"
                  src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
                  className="w-full border-0 absolute top-0 left-0"
                  style={{ display: 'block', height: '630px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
