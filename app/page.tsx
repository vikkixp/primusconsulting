import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-7xl">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="h-9 w-9 drop-shadow-sm">
              <rect width="36" height="36" rx="6" fill="url(#logo-gradient)"/>
              <path d="M10.5 10.5H19C21.4853 10.5 23.5 12.5147 23.5 15C23.5 17.4853 21.4853 19.5 19 19.5H13.5V25.5H10.5V10.5Z" fill="white"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1d4ed8"/>
                  <stop offset="1" stop-color="#1e40af"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-semibold text-lg tracking-tight text-slate-800">Primus Consulting</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">About</Link>
            <Link href="#services" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Services</Link>
            <Link href="#expertise" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Expertise</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Contact</Link>
          </nav>
          <Link href="#contact" className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors duration-200 shadow-sm">
            Get in Touch
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">Salesforce Consulting & Development</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Developer-led Salesforce solutions that grow with your business.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                We don't just click and configure. We build custom, scalable Salesforce implementations that solve real business problems for global B2B firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors text-center">
                  Schedule a Consultation
                </Link>
                <Link href="#services" className="rounded-lg border border-slate-200 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built by developers, for businesses that mean business.</h2>
                <p className="text-slate-600 mb-4 text-lg">
                  Primus Consulting was founded on the belief that great Salesforce implementations require more than just admin certifications. They require engineering expertise.
                </p>
                <p className="text-slate-600 mb-6 text-lg">
                  Our team of certified Salesforce developers build solutions that are maintainable, performant, and designed to evolve as your organization grows. No technical debt, no quick fixes. Just solid engineering.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-slate-600">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">98%</p>
                    <p className="text-sm text-slate-600">Client Retention</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">10+</p>
                    <p className="text-sm text-slate-600">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 rounded-2xl h-80 md:h-auto"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What we do best</h2>
              <p className="text-slate-600 text-lg">End-to-end Salesforce services built on solid engineering principles.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Development",
                  description: "Apex, LWC, Flow, and integration development built to enterprise standards with proper testing and documentation.",
                },
                {
                  title: "Implementation & Migration",
                  description: "Full Salesforce implementations, data migrations, and org transformations planned and executed by senior engineers.",
                },
                {
                  title: "Technical Architecture",
                  description: "System design, performance audits, governance frameworks, and technical debt elimination.",
                },
                {
                  title: "Integration Services",
                  description: "REST, SOAP, Bulk API, and middleware integrations with your existing business systems.",
                },
                {
                  title: "Managed Services",
                  description: "Ongoing development, maintenance, and support from dedicated Salesforce engineers.",
                },
                {
                  title: "Training & Enablement",
                  description: "Technical training for your internal team to build and maintain Salesforce solutions properly.",
                },
              ].map((service, index) => (
                <div key={index} className="rounded-xl border border-slate-200 p-8 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Deep technical Salesforce expertise</h2>
              <p className="text-slate-400 text-lg">Our team holds advanced certifications and real-world engineering experience across the entire Salesforce platform.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-sm">
              {[
                "Salesforce Certified Technical Architect",
                "Platform Developer I & II",
                "Apex & LWC Specialists",
                "Service Cloud Consultant",
                "Sales Cloud Consultant",
                "CPQ Implementation",
                "Experience Cloud",
                "MuleSoft Integration",
                "Bulk & Composite APIs",
                "CI/CD for Salesforce",
                "Performance Optimization",
                "Security & Governance",
              ].map((item, index) => (
                <div key={index} className="border border-slate-800 rounded-lg px-4 py-3 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">Trusted By</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Companies that rely on us</h2>
              <p className="text-slate-600 text-lg">We work with B2B organizations across industries globally.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-12 bg-slate-200 rounded"></div>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Primus didn't just build our Salesforce instance — they built something that actually fits how our business works. No compromises.",
                  company: "SaaS Technology Company",
                },
                {
                  quote: "Other consultants told us what we wanted wasn't possible. Primus's engineers built it in 6 weeks. Night and day difference.",
                  company: "Global Manufacturing Firm",
                },
                {
                  quote: "Finally a Salesforce partner that understands software development best practices. No more messy, unmaintainable code.",
                  company: "Financial Services Provider",
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-xl border border-slate-200 p-8">
                  <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-slate-900">— {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to build something that lasts?</h2>
            <p className="text-blue-100 text-lg mb-10">
              Schedule a free 30-minute technical consultation with one of our senior Salesforce engineers. No sales pitches. Just honest technical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:hello@primusconsulting.com" className="rounded-lg bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors text-center">
                hello@primusconsulting.com
              </Link>
              <Link href="#" className="rounded-lg border border-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors text-center">
                Book a Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="h-8 w-8 drop-shadow-sm">
                <rect width="36" height="36" rx="6" fill="url(#footer-logo-gradient)"/>
                <path d="M10.5 10.5H19C21.4853 10.5 23.5 12.5147 23.5 15C23.5 17.4853 21.4853 19.5 19 19.5H13.5V25.5H10.5V10.5Z" fill="white"/>
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1d4ed8"/>
                    <stop offset="1" stop-color="#1e40af"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold">Primus Consulting</span>
            </div>
            <p className="text-sm text-slate-500">© 2026 Primus Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
